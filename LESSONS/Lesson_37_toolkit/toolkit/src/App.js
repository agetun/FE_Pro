import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodosContainer from './components/TodosContainer';

function App() {
  return (
    <div className="App">
      <AddTodoForm />
      <TodosContainer />
    </div>
  );
}

export default App;
