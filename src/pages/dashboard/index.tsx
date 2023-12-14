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
  password: Password[];
  sess: any;
}

const Dashboard: NextPage<DashboardProps> = ({ loggedIn, password }) => {
  const [issue, setAlert] = useState(false)
  const router = useRouter();

  useEffect(() => {
    const sessionToken = Cookies.get('sessionToken');
    console.log(sessionToken);

    if (sessionToken) {
      try {
        // Decode the JWT token (no verification)
        const decodedToken = jwt.decode(sessionToken);
        console.log(decodedToken);
        const loggedInStatus = decodedToken.logged_in;
        console.log(loggedInStatus);

        // Redirect to login page if not logged in
        if (!loggedInStatus) {
          alert('You must login to continue.');
          setAlert(true);
          // Use setTimeout to delay the redirection and allow the user to see the alert
          setTimeout(() => router.push('/'), 2000); // Adjust the delay as needed
        }
      } catch (error) {
        console.error('Error decoding JWT token:', error);
        alert('You must login to continue.');
        setAlert(true);
        // Use setTimeout to delay the redirection and allow the user to see the alert
        setTimeout(() => router.push('/'), 2000); // Adjust the delay as needed
      }
    } else {
      console.error('No session token found.');
      alert('You must login to continue.');
      setAlert(true);
      // Use setTimeout to delay the redirection and allow the user to see the alert
      setTimeout(() => router.push('/'), 2000); // Adjust the delay as needed
    }
  }, []);

  if(issue === true)
   { 
    return (
      <div>
        <h1>You Must Login To Access This Page.</h1>
      </div>
  )}
    else if (issue === false){
  return (
    <section>
      <div className="dash container-fluid">
        <div className="row justify-content-center">
          <div className="col-8">
            
              <div>
                {password && password.length > 0 ? (
                  <table className="table-striped table-hover m-0 table border">
                    <thead className="thead-dark">
                      <tr>
                        <th
                          className="head bg-danger col-2 text-white"
                          scope="col"
                        >
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
                        <th
                          className="head-2 bg-danger col-1 text-white"
                          scope="col"
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {password.map((item) => (
                        <tr key={item.id} className="buttonList">
                          <td className="web">{item.title}</td>
                          <td className="name">{item.username}</td>
                          <td className="password">
                            {/* Use an anchor tag for the link */}
                            <a
                              href={`/passwords/${item.id}`}
                              className="password-link"
                            >
                              ●●●●●●●●
                              <button
                                className="btn btn-danger Copy ms-3"
                                data-id={item.id}
                              >
                                Copy
                              </button>
                            </a>
                          </td>
                          <td className="updateB">
                            <a
                              href="dashboard/update"
                              className="btn btn-danger update ms-3"
                            >
                              Update
                            </a>
                          </td>
                          <td className="deleteB">
                            <button
                              data-id={item.id}
                              className="btn btn-danger delete ms-3"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div>
                    <p>
                      Your dashboard is empty. Click the button below to add a
                      password.
                    </p>
                    <a
                      className="btn btn-danger text-align-center"
                      href="dashboard/new"
                    >
                      Add Password
                    </a>
                  </div>
                )}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
};

export default Dashboard;
