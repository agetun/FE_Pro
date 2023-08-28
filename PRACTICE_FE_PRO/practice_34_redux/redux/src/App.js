import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { depositAction, resetAction, withdrawAction } from './store/reducer/accountReducer'; 
import WordsList from './components/WordsList';

 

function App() {
  const account = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{account}</p>
      <button onClick={() => dispatch(depositAction(10))}>+</button>
      <button onClick={() => dispatch(withdrawAction(10))}>-</button>
      <button onClick={() => dispatch(resetAction())}>0</button>
      <WordsList />
    </div>
  );
}

export default App;
