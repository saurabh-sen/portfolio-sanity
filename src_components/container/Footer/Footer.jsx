import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../../client';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text text-xl sm:text-2xl md:text-5xl font-bold text-center text-black capitalize">Take a coffee & chat with me</h2>

      <div className="app__footer-cards lg:w-3/5 flex justify-evenly items-center flex-wrap ">

        <div className="app__footer-card min-w-[190px] sm:min-w-[290px] flex flex-row justify-start items-center my-4 p-4 rounded-xl cursor-pointer bg-[#fef4f5] transition-all duration-300 ease-in-out ">
          <Image className='w-10 h-10 mx-3' src={images.email} alt="email" />
          <Link className='p-text text-xs text-left text-[#6b7688] leading-normal no-underline font-semibold hover:shadow-[0 0 25px #fef4f5]' href="mailto:saurabh.sen.cs19@ggits.net" >saurabh.sen.cs19@ggits.net</Link>
        </div>
        <div className="app__footer-card min-w-[190px] sm:min-w-[290px] flex flex-row justify-start items-center my-4 p-4 rounded-xl cursor-pointer bg-[#fef4f5] transition-all duration-300 ease-in-out ">
          <Image className='w-10 h-10 mx-3' src={images.mobile} alt="phone" />
          <Link href="tel:+91-8305781500" className="p-text text-xs text-left text-[#6b7688] leading-normal no-underline font-semibold hover:shadow-[0 0 25px #fef4f5]">+91-8305781500</Link>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form w-full my-4 lg:w-3/5 flex-col lg:my-4 mx-8 app__flex flex justify-center items-center">
          <div className="app__flex flex justify-center items-center w-full my-3 rounded-xl cursor-pointer bg-[#edf2f8] transition-all duration-300 ease-in-out ">
            <input className=" rounded-xl w-full p-4 border-none bg-[#edf2f8] text-[#313bac] outline-none p-text text-xs text-left leading-normal no-underline font-semibold hover:shadow-[0 0 25px #fef4f5]" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex flex justify-center items-center w-full my-3 rounded-xl cursor-pointer bg-[#edf2f8] transition-all duration-300 ease-in-out ">
            <input className="rounded-xl w-full p-4 border-none bg-[#edf2f8] text-[#313bac] outline-none p-text text-xs text-left leading-normal no-underline font-semibold hover:shadow-[0 0 25px #fef4f5]" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div className='w-full my-3 rounded-xl cursor-pointer bg-[#edf2f8] transition-all duration-300 ease-in-out '>
            <textarea
              className=" w-full p-4 border-none rounded-lg bg-[#edf2f8] text-[#313bac] outline-none h-44 p-text text-xs text-left leading-normal no-underline font-semibold hover:shadow-[0 0 25px #fef4f5]"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="py-4 px-8 rounded-xl border-none bg-[#313bac] font-semibold text-white outline-none mt-8 cursor-pointer hover:bg-[#2430af] p-text text-xs text-left leading-normal no-underline hover:shadow-[0 0 25px #fef4f5] animate-pulse" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text text-3xl sm:text-4xl font-bold text-center text-black capitalize">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer flex-1 w-full flex-col'),
  'contact',
  'app__whitebg bg-white',
  true,
);
