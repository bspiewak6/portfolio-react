import React from 'react';
import Resume from '../../assets/BDS_Resume.pdf'

function Footer() {

    return (
        <footer className="d-flex justify-content-center">
            <div className='flex-row'>
                <div className='px-2'>
                    <a href="https://github.com/bspiewak6" target="_blank" rel='noreferrer'><i className="fab fa-github fa-3x"></i></a>
                </div>
                <div className='px-2 icon'>
                    <a href="https://www.linkedin.com/in/brianspiewak/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin fa-3x"></i></a>
                </div>
                <div className='px-2'>
                    <a href={`${Resume}`} download="Resume"><i class="fas fa-file-download fa-3x"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;