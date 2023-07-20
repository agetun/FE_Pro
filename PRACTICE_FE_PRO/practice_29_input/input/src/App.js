import { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState('')

  const print_input = event => {
    event.preventDefault();
    setInput(event.target.value)
  }


  return (
    <div className="App">
      
      <input onChange={print_input} type="text" name='input' />

      <div>
        <p>{input}</p>
      </div>

    </div>
  );
}

export default App;
