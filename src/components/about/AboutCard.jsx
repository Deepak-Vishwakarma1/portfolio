import React from 'react'
import Heading from '../common/header/Heading'
import { homeAbout } from "../../dummydata"
import "./about.css"

const AboutCard = () => {
    return (
        <>
            <section className='aboutHome'>
                <div className="container flexSB ">

                    <div className="right row">
                        <Heading subtitle='About Us' title='Education' />
                        <div className='items'>
                            {homeAbout.map((val) => (
                                <div className='item flexSB'>
                                    <div className='img'>
                                        <img src={val.cover} alt='' />
                                    </div>
                                    <div className='text'>
                                        <h2>{val.title}</h2>
                                        <h4>{val.year}</h4>
                                        <p>{val.desc}</p>
                                        <p>{val.loc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutCard
