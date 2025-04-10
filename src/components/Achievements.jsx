import { ACHIEVEMENTS } from "../Data.js";
import { animate, motion } from "framer-motion";

export const Achievements = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 text-center">
      <motion.h1 whileInView={{opacity:1, y:0}} 
       initial={{opacity: 0, y: -100}} transition={{duration:0.5}} className="my-16 text-center text-4xl">Achievements and Certifications</motion.h1>
      <div>
        {ACHIEVEMENTS.map((Achievements,index)=>(
          <div key={index} className="mb-8 flex lg:justify-center ">
          
            <motion.div whileInView={{opacity:1, x:0}} 
       initial={{opacity: 0, x: 100}} transition={{duration:1}} className="w-full max-w-3xl lg:w-3/4">
            <p className="mb-2 text-white  text-base">{Achievements.description}</p>
            </motion.div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  )
}
