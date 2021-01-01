import React from 'react';

function Footer() {

    return (
        <footer className="footer">
            <div className='flex-row'>
                <div className='px-2'>
                    <a href="https://github.com/bspiewak6" target="_blank" rel='noreferrer'><i className="fab fa-github fa-3x"></i></a>
                </div>
                <div className='px-2'>
                    <a href="https://www.linkedin.com/in/brianspiewak/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin fa-3x"></i></a>
                </div>
                <div className='px-2'>
                    <a href="../../assets/BDS_Resume.pdf" download><i className="far fa-file fa-3x"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;