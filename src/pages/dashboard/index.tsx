import type { NextPage } from "next";
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import type { NextApiRequest, NextApiResponse } from "next";
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { useEffect, useState } from "react";

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
    const sessionToken = Cookies.get('sessionToken');

    if (sessionToken) {
    try {
      // Decode the JWT token (no verification)
      const decodedToken = jwt.decode(sessionToken) as jwt.JwtPayload;

      if (decodedToken && decodedToken.logged_in) {
        
       setAlert(false);

      }
    } catch (error) {
      console.error('Error decoding JWT token:', error);
      alert('You must login to continue.');
      setAlert(true);
      // Use setTimeout to delay the redirection and allow the user to see the alert
      setTimeout(() => router.push('/'), 2000);
    }
  } else {
    console.error('No session token found.');
    alert('You must login to continue.');
    setAlert(true);
    // Use setTimeout to delay the redirection and allow the user to see the alert
    setTimeout(() => router.push('/'), 2000);
  }
}, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the session token from cookies
        const sessionToken = Cookies.get('sessionToken');

        if (sessionToken) {
          const response = await fetch('http://localhost:3001/dashboard/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sessionToken}`, // Include the JWT in the Authorization header
            },
            credentials: 'include',
          });

          if (response.ok) {
            const data = await response.json();
            setPasswordData(data.password);
            // Handle the data as needed
          } else {
            // Handle error response
            console.error('Fetch failed:', response.statusText);
          }
        } else {
          console.error('No session token found.');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
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
      const sessionToken = Cookies.get('sessionToken');

      const response = await fetch(`http://localhost:3001/dashboard/copy/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionToken}`, // Include the JWT in the Authorization header
        },
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        const decryptedPasswword = data.decryptedData
        

        // Use data as needed
        navigator.clipboard.writeText(decryptedPasswword).then(
          function () {
            alert('Copying to clipboard was successful!');
          },
          function () {
            alert('Could not copy text.');
          }
        );
      } else {
        // Handle error response
        const errorData = await response.json(); // Assuming your server sends JSON error messages
        console.error('Fetch failed:', response.statusText, errorData);
        alert(`Failed to copy: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      alert('An unexpected error occurred.');
    }
  }
};


  if (issue === true) {
    return (
      <div>
        <h1>You Must Login To Access This Page.</h1>
      </div>
    );
  } else if (issue === false) {
   return (
  <section>
    <div className="dash container-fluid">
      <div className="row justify-content-center">
        <div className="col-8">
          {passwordData ? (
            <div>
              <table className="table-striped table-hover m-0 table border">
                <thead className="thead-dark">
                  <tr>
                    <th className="head bg-danger col-2 text-white" scope="col">
                      Website
                    </th>
                    <th className="bg-danger col-3 text-white" scope="col">
                      Username
                    </th>
                    <th className="bg-danger col-3 text-white" scope="col">
                      Password
                    </th>
                    <th className="bg-danger col-1 text-white" scope="col">
                      Update
                    </th>
                    <th className="head-2 bg-danger col-1 text-white" scope="col">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {passwordData.map((item) => (
                    <tr key={item.id} className="buttonList">
                      <td className="web">{item.title}</td>
                      <td className="name">{item.username}</td>
                      <td className="password">
                        {/* Use an anchor tag for the link */}
                        <a className="password-link">
                          ●●●●●●●●
                          <button
                            className="btn btn-danger Copy ms-3"
                            data-id={item.id}
                            onClick={() => onCopy(item.id)}
                          >
                            Copy
                          </button>
                        </a>
                      </td>
                      <td className="updateB">
                        <a href={`/dashboard/update/${item.id}`} className="btn btn-danger update ms-3">
                          Update
                        </a>
                      </td>
                      <td className="deleteB">
                        <button data-id={item.id} className="btn btn-danger delete ms-3">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              <p>Your dashboard is empty. Click the button below to add a password.</p>
              <a className="btn btn-danger text-align-center" href="/addpassword">
                Add Password
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);
  }
};

export default Dashboard;
