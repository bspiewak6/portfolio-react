import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
// import Project from './components/Project';
// import Skills from './components/Skills';


function App() {

  return (
    <div>
        <Header></Header>   
      <main>
            <About></About>
            <Contact></Contact>
      </main>
        <Footer></Footer>
      </div>  
  );
}

export default App;
