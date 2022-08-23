import classes from "./about.module.scss";
import { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import myPic from "../../public/images/aboutimage.jpg";
import "aos/dist/aos.css";
import ImgLoader from "../../util/imageLoader";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={classes.about} id="about">
      <div className={classes.container}>
        <h2 data-aos="slide-right">About me</h2>

        <div className={classes.row}>
          <div className={classes.columnLeft} data-aos="fade-right">
            <h3>
            My journey started as a coder when I printed the words  &apos;&apos;Hello World&apos;&apos; , and now I am an enthusiastic and passionate Full Stack Web Developer.
            </h3>
            <p>
              While I was studying B.Tech, I got interested in coding. After the
              phase of lockdowns began, in my free time I started learning how
              to code with the help of YouTube videos. During this time, I came
              across Masai School and decided to join. After spending half a
              month at the institute, I became certain that I will pursue web
              development as my career.
            </p>
            <p>
            Besides coding, I focus on physical and mental fitness by going to the gym, meditating, and playing chess and cricket.
            </p>
            <p>
            Looking forward to joining a progressive and challenging work environment that demands the best of my professional ability in terms of technical and analytical skills, and helps me in broadening and enhancing my current skill and knowledge.
            </p>
          </div>

          <div className={classes.columnRight}>
            <div className={classes.imageContainer}>
              <Image
                src={myPic}
                width={350}
                height={550}
                loader={ImgLoader}
                alt="profile-pic"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.contact}>
        <div>
        <div><i className="fa-solid fa-envelope"></i><p>gaikwadrushi777@gmail.com</p></div>
        <div><i className="fa-solid fa-phone"></i><p>7774962961</p></div>
        <div><i className="fa-solid fa-location-dot"></i><p>Pune, Maharashtra</p></div>
        </div>
      </div>
    </section>
  );
};
export default About;
