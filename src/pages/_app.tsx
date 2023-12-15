import type { AppProps } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { signOut } from 'next-auth/react';
import React from "react";
import Cookies from 'js-cookie';
import '../styles/globals.css'

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

// ... (import statements)

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="">
        <nav className="navbar navbar-dark navbar-expand-lg darkColor">
          <div className="container-fluid justify-content-between">
            <h1 className="nav navbar-brand fw-bold fs-2 darkGreen">
              Password Tracker
            </h1>
            <a
              id="logout"
              className="nav navbar-brand fw-bold fs-2"
              onClick={logout}
            >
              <h1 className="darkGreen">Logout</h1>
            </a>
          </div>
        </nav>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;

