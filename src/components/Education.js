import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";



const Details = ({ type,time,place,info }) => {
  
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="text-2xl font-bold capitalize">
          {type}
      
        </h3>
        <span className="capitalize font-medium text-light/60">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
 const ref =  useRef(null);
  const { scrollYProgress } = useScroll(
    { 
      target: ref, 
      offset:["start end", "center start"]
    }
  );
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative ">
        <motion.div  style={{scaleY: scrollYProgress}}
        className="absolute left-8 top-0 w-[4px] h-full bg-light origin-top dark:bg-dark" />

        <ul className="w-full flex flex-col items-start justify-between ml-4">


          <Details
            type={"Web Development Immersive"}
            time={"2017"}
            place={"General Assembly"}
            info={
              "Code Bootcamp, an immersive and comprehensive learning experience designed to equip individuals with the skills and knowledge needed to launch a career in software development. The program covered a wide range of topics, including web development, data science, and user experience design, and was taught by experienced industry professionals. I had the opportunity to work on real-world projects and build a portfolio of work to showcase my skills to potential employers. Throughout the program, I received career development support that included tools and resources to navigate the job market and secure a job in the tech industry. General Assembly's Code Bootcamp provided a dynamic and engaging learning environment that focused on hands-on learning, collaborative work, and practical applications, preparing me for success in the rapidly evolving field of technology. "
            }
          />
          <Details
            type={"Associates Of Applied Science"}
            time={"2006-2008"}
            place={"Johnson & Wales University"}
            info={
              "General Studies, Relevant Coursework: Computer Science, Web Development, Database Management, Business Management, Accounting, Marketing, Economics, and Finance."
            }
          />
          
        </ul>
      </div>
    </div>
  );
};

export default Education;
