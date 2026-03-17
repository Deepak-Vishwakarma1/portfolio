import React from "react";


const AboutDesc = () => {
    return (
        <section className="about">
            <div className="about-container">

                <h2 className="about-title">About Me</h2>

                <p className="about-description">
                    With an MCA in Computer Science from Mahatma Gandhi Kashi Vidyapith
                    University, my tenure at Spark &amp; Bloom IT Solutions sharpened my
                    front-end and SaaS skills. Proficient in data structures and certified
                    in Backend Development (Java), I have contributed to building robust and
                    scalable software solutions.
                </p>

                <p className="about-description">
                    My core strengths in backend development are supported by a strong
                    foundation in computer science and a commitment to advancing Software
                    as a Service (SaaS).
                </p>

                <div className="about-content">

                    <div className="about-box">
                        <h3>Education</h3>
                        <p>MCA in Computer Science</p>
                    </div>

                    <div className="about-box">
                        <h3>Experience</h3>
                        <p>Spark & Bloom IT Solutions</p>
                    </div>

                    <div className="about-box">
                        <h3>Skills</h3>
                        <p>Backend Development</p>

                    </div>

                    <div className="about-box">
                        <h3>Languages</h3>
                        <ul className="about-list">
                            <li>Hindi (Native)</li>
                            <li>English (Professional fluency)</li>
                        </ul>
                    </div>

                    <div className="about-box">
                        <h3>Achievements</h3>
                        <ul className="about-list">
                            <li>Portfolio projects delivered</li>
                            <li>Continuous backend upskilling</li>
                        </ul>
                    </div>

                    <div className="about-box">
                        <h3>Hobbies</h3>
                        <ul className="about-list">
                            <li>Chess</li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutDesc;
