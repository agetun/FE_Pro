import './App.css';
import User from './components/User';


function App() {

  const users = [
    {
      id: 1,
      firstname: 'Oleg',
      lastname: 'Petrov',
      age: 30
    },
    {
      id: 2,
      firstname: 'Anna',
      lastname: 'Sidorova',
      age: 22
    },
    {
      id: 3,
      firstname: 'Ivan',
      lastname: 'Gribov',
      age: 13
    },
    {
      id: 4,
      firstname: 'Irina',
      lastname: 'Sokolova',
      age: 54
    },
    {
      id: 5,
      firstname: 'Aleksandr',
      lastname: 'Getun',
      age: 54
    }
  ]


  return (
    <div>
      {
        users
        .filter(el => el.age >= 18)
        .map(el => <User firstname={el.firstname} lastname={el.lastname} age={el.age} />)
      }
    </div>
  );
}

export default App;
