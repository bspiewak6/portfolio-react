import React, {useState} from 'react';
import Header from './components/Header';

function App() {

  const [categories] = useState([
    { name: 'About' },
    { name: 'Portfolio' },
    { name: 'Resume'},
    { name: 'Contact' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <main>
        <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        ></Header>
      </main>
    </div>
  );
}

export default App;
