// pages/_app.tsx

import { AppProps } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-light">
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg bg-danger mb-5">
          <div className="container-fluid justify-content-between">
            <a className="nav navbar-brand fw-bold fs-2 text-white" href="/">
              Password Tracker
            </a>
          </div>
        </nav>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
