// pages/_app.tsx

import type { AppProps } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-light backimg" >
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg bg-danger mb-5">
          <div className="container-fluid justify-content-between">
            <Link className="nav navbar-brand fw-bold fs-2 text-white" href="/">
              Password Tracker
            </Link>
          </div>
        </nav>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
