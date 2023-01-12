import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import Image from "next/image";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (


  <div className="Header flex justify-center items-center flex-1 w-full h-full lg:flex-row flex-col pr-8 pt-24">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="flex-[0.65] flex flex-col justify-start items-start h-full my-8 lg:w-full lg:mr-0"
    >
      <div className="app__header-badge w-full flex justify-start items-start lg:justify-end lg:items-end flex-col">
        <div
          className="badge-cmp app__flex flex justify-center items-center px-2 py-4 bg-[#c1c5cc56] rounded-2xl flex-row w-auto shadow-md"
        >
          <span className="text-2xl sm:text-4xl 2xl:text-7xl">👋</span>
          <div className="sm:ml-5 ml-1" >
            <p className=" 2xl:text-3xl md:text-base text-[10px] text-[#6b7688] leading-normal w-full uppercase text-left ">
              Hello, I am
            </p>
            <h1 className="sm:text-5xl font-bold text-center text-black capitalize text-xl">
              Saurabh
            </h1>
          </div>
        </div>

        <div
          className="tag-cmp app__flex flex justify-center items-center flex-col mt-12 bg-[#c1c5cc56] text-xs px-8 py-4 rounded-2xl shadow-md"
        >
          <p className="2xl:text-3xl md:text-base text-[10px] text-[#6b7688] leading-normal w-full uppercase text-right ">
            Web Developer 💻
          </p>
          <p className=" 2xl:text-3xl md:text-base text-[10px] text-[#6b7688] leading-normal w-full uppercase text-right ">
            Freelancer
          </p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img flex-1 h-full flex justify-end items-end relative lg:mx-8"
    >
      <Image
        className="w-full object-contain z-[1]"
        src={images.profilepng}
        alt="profile_bg"
      />
      <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="overlay_circle absolute left-0 right-0 bottom-0 z-0 h-[90%]"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header__circles flex-[0.75] flex flex-col justify-start items-start h-full ml-4 xl:w-full xl:flex-row xl:flex-wrap "
    >
      {[images.next, images.react, images.tailwind].map((circle, index) => (
        <div
          className="circle-cmp app__flex flex justify-center items-center rounded-[50%] bg-white lg:m-4 m-4 "
          style={{
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
          }}
          key={`circle-${index}`}
        >
          <Image
            id={`app__header__circles${index + 1}`}
            className=""
            src={circle}
            alt="profile_bg"
          />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home", "Header__container");
