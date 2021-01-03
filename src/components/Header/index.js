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
                
                <h1 className="name animate__animated animate__rotateInUpLeft">
                Brian Spiewak
                </h1>
                
            </div>
        </div>
    );
}

export default Header;
