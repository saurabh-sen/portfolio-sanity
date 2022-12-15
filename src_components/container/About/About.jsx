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
      <h2 className="head-text mt-8 text-2xl sm:text-5xl font-semibold text-center text-black capitalize">I Know that <span className='text-[#313bac]'>Good Design</span> <br />means  <span className='text-[#313bac]'>Good Business</span></h2>

      <div className="app__profiles flex justify-center items-start flex-wrap mt-8">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item app__profile-item w-48 flex justify-start items-start flex-col m-8 2xl:w-[370px] 2xl:mx-8 2xl:my-16"
            key={about.title + index}
          >
            <Image className='w-full h-40 2xl:h-[320px] rounded-2xl object-cover' src={urlFor(about.imgUrl).url()} alt={about.title} width={400} height={400} />
            <h2 className="bold-text sm:text-base text-sm font-semibold text-black text-left " style={{ marginTop: 20 }}>{about.title}</h2>
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
