import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";



const Details = ({ position, company, companyLink, time, address, work }) => {
  
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            className="text-darkSecondary capitalize"
            target="_blank"
            href={companyLink}
          >
             {" "}@{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-light/60 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
 const ref =  useRef(null);
  const { scrollYProgress } = useScroll(
    { 
      target: ref, 
      offset:["start end", "center start"]
    }
  );
  return (
    <div className="my-64 xs:my-24">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">
        Expereince
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full  ">
        <motion.div  style={{scaleY: scrollYProgress}}
        className="absolute left-8 top-0 w-[4px] h-full bg-light origin-top dark:bg-dark md:w-[2px] md:left-[30px] xs:left-[20px]" />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position={"Software Engineer"}
            company={"Eradani"}
            companyLink={"https://eradani.com/"}
            time={"2022 - 2022"}
            address={"Berkley, CA"}
            work={
              "One of my main responsibilities was to assist in the training and development of Junior Engineers, helping to impart my knowledge and experience to support their growth and development. Additionally, I was responsible for  deploying patches and updates to the client codebase to ensure the efficient operation of their systems. To streamline processes and enhance functionality, I upgraded existing codebases to new template standards. I also provided support to new client installs, mentoring and training to ensure the successful integration of our services. When clients experienced issues, I investigated support tickets, performed root cause analysis, and provided effective solutions to maintain client satisfaction. Finally, I worked with a team to complete a client-requested feature of adding Google Pub/Sub integration with their current application, gaining expertise in Google Cloud products along the way. Throughout my role, I effectively utilized a team feedback system to complete the project before the projected deadline. "
            }
          />
          <Details
            position={"Sr. Learning Assistant"}
            company={"2U"}
            companyLink={"https://2u.com/"}
            time={"2021 - 2022"}
            address={"Remote"}
            work={
              "responsible for providing world-class support to students while adhering to the company's support model to solve and respond to curriculum-based technical questions. I demonstrated mastery of the assigned support program's specific curriculum expectations and core concepts, and contributed to a culture of trust by coordinating all day-to-day operations and systems procedures of the Learning Assistant team. To ensure effective communication and collaboration, I coordinated and hosted daily meetings at the start and end of each shift. As part of my duties, I also conducted quality assurance checks and provided coaching, training, or support sessions to Learning Assistants, ensuring their adherence to predefined standards and systems for student support. When necessary, I supported students with escalated technical or service-related issues, successfully turning negative experiences into positive ones. Additionally, I worked with leadership to develop and deliver extracurricular learning opportunities for students."
            }
          />
             <Details
            position={" Learning Assistant"}
            company={"2U"}
            companyLink={"https://2u.com/"}
            time={"2020 - 2022"}
            address={"Remote"}
            work={
              "primary responsibility was to assist students with any technical or curriculum-based questions they had through the use of Slack. I served as the first point of contact for student-facing inquiries, providing timely and effective support. Collaborating closely with the instructional team, I ensured consistent and accurate responses to student inquiries. To accomplish my tasks, I maintained a high level of proficiency with relevant technical tools and software to assist with student inquiries. Throughout my role, I demonstrated excellent customer service skills, building positive relationships with students and contributing to a supportive learning environment. "
            }
          />
             <Details
            position={" Sr. Technical Support Specialist"}
            company={"Landis+Gyr"}
            companyLink={"https://www.landisgyr.com/"}
            time={"2019-2019"}
            address={"Alpharetta, GA"}
            work={
              "My primary responsibilities included identifying root cause and resolving break fix issues through testing, researching, and replicating them using Unix and SQL. I utilized my expertise in these areas to effectively troubleshoot and diagnose issues, ensuring that systems operated smoothly and efficiently. Additionally, I managed and triaged cases using Microsoft CRM, ensuring that communication was effective and that cases were resolved in a timely manner. Through my work, I was able to make valuable contributions to the team's overall success."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
