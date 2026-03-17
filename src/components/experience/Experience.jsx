import React from "react";
import "./experience.css";
import GraphicsWork from "./GraphicsWork";

const ExperienceTimeline = () => {
    return (
        <section id="experience">
            <section className="timeline-section">
                <h2 className="timeline-title">Professional Experience</h2>

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>

                        <div className="timeline-content">
                            <h3>Spark & Bloom IT Solution</h3>
                            <span className="timeline-location">Varanasi, India</span>
                            <p className="timeline-role">Frontend Developer Intern - Web</p>
                            <p className="timeline-date">Mar 2023 – Jan 2024</p>

                            <ul>
                                <li>Developing and maintaining user-facing features using HTML5, CSS3 and JavaScript.</li>
                                <li>Implementing responsive design principles for cross-browser compatibility.</li>
                                <li>Collaborating with UI/UX designers and backend developers to convert mockups into code.</li>
                            </ul>

                            <a href="/letters/spark-bloom-letter.pdf" className="letter-btn">
                                Experience Letter
                            </a>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>

                        <div className="timeline-content">
                            <h3>Event Studio</h3>
                            <span className="timeline-location">Varanasi, India (Remote)</span>
                            <p className="timeline-role">Graphics Designer</p>
                            <p className="timeline-date">Jan 2024 – Jul 2024</p>

                            <ul>
                                <li>Designed professional PowerPoint presentations, pamphlets and logos.</li>
                                <li>Handled complete wedding design requirements with print-ready layouts.</li>
                                <li>Managed event records and budgeting sheets using Excel.</li>
                            </ul>

                            <GraphicsWork />
                        </div>
                    </div>

                </div>
            </section>
        </section>
    );
};

export default ExperienceTimeline;
