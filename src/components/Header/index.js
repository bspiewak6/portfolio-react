import React, { useState } from 'react';
import Navbar from '../Navbar';
import Resume from '../../assets/BDS_Resume.pdf'

const Header = () => {
    const [categories] = useState([
            { id: '1', name: 'About' },
            { id: '2', name: 'Skills' },
            { id: '3', name: 'Portfolio' },
            { id: '4', name: 'Contact' }
        ]);

        const [currentCategory, setCurrentCategory] = useState(categories[0]);

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
                
                <div className="name">
                Brian Spiewak
                </div>
            
                <div className="d-flex justify-content-center icons">
                <div className='flex-row'>
                    <div className='px-2'>
                        <a href="https://github.com/bspiewak6" target="_blank" rel='noreferrer'><i className="fab fa-github fa-3x"></i></a>
                    </div>
                    <div className='px-2'>
                        <a href="https://www.linkedin.com/in/brianspiewak/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin fa-3x"></i></a>
                    </div>
                    <div className='px-2'>
                        <a href={`${Resume}`} download="Resume"><i class="fas fa-file-download fa-3x"></i></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
