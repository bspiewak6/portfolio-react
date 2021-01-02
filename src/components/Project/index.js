import React from 'react';
import project1 from '../../assets/images/simplyreuse.png';
import project2 from '../../assets/images/tuneout.png';

const projects = [
    {
        id: '1',
        name: 'Simply ReUse',
        technologies: ['Node.js, Express.js, Handlebars.js, MySQL and the Sequelize ORM, HTML, CSS, JavaScript, MVC Framework, fuse.js, Heroku'],
        url: 'https://simplyreuse3.herokuapp.com/',
        repo: 'Simply-ReUse',
        image: project1
    },
    {
        id: '2',
        name: 'TuneOut',
        technologies: ['HTML, JavaScript, Materialize CSS, Moment.js, TasteDive Music API, NY Times API'],
        url: 'https://bspiewak6.github.io/music/',
        repo: 'music',
        image: project2
    },
    {
        id: '3',
        name: 'Budget Tracker',
        technologies: ['JavaScript, Express.js, MongoDB, MongoDB Atlas, Mongoose.js, Heroku'],
        url: 'https://budgettrackerbds.herokuapp.com/',
        repo: 'budget-tracker',
        image: project2
    },
    {
        id: '4',
        name: 'Developers Everywhere',
        technologies: ['JavaScript, Node.js, Express.js API, Sequelize, MVC Framework, Handlebars.js, MySQL2'],
        url: 'https://bspiewak6.github.io/developer-techblog/',
        repo: 'developer-techblog',
        image: project2
    },

]

const Project = () => {
    return (
        <div className='project-grid'>
            {projects.map((project) => (
                <div key={project.repo} className={`project-grid-${project.id}`}>
                    <a href={project.url} target='_blank' rel="noreferrer" >
                        <h3 className='project-name'>{project.name}</h3>
                    </a>
                    <img
                        src={project.image}
                        alt={(`${project.name} App`)}
                        className='project-img'
                    />
                    <p className='project-feature'>Technologies used: {project.technologies}</p>
                    <a href={(`https://github.com/bspiewak6/${project.repo}`)} target='_blank' rel="noreferrer" className='project-feature'>GitHub Repository</a>
                </div>
            ))}
        </div >
    );
}

export default Project;
