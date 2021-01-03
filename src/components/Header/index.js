import React from 'react';
import Navbar from '../Navbar';
// import Resume from '../../assets/BDS_Resume.pdf'

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
                
                <div className="name">
                Brian Spiewak
                </div>
            </div>
        </div>
    );
}

export default Header;
