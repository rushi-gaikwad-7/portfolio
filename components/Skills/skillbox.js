import Link from 'next/link';
import classes from './skillBox.module.scss';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
const SkillBox = (props) => {
  const { title, logo } = props.skill;
 
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className={classes.card} data-aos='zoom-in-up'>
        <i className={`${logo}`}></i>
        <h4>{title}</h4>
      
      </div> 
  );
};
export default SkillBox;
