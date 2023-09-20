import { useState } from 'react';
import './App.css';
// import FormItem from './components/FormItem';
import ModalWindow from './components/ModalWindow';

function App() {

  const [ modalActive, setModalActive ] = useState(false)

  return (
    <div>

      <button
        onClick={() => setModalActive(true)}
      >
        Open modal window
      </button>

      <ModalWindow modalActive={modalActive} setModalActive={setModalActive} />

      
    </div>
  );
}

export default App;


/*
1. Создать состояниe modalActive(+setModalActive). Присвоить изначальное значение false
2. Если в modalActive лежит true, то диву с классом modal добавлять еще и класс active
3. При клике на кнопку Open modal window значение меняется на true.
4. При клике на Х значение меняется на false
*/
