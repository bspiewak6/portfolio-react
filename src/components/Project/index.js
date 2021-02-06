import React from 'react';
import project1 from '../../assets/images/simplyreuse.png';
import project2 from '../../assets/images/tuneout.png';
import project3 from '../../assets/images/budgettracker.png';
import project4 from '../../assets/images/socialnetwork.png';
import project5 from '../../assets/images/devblog.png';
// import project6 from '../../assets/images/weatherdashboard.png';
import project7 from '../../assets/images/litespeed.png';

const projects = [
    {
        id: '1',
        name: 'Lite Speed',
        technologies: ['React, MongoDB, Node.js, Express.js API, Mongoose ODM, JWT, Apollo Server, JavaScript, GraphQL '],
        url: 'https://lite-speed.herokuapp.com/',
        repo: 'lite-speed',
        image: project7
    },
    {
        id: '2',
        name: 'Developers Everywhere',
        technologies: ['JavaScript, Node.js, Express.js API, Sequelize, MVC Framework, Handlebars.js, MySQL2'],
        url: 'https://sleepy-stream-52263.herokuapp.com/',
        repo: 'developer-techblog',
        image: project5
    },
    {
        id: '3',
        name: 'Simply ReUse',
        technologies: ['Node.js, Express.js, Handlebars.js, MySQL and the Sequelize ORM, HTML, CSS, JavaScript, MVC Framework, fuse.js, Heroku'],
        url: 'https://simplyreuse3.herokuapp.com/',
        repo: 'Simply-ReUse',
        image: project1
    },
    {
        id: '4',
        name: 'Social Network CLI',
        technologies: ['JavaScript, Node.js, Express.js API, MongoDB, Mongoose.js, Moment.js'],
        url: 'https://drive.google.com/file/d/1N7_QbDM4W843a8pjSLmjCFwOU3FIGJo0/view',
        repo: 'social-network',
        image: project4
    },
    {
        id: '5',
        name: 'TuneOut',
        technologies: ['HTML, JavaScript, Materialize CSS, Moment.js, TasteDive Music API, NY Times API'],
        url: 'https://bspiewak6.github.io/music/',
        repo: 'music',
        image: project2
    },
    {
        id: '6',
        name: 'Budget Tracker',
        technologies: ['JavaScript, Express.js, MongoDB, MongoDB Atlas, Mongoose.js, Heroku'],
        url: 'https://budgettrackerbds.herokuapp.com/',
        repo: 'budget-tracker',
        image: project3
    },
    // {
    //     id: '6',
    //     name: 'Weather Dashboard',
    //     technologies: ['HTML, CSS, JavaScript, jQuery, Bootstrap, Moment.js, OpenWeather API'],
    //     url: 'https://bspiewak6.github.io/weather-dashboard/',
    //     repo: 'weather-dashboard',
    //     image: project6
    // }
]

const Project = () => {
    return (
        <section className="project-container">
            <h1 className="project-title">
                Portfolio
            </h1>

            <h5 className="project-intro">
                My passion for marketing has grown as my career has progressed. There is no better way to explain than to show you.
            </h5>

            <div className="card-columns">
                {projects.map((project) => (
                    <div key={project.repo} className='card'>
                        <div className="card-image">
                            <img
                                src={project.image}
                                alt={(`${project.name} App`)}
                                className='card-img-top'
                            />
                            <div className="image-overlay">
                                <h4 className="card-title"><a href={project.url} target='_blank' rel="noreferrer">{project.name}</a></h4>
                                <p className="text-muted"><a href={(`https://github.com/bspiewak6/${project.repo}`)} target='_blank' rel="noreferrer">GitHub Repository</a></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;
