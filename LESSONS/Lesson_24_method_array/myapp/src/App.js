import React, {useState} from "react"
import TestComponent from "./components/TestComponent";

function App() {

 // let value = "";

    // let arr = useState("Hello");

    // let value = arr[0];
    // let setState = arr[1];

//     let [value, setValue] = useState("");
//     let [user, setUser] = useState({
//         username: "",
//         surname: ""
//     });

//     console.log("Component Updade");


//     const handlerChange = (event) => {
//         // console.log(event.target.name, event.target.value);
//         // setValue(event.target.value
//         setUser(prevState => ({...prevState, [event.target.name]:event.target.value}))
//     }
// const saveState = () => {
//         console.log(user);
//     }

    return (
        <div className="App">

          <TestComponent />
          
            {/* <button onClick={()=> alert(value)}>Click</button> */}

            {/* <input type="text" value={user.username} name="username" onChange={handlerChange} /> */}

            {/* <input type="text" value={user.surname} name="surname" onChange={handlerChange} /> */}

            {/* <h1>{value}</h1> */}

            {/* <button onClick={saveState}>Click</button> */}
        </div>
    )
}

export default App;
