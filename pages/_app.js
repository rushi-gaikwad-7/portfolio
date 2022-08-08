import "../styles/globals.scss";
import Head from "next/head";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  useEffect(()=>{

    window.addEventListener('scroll', toggleVisible);

  },[])

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
        <button onClick={scrollToTop} style={{display: visible ? 'inline' :'none'}} id="myBtn" ><i className="fa-solid fa-circle-up"></i></button>
      </div>
    </>
  );
}

export default MyApp;
