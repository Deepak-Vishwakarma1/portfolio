import React from 'react'

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1 id="c">DEEPAK VISHWAKARMA</h1>
            <span>Strong Skills: Java, SQL, React.js</span>
          </div>

          <div className="social">
            <a href="https://www.linkedin.com/in/deepakvishwakarmavns/" className='icon_color'><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/Deepak-Vishwakarma1" className='icon_color'><i className="fab fa-github"></i></a>
            <a href="https://leetcode.com/u/Deepak-Vishwakarma/" className='icon_color'><i className="fas fa-code"></i></a>
            <a href="mailto:deepakvns3010@gmail.com" className="icon_color"> <i className="fas fa-envelope"></i></a>

          </div>
        </div>
      </section >
    </>
  )
}

export default Head
