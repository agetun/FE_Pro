import { useEffect } from 'react';
import './App.css';
import { fetchUsers } from './store/slice/usersSlice';
import { useDispatch } from 'react-redux'
import UsersContainer from './components/UsersContainer';

function App() {

  const dispatch = useDispatch()

  useEffect(() => dispatch(fetchUsers()), []);

  return (
    <div>
      <UsersContainer />
    </div>
  );
}

export default App;
