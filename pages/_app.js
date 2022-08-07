import "../styles/globals.scss";
import Head from "next/head";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import { useState } from "react";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <div className="app" data-theme={theme}>
        <Navbar theme={setTheme}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              rel="shortcut icon"
              href="http://www.ricardogorski.com/wp-content/uploads/2021/06/RG-Logo-White.png"
            />
          </Head>
          <Component {...pageProps} currentTheme={theme} />
          <Footer />
        </Navbar>
          <i  onClick={()=>topFunction()} id="myBtn" className="fa-solid fa-circle-up"></i>
      </div>
    </>
  );
}

export default MyApp;
