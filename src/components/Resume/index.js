import React from 'react';
import skill1 from '../../assets/images/stack-icons/html-5.svg';
import skill2 from '../../assets/images/stack-icons/css-3.svg';
import skill3 from '../../assets/images/stack-icons/javascript.svg';
import skill4 from '../../assets/images/stack-icons/jquery-icon.svg';
import skill5 from '../../assets/images/stack-icons/bootstrap.svg';
import skill6 from '../../assets/images/stack-icons/nodejs.svg';
import skill7 from '../../assets/images/stack-icons/materializecss.svg';
import skill8 from '../../assets/images/stack-icons/mongodb-icon.svg';
import skill9 from '../../assets/images/stack-icons/express.svg';
import skill10 from '../../assets/images/stack-icons/handlebars.svg';
import skill11 from '../../assets/images/stack-icons/heroku-icon.svg';
import skill12 from '../../assets/images/stack-icons/mysql.svg';
import skill13 from '../../assets/images/stack-icons/npm.svg';
// {FaReact}

const skills = [
        {
            name: 'HTML',
            image: skill1
        },
        {
            name: 'CSS',
            image: skill2
        },
        {
            name: 'JavaScript',
            image: skill3
        },
        {
            name: 'jQuery',
            image: skill4
        },
        {
            name: 'Bootstrap',
            image: skill5
        },
        {
            name: 'Materialize',
            image: skill7
        },
        {
            name: 'React',
            image: skill6
        },
        // BACKEND
        {
            name: 'Node.js',
            image: skill6
        },
        {
            name: 'MongoDB',
            image: skill8
        },
        {
            name: 'Express.js',
            image: skill9
        },
        {
            name: 'Handlebars',
            image: skill10
        },
        {
            name: 'Heroku',
            image: skill11
        },
        {
            name: 'MySQL',
            image: skill12
        },        
        {
            name: 'npm',
            image: skill13
        },
        {
            name: 'Sequelize',
            image: skill13
        },
        {
            name: 'Mongoose',
            image: skill13
        }


]

const Resume = () => {
    return (
        <section className="skills-container">
            <h1 className="skills-title">
                Resume
            </h1>
            <p>
                <a className='resume' href='https://drive.google.com/file/d/148WH71Wt3qNmuuUSqGUGHLObGRPzUK0H/view?usp=sharing' target='_blank' rel='noopener noreferrer'>View my resume</a>
            </p>
            <div className='skills-grid'>
                {skills.map((skill) => (
                <div key={skill.name} className='icon'>
                    <img src={skill.image} className='skill-icon' alt={`${skill.name}`} />
                    <span className='skill-name'>{skill.name}</span>
                </div >
                ))}
            </div>
        </section>
    );
}

export default Resume;
