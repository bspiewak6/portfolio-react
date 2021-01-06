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
                        <p className="card-text about-me-content">
                        Let me take a minute, just sit right there so I can tell you about myself. 
                        Born and raised in Philly, I moved to NYC 10+ years ago and haven't looked back. 
                        Aside, from my sports allegiances which will never leave Broad Street.
                        My career thus far has been in the finance world working for an asset management company 
                        where I was at the helm of 10-person marketing department. My team was the centralized agency 
                        at the heart of this publicly traded company that sold securities and built portfolios in many 
                        different real estate sectors. The company also owned subsidiaries in technology, research and 
                        financial advice. My team worked tirelessly on the innovation, branding, communications and 
                        outreach for the entire company and its six business lines.
                        <br /> 
                        <br />
                        I am a go-getter and very ambitious so I believe that with my determination, organization 
                        and will power allows me to work in fast paced environments. My career up to this point has 
                        always provided challenging tasks, but it has been a joy at the same time. I’ve worked with 
                        very talented people and it’s always pushed me to become better at my craft.
                        <br />
                        <br />
                        Just last year, I took on a new challenge in the form of something I've always been interested in, coding. 
                        For the last six months, I've been a student at the UPenn Coding Bootcamp. This has given me a 
                        better understanding of code including many front-end and back-end technologies. Learning to code and
                        putting these skills to use has been very rewarding because I am someone who likes to see things from
                        start to finish. Projects get me motivated and learning something new is always fascinating to me. The next
                        chapter of my career is yet to be written, but I am eager to keep moving onward and upward!
                        
                        </p>
                    </div>
                </div>
        
            </div>
        </section>
    );
}

export default About;