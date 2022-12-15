import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar/Navbar'
import Header from '../container/Header/Header'
import About from '../container/About/About'
import Work from '../container/Work/Work'
import Skills from '../container/Skills/Skills'
import Footer from '../container/Footer/Footer'

import { client } from '../../client';

const Start = () => {

  const [resumeLink, setResumeLink] = useState([]);

  useEffect(() => {
    const query = '*[_type == "resume"]';
  
    client.fetch(query).then((data) => {
      setResumeLink(data[0].resumeUrl);
    });
  }, []);

  return (
    <div className="Start">
      <Navbar resumeLink={resumeLink} />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};

export default Start;
