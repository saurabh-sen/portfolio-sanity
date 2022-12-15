import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import Image from 'next/image';
import { urlFor, client } from '../../../client';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text m-8 text-3xl md:text-5xl font-bold text-center text-black capitalize">Skills & Experiences</h2>

      <div className="app__skills-container w-full flex-col md:w-4/5 mt-12 flex md:flex-row ">
        <motion.div className="app__skills-list flex flex-1 flex-wrap mr-0 justify-center items-center md:justify-start md:text-start md:mr-20 ">

          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item flex-col text-center m-4 transition-all duration-300 ease-in-out 2xl:my-4 2xl:mx-8 app__flex flex justify-center items-center"
              key={skill.name}
            >
              <div
                className="app__flex flex justify-center items-center w-24 h-24 rounded-[50%] bg-[#fef4f5] hover:shadow-[0 0 25px #fef4f5]"
                style={{ backgroundColor: skill.bgColor }}
              >
                <Image className='w-1/2 h-1/2' src={urlFor(skill.icon).url()} width={400} height={400} alt={skill.name} />
              </div>
              <p className="p-text text-xs text-left leading-normal text-[#6b7688] 2xl:text-3xl">{skill.name}</p>
            </motion.div>
          ))}

        </motion.div>


        <div className=" flex flex-1 justify-around items-start flex-col mt-8 md:mt-0">

          {
          experiences.map((experience, index) => (
            <motion.div
              className="app__skills-exp-item w-full flex flex-col sm:flex-row justify-start items-start my-4"
              key={experience.year}
            >
              <div className="app__skills-exp-year mr-12">
                <p className="bold-text text-xs sm:text-sm  text-left font-bold text-[#6b7688]">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works flex-1">
                {experience.works.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work flex flex-col justify-start items-start mb-4 cursor-pointer"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text text-xs sm:text-sm  text-left font-semibold text-[#6b7688]">{work.name}</h4>
                      <p className="p-text text-xs text-left leading-normal text-[#6b7688] mt-1">{work.company}</p>
                      <p className="p-text text-xs text-left leading-normal text-[#6b7688] mt-1">{work.desc}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))
          }

        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills flex flex-1 w-full flex-col'),
  'skills',
  'app__whitebg bg-white',
);
