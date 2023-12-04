import type { NextPage } from "next";

interface Password {
  id: number;
  title: string;
  username: string;
}

interface DashboardProps {
  loggedIn: boolean;
  password: Password[];
}

const Dashboard: NextPage<DashboardProps> = ({ loggedIn, password }) => {
  return (
    <section>
      <div className="dash container-fluid">
        <div className="row justify-content-center">
          <div className="col-8">
            {loggedIn ? (
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
            ) : (
              <div>
                <a href="/login">
                  You must log in first to view saved passwords.
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
