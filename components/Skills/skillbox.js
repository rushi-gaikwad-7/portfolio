import Link from 'next/link';
import classes from './skillBox.module.scss';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const SkillBox = (props) => {
  const { title, img } = props.post;
  
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className={classes.card} data-aos='zoom-in-up'>
      <div className={classes.cardContent}>
        
        <h4>{title}</h4>
        {/* <Image
              src=''
              width={460}
              height={460}
              alt='profile-pic'
              data-aos='fade-left'
            /> */}
      </div> 
    </div>
  );
};
export default SkillBox;
