import React, {useEffect} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Navbar = (props) => {
    const {
        categories = {},
        currentCategory,
        setCurrentCategory
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <nav className='flex-row px-1'>
            <h1>
                <a href='/'><span>Brian Spiewak</span></a>
            </h1>
            <ul className='flex-row'>
                {categories.map((category) => (
                    <li key={category.id} className='mx-2'>
                        <span onClick={() => setCurrentCategory(category)}>{category.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;