import React, { useState } from 'react';
import Navbar from '../Navbar';

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
        </div>
        </div>
    );
}

export default Header;
