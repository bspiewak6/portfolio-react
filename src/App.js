import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
// import Project from './components/Project';
// import Skills from './components/Skills';
import './index.css';


function App() {

  
  return (
    <div class="big-image">
      <div class="overlay">
        <Header></Header>   
        <Footer></Footer>
      </div>
    <div>
      <main>  
      <About></About> 
      </main>
    </div>
    </div>
  );
}

export default App;

