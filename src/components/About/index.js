import React from 'react';
import headshot from '../../assets/images/headshot.png';

function About() {

    return (
        <section className="about-container">
            <h1 className="about-title">
                About
            </h1>

            <div className="card about-card">
                <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img 
                            src={headshot}
                            alt={(`${headshot} of developer`)}
                            className="about-headshot"
                        />
                    </div>
                    
                    <div className="card-body">
                        <h4 className="card-title about-me-content">Let me take a minute to tell you a bit about me!</h4>
                        <p className="card-text about-me-content">
                        I am a results-driven global marketer with 10-plus years’ experience of
                        innovation, branding, communications and outreach. I have a strong track
                        record driving revenue through the management of cross-functional creative,
                        research and operational teams. In addition, I believe that my determination,
                        organization and will power allows me to work in fast paced environments. My
                        career up to this point has always provided challenging tasks, but it has been
                        a joy at the same time. I’ve worked with very talented people and it’s always
                        pushed me to become better at my craft.</p>
                    </div>
                </div>
        
            </div>
        </section>
    );
}

export default About;