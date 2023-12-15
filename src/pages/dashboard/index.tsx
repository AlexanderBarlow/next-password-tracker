import type { NextPage } from "next";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import PasswordCard from "components/PasswordCard";

interface Password {
  id: number;
  title: string;
  username: string;
}

interface DashboardProps {
  loggedIn: boolean;
  passwordData: Password[]; // Change the variable name to passwordData
  sess: any;
}

interface PasswordData {
  id: number;
  title: string;
  username: string;
}

interface DashboardProps {
  loggedIn: boolean;
  passwordData: PasswordData[];
  sess: any; // Adjust this type based on your actual session data type
}

const Dashboard: NextPage<DashboardProps> = ({ loggedIn }) => {
  const [issue, setAlert] = useState(false);
  const [passwordData, setPasswordData] = useState<PasswordData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const sessionToken = Cookies.get("sessionToken");

    if (sessionToken) {
      try {
        // Decode the JWT token (no verification)
        const decodedToken = jwt.decode(sessionToken) as jwt.JwtPayload;

        if (decodedToken && decodedToken.logged_in) {
          setAlert(false);
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
  }, []);

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

  const onCopy = async (id: number) => {
    // Grab the id from the copy button that was pressed
    // Get the password from the array with the id
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
              Authorization: `Bearer ${sessionToken}`, // Include the JWT in the Authorization header
            },
            credentials: "include",
          }
        );

        if (response.ok) {
          const data = await response.json();
          const decryptedPasswword = data.decryptedData;

          // Use data as needed
          navigator.clipboard.writeText(decryptedPasswword).then(
            function () {
              alert("Copying to clipboard was successful!");
            },
            function () {
              alert("Could not copy text.");
            }
          );
        } else {
          // Handle error response
          const errorData = await response.json(); // Assuming your server sends JSON error messages
          console.error("Fetch failed:", response.statusText, errorData);
          alert(`Failed to copy: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Error during fetch:", error);
        alert("An unexpected error occurred.");
      }
    }
  };

  const onDelete = async (id: number) => {
    const sessionToken = Cookies.get("sessionToken");

    try {
      // Assuming you have the id from the button, use it in the DELETE request
      const response = await fetch(
        `http://localhost:3001/api/passwords/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionToken}`, // Include the JWT in the Authorization header
          },
          credentials: "include",
        }
      );

      if (response.ok) {
        // Remove the deleted password from the state
        setPasswordData((prevData) =>
          prevData.filter((item) => item.id !== id)
        );
        alert(`Password with ID ${id} deleted successfully`);
      } else {
        // Handle error response
        const errorData = await response.json(); // Assuming your server sends JSON error messages
        console.error("Delete failed:", response.statusText, errorData);
        alert(`Failed to delete: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <section className="vh-100 container-fluid d-flex align-items-center justify-content-center darkColor pb-5">
      <div className="col-md-6 rounded blue p-5 border border-dark">
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
                <PasswordCard item={item} onCopy={onCopy} onDelete={onDelete} />
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
        <div>
          <a href="/addpassword" className="d-flex justify-content-center">
            <button className="btn yellow">Add Password</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
