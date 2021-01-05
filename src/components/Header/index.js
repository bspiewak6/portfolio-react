import React from 'react';
import Navbar from '../Navbar';

const Header = (props) => {

        const { categories, currentCategory, setCurrentCategory } = props;

        return (
        <div className="big-image">
            <div className="overlay">
                <div className="navbar">
                    <Navbar
                        categories={categories}
                        currentCategory={currentCategory}
                        setCurrentCategory={setCurrentCategory}
                    >
                    </Navbar>
                </div>
                
                <h1 className="name">
                Brian Spiewak
                </h1>
                
                <div className='flex-row home-links'>
                    <div className='px-2'>
                        <a className="link-home" href="https://github.com/bspiewak6" target="_blank" rel='noreferrer'><i className="fab fa-github fa-3x"></i></a>
                    </div>
                    <div className='px-2'>
                        <a className="link-home" href="https://www.linkedin.com/in/brianspiewak/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin fa-3x"></i></a>
                    </div>
                    <div className='px-2'>
                        <a className="link-home" href="https://stackoverflow.com/users/13668454/brian-spiewak" target="_blank" rel='noreferrer'><i className="fab fa-stack-overflow fa-3x"></i></a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;
