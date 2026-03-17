import React from "react"
import Back from "../common/back/Back"
import "./contact.css"
import TechSkill from "../techskill/TechSkill"

const Contact = () => {
  return (
    <>
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <img src="" alt="" />
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p></p>

            <div className='items grid2'>


            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />

              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/deepakvishwakarmavns/" target="_blank" rel="noreferrer">LinkedIn</a>
              <span> | </span>
              <a href="mailto:deepakvns3010@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
