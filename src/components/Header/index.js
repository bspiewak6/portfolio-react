import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';
import coverImage from '../../assets/cover/option1.JPG';
import Navbar from '../Navbar';

const Header = (props) => {
    const { 
        categories = {},
        currentCategory,
        setCurrentCategory
    } = props;

    return (
        <div>
            <div>
                <h1>Hello, I'm Brian Spiewak</h1> 
                <p>An up and coming full-stack web developer</p>
            </div>
            <div>
            <Navbar
                categories={categories}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
            />
            <img src={coverImage} style={{ width: "100%" }} alt="cover" />
            </div>
        </div>
    );
}

export default Header;
