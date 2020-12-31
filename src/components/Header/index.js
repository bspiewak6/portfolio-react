import React, { useState } from 'react';
import Navbar from '../Navbar';

const Header = () => {
    const [categories] = useState([
            { id: '1', name: 'About' },
            { id: '2', name: 'Skills' },
            { id: '3', name: 'Portfolio' },
            { id: '4', name: 'Contact' },
            { id: '5', name: 'Resume'}
        ]);

        const [currentCategory, setCurrentCategory] = useState(categories[0]);

        return (
        <div>
            <div className="navbar">
                <Navbar
                    categories={categories}
                    currentCategory={currentCategory}
                    setCurrentCategory={setCurrentCategory}
                >
                </Navbar>
        </div>
            <div className="name">
                <h1>
                    Brian Spiewak
                </h1>
            </div>
        </div>
    );
}

export default Header;
