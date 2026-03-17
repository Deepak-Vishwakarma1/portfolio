import React from 'react'
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from './AboutCard'
import AboutDesc from './AboutDesc'
import TechSkill from '../techskill/TechSkill'
import ExperienceStack from '../experience/Experience'
import Headcontent from '../headcontent/Headcontent'

const About = () => {
  return (
    <>
      <AboutDesc />
      <ExperienceStack />

    </>
  );
};
export default About
