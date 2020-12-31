import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import About from './components/About';
// import Project from './components/Project';
// import Skills from './components/Skills';
import './index.css';


function App() {

  // const [currentPage, setCurrentPage] = useState('About');

  // const renderPage = () => {
  //   switch (currentPage) {
  //     case 'About':
  //       return <About />
  //     case 'Skills':
  //       return <Skills />
  //     case 'Portfolio':
  //       return <Portfolio />
  //     case 'Contact':
  //       return <Contact /> 
  //     default:
  //       return <About />    
  //   }
  // };

  return (
    <div class="big-image">
      <div class="overlay">
        <Header></Header>   
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
