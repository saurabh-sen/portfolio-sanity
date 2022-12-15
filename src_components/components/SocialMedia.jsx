import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { ImLinkedin } from 'react-icons/im'
import Link from 'next/link';

const SocialMedia = () => (
  <div className="flex justify-end items-center flex-col p-4">
    <Link href="https://linkedin.com/in/saurabh-sen-profile" taget="_blank" >
      <div className='bg-[#e6ecf3] cursor-pointer m-2 w-10 h-10 rounded-[50%] mx-1 border border[#e4e4e4] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#acdff7c7] border-[#313bac] hover:text-white'>
        <ImLinkedin className='w-4 h-4 text-[#6b7688] hover:text-white' />
      </div>
    </Link>
    <Link href="mailto:saurabh.sen.cs19@ggits.net" taget="_blank" >
      <div className='cursor-pointer m-2 w-10 h-10 rounded-[50%] bg-[#e6ecf3] mx-1 border border[#e4e4e4] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#acdff7c7] border-[#313bac] hover:text-white'>
        <SiGmail className='w-4 h-4 text-[#6b7688] hover:text-white ' />
      </div>
    </Link>
    <Link href="tel:+91-8305781500" taget="_blank" >
      <div className='cursor-pointer m-2 w-10 h-10 rounded-[50%] bg-[#e6ecf3] mx-1 border border[#e4e4e4] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#acdff7c7] border-[#313bac] hover:text-white'>
        <BsFillTelephoneFill className='w-4 h-4 text-[#6b7688] hover:text-white' />
      </div>
    </Link>
  </div>
);

export default SocialMedia;
