import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
import Navbar from '../Navbar';

const Header = () => {
    return (
        <section>
            <h1>Hello, I'm Brian Spiewak</h1> 
            <p>An up and coming full-stack web developer</p>
            <img src={coverImage} style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default Header;
