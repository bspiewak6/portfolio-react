import React from 'react';
import project1 from '../../assets/images/simplyreuse.png';
import project2 from '../../assets/images/tuneout.png';
import project3 from '../../assets/images/budgettracker.png';
import project4 from '../../assets/images/socialnetwork.png';
import project5 from '../../assets/images/devblog.png';
import project6 from '../../assets/images/weatherdashboard.png';

const Project = () => {
    return (
        <section className="project-container">
            <h1 className="project-title">
                Portfolio
            </h1>

            <h5 className="project-intro">
                My passion for marketing has grown as my career has progressed. <br />There is no better way to explain than to show you.
            </h5>

            <div className="card-columns">
                <div className="card">
                    <div className="card-image">
                        <img className="card-img-top" src={project1} alt="Simply ReUse App" />
                        <div className="image-overlay">
                        <h4 className="card-title"><a href="https://simplyreuse3.herokuapp.com/" target="_blank" rel="noreferrer">Simply ReUse</a></h4>
                        <p className="text-muted"><a href="https://github.com/bspiewak6/Simply-ReUse" target="_blank" rel="noreferrer">GitHub Repository</a></p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img className="card-img-top" src={project4} alt="Social Network CLI" />
                        <div className="image-overlay">
                            <h4 className="card-title">Social Network CLI</h4>
                            <p className="text-muted"><a href="https://github.com/bspiewak6/social-network" target="_blank" rel="noreferrer">GitHub Repository</a></p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img className="card-img-top" src={project2} alt="TuneOut" />
                        <div className="image-overlay">
                            <h4 className="card-title"><a href="https://bspiewak6.github.io/music/" target="_blank" rel="noreferrer">TuneOut Entertainment</a></h4>
                            <p className="text-muted"><a href="https://github.com/bspiewak6/music" target="_blank" rel="noreferrer">GitHub Repository</a></p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img className="card-img-top" src={project5} alt="Dev Blog" />
                        <div className="image-overlay">
                            <h4 className="card-title"><a href="https://sleepy-stream-52263.herokuapp.com/" target="_blank" rel="noreferrer">Developers Everywhere</a></h4>
                            <p className="text-muted"><a href="https://github.com/bspiewak6/developer-techblog" target="_blank" rel="noreferrer">GitHub Repository</a></p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img className="card-img-top" src={project3} alt="Budget Tracker" />
                        <div className="image-overlay">
                            <h4 className="card-title"><a href="https://budgettrackerbds.herokuapp.com/" target="_blank" rel="noreferrer">Budget Tracker PWA</a></h4>
                            <p className="text-muted"><a href="https://github.com/bspiewak6/budget-tracker" target="_blank" rel="noreferrer">GitHub Repository</a></p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img className="card-img-top" src={project6} alt="Weather Dashboard" />
                        <div className="image-overlay">
                            <h4 className="card-title"><a href="https://bspiewak6.github.io/weather-dashboard/" target="_blank" rel="noreferrer">Weather Dashboard</a></h4>
                            <p className="text-muted"><a href="https://github.com/bspiewak6/weather-dashboard" target="_blank" rel="noreferrer">GitHub Repository</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;


// const projects = [
//     {
//         id: '1',
//         name: 'Simply ReUse',
//         // technologies: ['Node.js, Express.js, Handlebars.js, MySQL and the Sequelize ORM, HTML, CSS, JavaScript, MVC Framework, fuse.js, Heroku'],
//         url1: 'https://simplyreuse3.herokuapp.com/',
//         repo1: 'Simply-ReUse',
//         image: project1
//     },
//     {
//         id: '2',
//         name: 'TuneOut',
//         // technologies: ['HTML, JavaScript, Materialize CSS, Moment.js, TasteDive Music API, NY Times API'],
//         url: 'https://bspiewak6.github.io/music/',
//         repo: 'music',
//         image: project2
//     },
//     {
//         id: '3',
//         name: 'Budget Tracker',
//         // technologies: ['JavaScript, Express.js, MongoDB, MongoDB Atlas, Mongoose.js, Heroku'],
//         url: 'https://budgettrackerbds.herokuapp.com/',
//         repo: 'budget-tracker',
//         image: project3
//     },
//     {
//         id: '4',
//         name: 'Social Network CLI',
//         // technologies: ['JavaScript, Node.js, Express.js API, MongoDB, Mongoose.js, Moment.js'],
//         url: 'https://bspiewak6.github.io/social-network/',
//         repo: 'social-network',
//         image: project4
//     },
//     {
//         id: '5',
//         name: 'Developers Everywhere',
//         // technologies: ['JavaScript, Node.js, Express.js API, Sequelize, MVC Framework, Handlebars.js, MySQL2'],
//         url: 'https://bspiewak6.github.io/developer-techblog/',
//         repo: 'developer-techblog',
//         image: project5
//     },
//     {
//         id: '6',
//         name: 'Weather Dashboard',
//         // technologies: ['HTML, CSS, JavaScript, jQuery, Bootstrap, Moment.js, OpenWeather API'],
//         url: 'https://bspiewak6.github.io/developer-techblog/',
//         repo: 'weather-dashboard',
//         image: project6
//     },

// ]

// <div className='project-grid'>
//     {projects.map((project) => ( 
//         <div key={project.repo} className='grid-item'>
//             <img 
//                 src={project.image}
//                 alt={(`${project.name} App`)}
//                 className='project-img'
//             />
//             <a href={project.url} target='_blank' rel="noreferrer" >
//                 <h3 className='project-name'>{project.name}</h3>
//             </a>
//             <a href={(`https://github.com/bspiewak6/${project.repo}`)} target='_blank' rel="noreferrer" className='project-feature'>GitHub Repository</a>
//         </div>  */}
//     ))}
// </div>

