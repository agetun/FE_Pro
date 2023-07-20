import { useEffect, useState } from 'react'

export default function TestComponent() {

    const [state, setState] = useState("");
    const [value, setvalue] = useState("");
    const [value2, setvalue2] = useState("");

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => {
        setState(json.title);
    });
    }, [value2]);    

    console.log("render");

  return (
  <div>
    <input 
    placeholder='НЕ РЕАГИРУЙ НА ИЗМЕНЕНИЯ'
    value={value}
    onChange={(e) => {
        setvalue(e.target.value);
    }}
    />
    <input 
    placeholder='ОТПРАВЛЯЙ ФЕЧ'
    value={value2}
    onChange={(e) => {
        setvalue2(e.target.value);
    }}
    />
    <div>{state}</div>
  </div>
    
  );
}
