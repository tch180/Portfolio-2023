import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { Mongo, ReactIcon,ExpressIcon, NodeIcon, PubSubIcon, HtmlIcon, CssIcon, BootIcon, NodemonIcon,WebTokenIcon,JsonIcon, GitIcon } from './Icons';




const Skill = ({name,exp,skills, icon}) => {
    const [expanded, setExpanded] = useState(false);

    function handleClick() {
        setExpanded(!expanded);
      }

    return (
       <div className=" icons " onClick={handleClick}>
     <span className='react-icon img' >{icon}</span>
      {expanded && (
        <div className="tooltip">
          <h1>{name}</h1>
          <span className='underline'>{exp}</span>
          <h6>{skills}</h6>
        </div>
      )}
    </div>
    )
}



const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
    <div className='flex  justify-between flex-wrap  mt-6 lg:my-4 md:my-6'>
    <Skill icon={<Mongo className={`animate-bounce mt-4`}  />}   name='MongoDB'exp={"4 years"} skills={"Modeling Schema Documents Sub-Documents"} />
    <Skill icon={<ExpressIcon className={`animate-ping-slow`}  />}   name='Express'exp={"4 years"} skills={"Routing Middleware CRUD Authenication/Authorization JSON"} />
    <Skill icon={<ReactIcon className={`animate-spin-slow`}/>}  name='React'exp={"4 years"} skills={"Context React Router Styled Components"} />
    <Skill icon={<NodeIcon className={`animate-pulse fill-nodeGreen`}  />}   name='Node'exp={"4 years"} skills={"NPM Rest Auth, Async/Await TryCatch"} />
    <Skill icon={<PubSubIcon className={'text-xl'}  />}   name='GCP Pub/SUB'exp={"1 years"} skills={"Queue"} />
    <Skill icon={<HtmlIcon className={'animate-pulse text-xl fill-orange-500'}  />}   name='HTML 5'exp={"4 years"} skills={"Semantic markup, Responsive design, Local storage, JavaScript integration"} />
    <Skill icon={<CssIcon className={'animate-pulse text-xl fill-blue-800'}  />}   name='CSS3'exp={"4 years"} skills={"Layouts, Flexbox, Media queries"} />
    <Skill icon={<BootIcon className={'text-xl fill-purple-400'}  />}   name='BootStrap'exp={"4 years"} skills={"Responsive design, Forms, Buttons, Navigation, Cards, Carousel, Icons "} />
    <Skill icon={<NodemonIcon className={'animate-bounce text-xl fill-green-600'}  />}   name='Nodemon'exp={"4 years"} skills={"Automatic restarts, File watching "} />
    <Skill icon={<WebTokenIcon className={'animate-spin-slow text-xl fill-red-600'}  />}   name='Json Web Token'exp={"4 years"} skills={"Authentication, Authorization, Encrypted,  Standardized"} />
    <Skill icon={<JsonIcon className={'animate-spin-slow text-xl fill-gray-600'}  />}   name='JSON'exp={"4 years"} skills={"Key-value pairs, Schema-less, Human-readable, Data exchange  "} />
    <Skill icon={<GitIcon className={'text-xl fill-orange-400'}  />}   name='GIT'exp={"4 years"} skills={"Version control, Branching, Merging, Committing, Remote repositories, Collaboration,    "} />




    

    </div>
    
    </>
  )
}

export default Skills