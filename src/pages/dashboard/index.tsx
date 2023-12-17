import { NextPage } from "next";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import PasswordCard from "components/PasswordCard";
import { signOut } from 'next-auth/react';

interface Password {
  id: number;
  title: string;
  username: string;
}

interface DashboardProps {
  loggedIn: boolean;
  passwordData: Password[];
}

const Dashboard: NextPage<DashboardProps> = ({ loggedIn }) => {
  const [issue, setAlert] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [passwordData, setPasswordData] = useState<PasswordData[]>([]);
  const [allPasswords, setAllPasswords] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const sessionToken = Cookies.get("sessionToken");

      if (sessionToken) {
        try {
          const decodedToken = jwt.decode(sessionToken) as jwt.JwtPayload;

          if (decodedToken && decodedToken.logged_in) {
            setAlert(false);

            if (decodedToken.user_name === "Admin") {
              setAdmin(true);
              const response = await fetch("http://localhost:3001/", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${sessionToken}`,
                },
                credentials: "include",
              });

              if (response.ok) {
                const data = await response.json();
                setAllPasswords(data);
              } else {
                console.error("Fetch failed:", response.statusText);
              }
            }
          }
        } catch (error) {
          console.error("Error decoding JWT token:", error);
          alert("You must login to continue.");
          setAlert(true);
          // Use setTimeout to delay the redirection and allow the user to see the alert
          setTimeout(() => router.push("/"), 2000);
        }
      } else {
        console.error("No session token found.");
        alert("You must login to continue.");
        setAlert(true);
        // Use setTimeout to delay the redirection and allow the user to see the alert
        setTimeout(() => router.push("/"), 2000);
      }
    };

    fetchUserData();
  }, []);

  const onCopy = async (id: number) => {
    const copiedData = passwordData.find((item) => item.id === id);

    if (copiedData) {
      try {
        const sessionToken = Cookies.get("sessionToken");

        const response = await fetch(
          `http://localhost:3001/dashboard/copy/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionToken}`,
            },
            credentials: "include",
          }
        );

        if (response.ok) {
          const data = await response.json();
          const decryptedPassword = data.decryptedData;

          navigator.clipboard.writeText(decryptedPassword).then(
            function () {
              alert("Copying to clipboard was successful!");
            },
            function () {
              alert("Could not copy text.");
            }
          );
        } else {
          const errorData = await response.json();
          console.error("Fetch failed:", response.statusText, errorData);
          alert(`Failed to copy: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Error during fetch:", error);
        alert("An unexpected error occurred.");
      }
    }
  };

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Get the session token from cookies
          const sessionToken = Cookies.get("sessionToken");

          if (sessionToken) {
            const response = await fetch("http://localhost:3001/dashboard/", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionToken}`, // Include the JWT in the Authorization header
              },
              credentials: "include",
            });

            if (response.ok) {
              const data = await response.json();
              setPasswordData(data.password);
              // Handle the data as needed
            } else {
              // Handle error response
              console.error("Fetch failed:", response.statusText);
            }
          } else {
            console.error("No session token found.");
          }
        } catch (error) {
          console.error("Error during fetch:", error);
        }
      };

      fetchData();
    }, []);

  const onDelete = async (id: number) => {
    const sessionToken = Cookies.get("sessionToken");

    try {
      const response = await fetch(
        `http://localhost:3001/api/passwords/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionToken}`,
          },
          credentials: "include",
        }
      );

      if (response.ok) {
        setPasswordData((prevData) =>
          prevData.filter((item) => item.id !== id)
        );
        alert(`Password with ID ${id} deleted successfully`);
      } else {
        const errorData = await response.json();
        console.error("Delete failed:", response.statusText, errorData);
        alert(`Failed to delete: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      alert("An unexpected error occurred.");
    }
  };

  const [revealedPasswordId, setRevealedPasswordId] = useState<number | null>(
    null
  );

  // Event handler for mouse down
  const handleMouseDown = (event: React.MouseEvent, id: number) => {
    if (event.button === 0) {
      setRevealedPasswordId(id);
    }
  };

  // Event handler for mouse up
  const handleMouseUp = () => {
    setRevealedPasswordId(null);
  };

 const updateUserPassword = async (userId: number) => {
   try {
     // Assuming you have a state variable for the new password, replace 'newPassword' with your state variable
     const newPassword = prompt("Enter the new password:");

     if (!newPassword) {
       // User canceled the operation
       return;
     }

     const sessionToken = Cookies.get("sessionToken");

     const response = await fetch("http://localhost:3001/api/users/updatep", {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${sessionToken}`,
       },
       credentials: "include",
       body: JSON.stringify({
         id: userId,
         newPassword: newPassword,
       }),
     });

     if (response.ok) {
       alert("Password updated successfully!");
     } else {
       const errorData = await response.json();
       console.error("Update failed:", response.statusText, errorData);
       alert(`Failed to update password: ${errorData.message}`);
     }
   } catch (error) {
     console.error("Error during fetch:", error);
     alert("An unexpected error occurred.");
   }
 };

 console.log(passwordData)

  return (
    <section
      className="vh-100 container-fluid d-flex align-items-center justify-content-center darkColor pb-5"
      onMouseUp={handleMouseUp}
    >
      <div className="col-md-6 rounded blue p-5 border border-dark text-center">
        {isAdmin ? (
          <div>
            <h1 className="darkGreen mb-2">Welcome Admin!</h1>
            {allPasswords.map((item) => (
              <div
                key={item.id}
                onMouseDown={(e) => handleMouseDown(e, item.id)}
                className="mb-3 p-3 border"
              >
                <p className="darkGreen">Username: {item.user_name}</p>
                <p className="oliveGreen">ID: {item.id}</p>
                {/* Conditionally show or hide password based on revealedPasswordId */}
                <p className="yellow">
                  Password:{" "}
                  {revealedPasswordId === item.id
                    ? item.user_password
                    : "********"}
                </p>
                <button
                  data-id={item.id}
                  className="darkGreen"
                  onClick={() => updateUserPassword(item.id)}
                >
                  Update Password
                </button>
              </div>
            ))}
          </div>
        ) : (
          <>
            <h2 className="text-center darkGreen font-weight-bold mb-4">
              Dashboard
            </h2>
            {issue ? (
              <div>
                <h1>You Must Login To Access This Page.</h1>
              </div>
            ) : passwordData && passwordData.length > 0 ? (
              <div className="dash row row-cols-1 row-cols-md-3 g-4">
                {passwordData.map((item) => (
                  <div key={item.id} className="col mb-3">
                    <PasswordCard
                      item={item}
                      onCopy={onCopy}
                      onDelete={onDelete}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="text-center mb-4">
                  <p className="oliveGreen">Your dashboard is empty.</p>
                </div>
              </div>
            )}
            {!isAdmin && (
              <div>
                <a
                  href="/addpassword"
                  className="d-flex justify-content-center"
                >
                  <button className="btn yellow">Add Password</button>
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
