import type { AppProps } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useSession, signOut } from 'next-auth/react';
import React from "react";
import Cookies from 'js-cookie';

async function logout(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.log("hit");

  // Clear the session on the client side
  signOut();

  // Clear the session token cookie
  Cookies.remove('sessionToken');

  // Perform server-side logout if needed
  const response = await fetch('http://localhost:3001/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Logout Failed.');
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  // Move the event listener into a useEffect hook to ensure proper lifecycle handling
  React.useEffect(() => {
    const logoutBtn = document.querySelector('#logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', logout);

      return () => {
        logoutBtn.removeEventListener('click', logout);
      };
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-light backimg">
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg bg-danger mb-5">
          <div className="container-fluid justify-content-between">
              <a className="nav navbar-brand fw-bold fs-2 text-white">Password Tracker</a>
              <a id="logout" className="nav navbar-brand fw-bold fs-2 text-white">Logout</a>
          </div>
        </nav>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
