import './index.css'

import React, { useState } from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Project';
import ScrollTopArrow from './components/Scroll/index';
import Skills from './components/Skills';

// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [categories] = useState([
    {
      id: '1',
      name: 'About',
    },
    {
      id: '2',
      name: 'Portfolio',
    },
    {
      id: '3',
      name: 'Skills',
    },
    {
      id: '4',
      name: 'Contact',
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState('About');

  function renderPage() {
    switch (currentCategory) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Skills':
        return <Skills />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />
    }
  }

  return (
    <div>
        <Header
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        ></Header>   
        
        <div className="App">
          <ScrollTopArrow/>
        </div>
        
        <main id="contentScroller">
            {renderPage(currentCategory)}
        </main>
        
        <Footer></Footer>
    </div>  
  );
}

export default App;
