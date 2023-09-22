import React, { useState } from "react";

//icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiGithub,
} from "react-icons/si";
//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaFigma />,

          // <FaWordpress />,
        ],
      },
      {
        title: "Software Development",
        icons: [<SiCplusplus />, <SiGithub />, <SiMysql />, <SiMongodb />],
      },
    ],
  },
  {
    title: "Certificates",
    info: [
      {
        title: "HACKERRANK SKILLS VERIFICATION TEST - ",
        stage: "2022",
      },
      // {
      //   title: "Adobe Design Achievement Awards - Finalist",
      //   stage: "2009 - 2010",
      // },
    ],
  },
  {
    title: "Achievements",
    info: [
      {
        title: "CodaThon by NIT Bhopal - 2023, AIR 358",
        stage:
          ": Participated and excelled in the prestigious CodeThon, a high-stakes coding competition hosted by the esteemed National Institute of Technology (NIT), Bhopal",
      },
      {
        title:
          "IDE BOOTCAMP - 2023, IIT BBSR",
        stage:
          ": Led a team of 20 students as Team Leader, representing our college at the IDE Bootcamp - 2023 in IIT Bhubaneswar, where we showcased our innovative projects and presented in front of the Education Minister.",
      },
      {
        title: "SIH - 2022, SEMI-FINALIST",
        stage:
          ": Participated in the hackathon and finished as a semi-finalist in competition of more than 15000+ candidates",
      },
      {
        title: "HacktoberFest - 2022 , Open Source Program ",
        stage:
          ": Contributed to open-source projects in this program along with 40,000 + contributors.",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Sunshine Prep./ High School - 10th",
        stage: "CGPA : 10",
      },
      {
        title: "Sushant Public School - 12th",
        stage: "Percentage : 87%",
      },
      {
        title: "GITA Autonomous College - B.Tech CSE (Data Science)",
        stage: "Current CGPA : 9.21",
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import CountUp from "react-countup";
const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar image */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl: flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificient skills.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            To obtain a position where I can utilize my knowledge of programming
            languages and problem-solving skills to develop innovative and
            efficient software solutions. I am highly motivated and eager to
            contribute to a dynamic and collaborative team.
          </motion.p>
          {/* counters */}
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[78%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 item-center text-white/60"
                >
                  {/* {title} */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md-flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4 justify-center align-center">
                    {/* <div className="flex gap-x-4 "> */}
                    {/* {icons} */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white ">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

// <div>
//   <div>
//     {/* experience */}
//     <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
//       <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
//         <CountUp start={0} end={10} duration={10}/>+
//       </div>
//       <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Years of experience</div>
//     </div>
//     {/* clients */}
//     <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
//       <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
//         <CountUp start={0} end={250} duration={10}/>+
//       </div>
//       <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Satisfied clients</div>
//     </div>
//   </div>
//   {/* projects */}
//   <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
//       <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
//         <CountUp start={0} end={650} duration={10}/>+
//       </div>
//       <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Finished Projects </div>
//     </div>
//     {/* awards */}
//   <div className="relative flex-1  ">
//       <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
//         <CountUp start={0} end={8} duration={10}/>+
//       </div>
//       <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Winning Awards </div>
//     </div>
// </div>
