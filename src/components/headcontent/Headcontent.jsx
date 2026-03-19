import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./headcontent.css";
const roles = [
    "Full Stack Developer",
    "Graphic Designer",
];
const Headcontent = () => {

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {

        if (charIndex < roles[index].length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + roles[index][charIndex]);
                setCharIndex(charIndex + 1);
            }, 100);

            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => {
                setText("");
                setCharIndex(0);
                setIndex((prev) => (prev + 1) % roles.length);
            }, 2000);
        }

    }, [charIndex, index]);

    return (
        <header className="head-hero">

            <div className="head-hero-container">

                <h1 className="hero-name">
                    Hi, I'm <span>Deepak </span>
                </h1>

                <h2 className="typing-text">
                    {text}<span className="cursor">|</span>
                </h2>

                <p className="hero-desc">
                    Passionate about crafting modern, responsive, and user-focused web applications.
                </p>

                <div className="hero-buttons">

                    <Link to="/certificates" className="btn-primary">
                        View Experience
                    </Link>

                    <a href="" download className="btn-secondary">
                        Download Resume
                    </a>


                </div>

            </div>

        </header>
    );
};

export default Headcontent;
