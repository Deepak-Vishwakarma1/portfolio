import React from 'react'
import "./techskill.css"
import { techskill } from "../../dummydata"
import Heading from '../common/header/Heading'

const TechSkill = () => {
    return (

        <section className="techskill">
            <div className="container">
                <Heading
                    subtitle="TECH SKILL"
                />

                <div className="content grid3">
                    {techskill.map((val, index) => (
                        <div className="box" >

                            <div className="img">


                                <img
                                    src={val.hoverCover}
                                />
                            </div>

                            <h1>{val.courseName}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechSkill;
