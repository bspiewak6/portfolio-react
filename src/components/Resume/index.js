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
            name: 'Node.js',
            image: skill6
        },
        {
            name: 'Materialize',
            image: skill7
        },
        {
            name: 'MongoDB',
            image: skill8
        },
        {
            name: 'Express',
            image: skill9
        },
        


]

const Resume = () => {
    return (
        <section className="skills-container">
            <h1 className="skills-title">
                Resume
            </h1>
            <div className='px-2'>
                    <a className="link" href={`${Resume}`} download="Resume"><i class="fas fa-file-download fa-3x"></i></a>
            </div>
            <div className='skills-grid'>
                {skills.map((skill) => (
                <div key={skill.name} className='icon'>
                    <img src={skill.image} className='' alt={`${skill.name}`} />
                    <span>{skill.name}</span>
                </div >
                ))}
            </div>
        </section>
    );
}

export default Resume;
