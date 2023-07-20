import { Context } from './context';
import './App.css';
import Square from './components/Square';


const YelowWrapper = (props) => {
  return (
    <div 
    style={{
      padding: "10px",
      borderRadius: "13px",
      border: "2px solid yellow"
    }}
    >
      {props.children}
    </div>
  );
};


function App() {

  const number1 = '1';

  const number2 = '2';

  const number3 = '3';

  const onclick = () => console.log('Hello');
 
  return (
       
    <div className='App'>
      <Context.Provider value={{onclick, number1, number2, number3}}>
      <Square />
    </Context.Provider>

    <YelowWrapper>
        Text
    </YelowWrapper>
     </div>
  );
}

export default App;
