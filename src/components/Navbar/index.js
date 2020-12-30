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
        <nav>
            <ul className='flex-row'>
                {categories.map((category) => {
                    return (
                        <li
                            className={`my-2 py-5 ${currentCategory.name === category.name && 'nav-active'
                                }`} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category);
                            }}>
                                {category.name}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navbar;