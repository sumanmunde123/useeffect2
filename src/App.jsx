import { Counter } from './components/counter';
import './App.css'
import { useState } from 'react';

import { Button } from './style/buttons';
function App() {
  const [shows, setShows] = useState(true);
  return (
    <div className="box">
      <h1 className='h3'>"Welcome To Our Stop Watch"</h1>
      <diV className="App">
        {shows ? <Counter /> : ""}
        <Button 
          onClick={() => {
            setShows(!shows);
          }}
        >
          {shows ? "showTimer" : "Hide timer"}
        </Button>
      </diV>
    </div>
  );
}

export default App

// stop we have to clear interval 
// start we start starter again 
// reset clear id and set counyter one

