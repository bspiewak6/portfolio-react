import React from 'react';

function Footer() {

    return (
        <footer className="footer">
            <div className='flex-row'>
                <div className='px-2'>
                    <a href="https://github.com/bspiewak6" target="_blank" rel='noreferrer'><i className="color-1 fab fa-github fa-3x"></i></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/brianspiewak/" target="_blank" rel='noreferrer'><i className="color-1 fab fa-linkedin fa-3x"></i></a>
                </div>
                <div>
                    {/* add in twitter? */}
                </div>
            </div>
        </footer>
    )
}

export default Footer;