import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../../client';

import Image from 'next/image';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div className='About'>
      <h2 className="head-text mt-8 text-lg sm:text-2xl md:text-5xl font-semibold text-center text-black capitalize">I Know that <span className='text-[#313bac]'>Good Design</span> <br />means  <span className='text-[#313bac]'>Good Business</span></h2>

      <div className="app__profiles flex justify-center items-start flex-wrap gap-5  mt-8">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item app__profile-item sm:w-64 flex justify-start items-start flex-col p-2 px-5 sm:p-5 sm:px-7 sm:m-8 2xl:w-[370px] 2xl:mx-8 2xl:my-16 shadow-md rounded-xl"
            key={about.title + index}
          >
            <Image className=' rounded-2xl object-cover' src={urlFor(about.imgUrl).url()} alt={about.title} width={300} height={300} />
            <h2 className="bold-text sm:text-base text-center text-sm font-semibold text-black sm:text-left " style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text text-xs text-left text-[#6b7688] leading-normal 2xl:text-3xl" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
