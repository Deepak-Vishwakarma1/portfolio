import React from "react"
import { blog } from "../../../dummydata"
import FooterLast from "../footer-back/FooterLast"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer className="footer-heading">
        <div className='container padding'>
          <div className='box-logo'>
            <h1>Get in Touch</h1>
            <div className="footer-center">
              <a href="https://www.linkedin.com/in/deepakvishwakarmavns/" className='icon_color-footer'><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/Deepak-Vishwakarma1" className='icon_color-footer'><i className="fab fa-github"></i></a>
              <a href="https://leetcode.com/u/Deepak-Vishwakarma/" className='icon_color-footer'><i className="fas fa-code"></i></a>
            </div>
          </div>
          <div className="footer-text">
            <p1 id="footer-text">Software Developer</p1>
          </div>

        </div>
      </footer>
      <FooterLast />

    </>


  )
}

export default Footer
