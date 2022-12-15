import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import Image from 'next/image';
import { urlFor, client } from '../../../client';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div className='Work flex flex-col'>
      <h2 className="head-text mt-8 text-2xl md:text-5xl font-bold text-center text-black capitalize">My Creative <span className='text-[#313bac]'>Portfolio</span> Section</h2>

      <div className="app__work-filter flex md:flex-row justify-around items-center flex-wrap mt-16 mb-8 md:w-max ml-auto mr-auto ">
        {['UI/UX', 'Firebase', 'Next JS', 'React JS', 'Full Stack App', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text py-2 px-4 rounded-lg bg-white font-bold cursor-pointer transition-all duration-300 ease-linear m-2 hover:bg-[#313bac] hover:text-white flex justify-center items-center text-sm text-left leading-normal text-[#6b7688] ${activeFilter === item ? 'item-active bg-[#313bac] text-white' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio flex flex-wrap justify-center items-center"
      >
        {filterWork.map((work, index) => (
          <div className="app__work_item ml-0 m-4 sm:w-[270px] flex-col sm:m-8 p-4 rounded-lg bg-white text-black cursor-pointer transition-all duration-300 ease-linear app__flex flex justify-center items-center 2xl:w-96 2xl:p-5 2xl:rounded-xl" 
           key={index}
           >
            <div
              className="app__work-img w-full h-56 relative app__flex flex justify-center items-center 2xl:h-80" >
              <Image className='w-full h-full rounded-lg object-cover' src={urlFor(work.imgUrl).url()} width={400} height={400} alt={index} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-[#00000079] rounded-lg opacity-0 transition-all duration-300 ease-linear app__flex flex justify-center items-center"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex flex justify-center items-center w-12 h-12 rounded-[50%] bg-[#00000079] text-white m-4 font-bold cursor-pointer transition-all duration-300 ease-linear" >
                    <AiFillEye className='w-1/2 h-1/2 text-white' />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex flex justify-center items-center w-12 h-12 rounded-[50%] bg-[#00000079] text-white m-4 font-bold cursor-pointer transition-all duration-300 ease-linear"
                  >
                    <AiFillGithub className='w-1/2 h-1/2 text-white' />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content p-2 w-full relative flex-col app__flex flex justify-center items-center" >
              <h4 className="bold-text text-sm sm:text-base 2xl:text-4xl font-bold text-black text-left mt-4 leading-normal 2xl:mt-12">{work.title}</h4>
              <p className="p-text text-xs text-left leading-normal text-[#6b7688] 2xl:text-3xl" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag absolute py-2 px-4 rounded-xl bg-white top-[-25px] app__flex flex justify-center items-center" >
                <p className="p-text text-xs text-left leading-normal text-[#6b7688] 2xl:text-3xl" >{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(MotionWrap(Work, 'app__works flex-1 w-full flex-col'),
  'work',
  'app__primarybg bg-[#edf2f8]',
);
