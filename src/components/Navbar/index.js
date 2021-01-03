import React from 'react';

const Navbar = (props) => {
    const {
        categories = {},
        setCurrentCategory
    } = props;

    return (
        <nav className='flex-row px-2'>
            <ul className='flex-row'>
                {categories.map((category) => (
                    <li key={category.name} className='mx-2'>
                        <a href={`#${category.name}`}>
                        <span
                           onClick={() => {
                                setCurrentCategory(category.name)
                                document.getElementById("contentScroller").scrollIntoView()
                         }}
                       >
                         {category.name}
                       </span></a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

