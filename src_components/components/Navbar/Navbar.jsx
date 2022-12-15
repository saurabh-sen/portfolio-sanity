import React, { useState } from 'react';
import { GiHamburgerMenu, GiCrossedBones } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = ({resumeLink}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="Navbar w-full flex justify-between items-center px-4 py-4 bg-[#ffffff3d] backdrop-blur-sm border border-[#ffffffa1] fixed z-[2]">
      <p className="Navbar__logo flex justify-start items-center">
        <span className='font-bungee text-2xl text-black font-bold'>Saurabh </span>
        <span className='font-bungee text-2xl text-blue-400 font-bold'>Sen</span>
      </p>
      <ul className="Navbar__links flex-1 md:flex justify-center items-center list-none hidden">
        {['home', 'about', 'work', 'skills', 'contact', 'My Resume'].map((item) => (
          <li className="Navbar__links__li mx-4 cursor-pointer" key={`link-${item}`}>
            {/* <div className='w-[5px] h-[5px] flex m-auto rounded-[50%] mb-1 bg-none hover:bg-[#313bac]'></div> */}
            <Link className='text-[#6b7688] uppercase hover:text-[#313bac] text-[0.8rem] font-semibold' href={ item !== 'My Resume' ? `#${item}` : resumeLink} >{item}</Link>
          </li>
        ))}
      </ul>

      <div className="Navbar__menu w-9 h-9 rounded-[50%] flex justify-center items-center bg-blue-400 md:hidden">
        <GiHamburgerMenu className='Navbar__ham mx-2 my-4 text-white' onClick={() => setToggle(true)} />

        {
        toggle ? 
          <motion.div className="Navbar__menu__motion fixed top-0 bottom-0 right-0 p-4 w-[80%] h-screen flex justify-end items-end flex-col bg-cover bg-repeat bg-white"
          style={{
            boxShadow: "0px 0px 20px rgba(168, 168, 168, 0.15)",
          }} 
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <div className='w-8 h-8 bg-blue-400 flex justify-center items-center fixed top-4 right-5 rounded-[50%]'>
  
                <GiCrossedBones className='Navbar__cross text-white' onClick={() => setToggle(false)} />
              </div>
              <ul className='list-none h-full w-full flex justify-start items-start flex-col'>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li className='m-4' key={item}>
                    <Link className='text-[#6b7688] no-underline text-base uppercase font-semibold transition-all ease-in-out duration-300 hover:text-[#313bac] ' href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
        :
        null  
      }

      </div>
    </nav>
  );
};

export default Navbar;
