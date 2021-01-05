import React from 'react';
import headshot from '../../assets/images/headshot.png';

function About() {

    return (
        <section className="about-container">
            <h1 className="about-title">
                About
                </h1>
            <div>
                <img
                    src={headshot}
                    alt={(`${headshot} of developer`)}
                    className="about-headshot"
                />
                <p className="about-me-content">
                    I am a results-driven global marketer with 10-plus years’ experience of
                    innovation, branding, communications and outreach. I have a strong track
                    record driving revenue through the management of cross-functional creative,
                    research and operational teams. In addition, I believe that my determination,
                    organization and will power allows me to work in fast paced environments. My
                    career up to this point has always provided challenging tasks, but it has been
                    a joy at the same time. I’ve worked with very talented people and it’s always
                    pushed me to become better at my craft.
                </p>
            </div>
        </section>
    );
}

export default About;