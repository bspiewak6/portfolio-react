import React from 'react';
import project1 from '../../assets/images/simplyreuse.png';
import project2 from '../../assets/images/tuneout.png';
import project3 from '../../assets/images/budgettracker.png';
import project4 from '../../assets/images/socialnetwork.png';
import project5 from '../../assets/images/devtechblog.png';
import project6 from '../../assets/images/weatherdashboard.png';

const projects = [
    {
        id: '1',
        name: 'Simply ReUse',
        // technologies: ['Node.js, Express.js, Handlebars.js, MySQL and the Sequelize ORM, HTML, CSS, JavaScript, MVC Framework, fuse.js, Heroku'],
        url: 'https://simplyreuse3.herokuapp.com/',
        repo: 'Simply-ReUse',
        image: project1
    },
    {
        id: '2',
        name: 'TuneOut',
        // technologies: ['HTML, JavaScript, Materialize CSS, Moment.js, TasteDive Music API, NY Times API'],
        url: 'https://bspiewak6.github.io/music/',
        repo: 'music',
        image: project2
    },
    {
        id: '3',
        name: 'Budget Tracker',
        // technologies: ['JavaScript, Express.js, MongoDB, MongoDB Atlas, Mongoose.js, Heroku'],
        url: 'https://budgettrackerbds.herokuapp.com/',
        repo: 'budget-tracker',
        image: project3
    },
    {
        id: '4',
        name: 'Social Network CLI',
        // technologies: ['JavaScript, Node.js, Express.js API, MongoDB, Mongoose.js, Moment.js'],
        url: 'https://bspiewak6.github.io/social-network/',
        repo: 'social-network',
        image: project4
    },
    {
        id: '5',
        name: 'Developers Everywhere',
        // technologies: ['JavaScript, Node.js, Express.js API, Sequelize, MVC Framework, Handlebars.js, MySQL2'],
        url: 'https://bspiewak6.github.io/developer-techblog/',
        repo: 'developer-techblog',
        image: project5
    },
    {
        id: '6',
        name: 'Weather Dashboard',
        // technologies: ['HTML, CSS, JavaScript, jQuery, Bootstrap, Moment.js, OpenWeather API'],
        url: 'https://bspiewak6.github.io/developer-techblog/',
        repo: 'weather-dashboard',
        image: project6
    },

]

const Project = () => {
    return (
        <section className="project-container">
            <h1 className="project-title">
                Portfolio
            </h1>

            <h5 className="project-intro">
                My passion for marketing has grown as my career has progressed. <br />There is no better way to explain than to show you.
            </h5>

{/* SINGLE ROW OF 3 CARD OPTION */}
            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src={project1} alt="SimplyReUse App" />
                    <div class="card-body">
                        <h5 class="card-title">Simply ReUse</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">GitHub Repository</small>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={project2} alt="TuneOut App" />
                    <div class="card-body">
                        <h5 class="card-title">TuneOut</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">GitHub Repository</small>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={project3} alt="Card image3" />
                    <div class="card-body">
                        <h5 class="card-title">Budget Tracker</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">GitHub Repository</small>
                    </div>
                </div>
            </div>

<br/><br/><br/><br/><br/>
{/* BLOG TYPE CARD OPTION */}
            <div class="card-columns">
                <div class="card">
                    <img class="card-img-top" src={project1} alt="SimplyReUse App" />
                    <div class="card-body">
                        <h5 class="card-title project-text">Simply ReUse</h5>
                        <p class="card-text project-text">Simply ReUse Repository</p>
                    </div>
                </div>

                <div class="card p-3">
                    <blockquote class="blockquote mb-0 card-body project-text">
                        <p>TuneOut Entertainment App -- Features APIs from TasteDive and NY Times. The user base and audience are those who need to tune out every now and then to catch their breath and enjoy some entertaining musicians, artists, authors, podcasts and video games. </p>
                        <footer class="blockquote-footer">
                            <small class="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>

                <div class="card">
                    <img class="card-img-top" src={project2} alt="TuneOut App" />
                    <div class="card-body">
                        <h5 class="card-title project-text">TuneOut Entertainment</h5>
                        <p class="card-text project-text">GitHub Repository</p>
                    </div>
                </div>

                <div class="card bg-primary text-white text-center p-3">
                    <blockquote class="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                        <footer class="blockquote-footer">
                            <small>
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>

                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>

                <div class="card">
                    <img class="card-img" src={project3} alt="Card image3" />
                </div>

                <div class="card p-3 text-right">
                    <blockquote class="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer">
                            <small class="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;



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
