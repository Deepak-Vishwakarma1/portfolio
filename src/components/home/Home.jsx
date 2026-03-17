import React from "react"
import Hero from "./hero/Hero"
import AboutCard from "../about/AboutCard"
import TechSkill from "../techskill/TechSkill"
import Contact from "../contact/Contact"
import { techskill } from "../../dummydata"
import Certification from "../certification/Certification"
import Project from "../project/Project"
import FooterLast from "../common/footer-back/FooterLast"
import Headcontent from "../headcontent/Headcontent"

const Home = () => {
  return (
    <>
      <Hero />
      <Headcontent />
    </>
  )
}

export default Home
