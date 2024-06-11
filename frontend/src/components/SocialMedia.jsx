import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/VimalKumarKJ" target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/vimal-kumar-k-j-4bba611b6/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="mailto:vimalkaruna29@gmail.com">
          <BiLogoGmail />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
