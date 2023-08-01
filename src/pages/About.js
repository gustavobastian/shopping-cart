import '../styles/About.css';
import React  from 'react';

import Header from '../components/header';
function About() {
  return (
    <div>
      <Header/>
      <div className="About">
        <div className='innerAbout'>
            <div className='aboutTitle'>About us:</div>
            <p className='pAbout'>We are a small company founded in 1900, specialized in design, development and building of artifacts that are enable to flight in any known atmosphera.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
