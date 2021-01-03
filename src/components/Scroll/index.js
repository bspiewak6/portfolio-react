import React, {useState, useEffect} from 'react';
import {FaArrowAltCircleUp} from 'react-icons/fa';
import '../../App.js';


const ScrollTopArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 300){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
        <FaArrowAltCircleUp className="scrollTop" onClick={scrollTop} style={{height: 50, display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollTopArrow;