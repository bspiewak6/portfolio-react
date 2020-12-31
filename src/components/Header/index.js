import React, { useState } from 'react';
import Navbar from '../Navbar';

const Header = () => {
    const [categories] = useState([
            { id: '1', name: 'About' },
            { id: '2', name: 'Skills' },
            { id: '3', name: 'Portfolio' },
            { id: '4', name: 'Contact' },
        ]);

        const [currentCategory, setCurrentCategory] = useState(categories[0]);

        return (
        <div>
            <Navbar
                categories={categories}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
            >
                </Navbar>
        </div>
    );
}

export default Header;
