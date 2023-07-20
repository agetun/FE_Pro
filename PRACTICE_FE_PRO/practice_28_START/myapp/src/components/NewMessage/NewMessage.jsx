import { useState } from "react";
import SendButton from "../SendButton/SendButton";
import "./NewMessage.css";
import ChatMessages from "../ChatMessages/ChatMessages";

export default function NewMessage({chatsMessages, setChatMessages }) {
  const [inputValue, setInputValue] = useState('')

  const add_message = input_value => {
    const mesage_item = {
      id: Date.now(),
      text: input_value
    }
    setChatMessages([...chatsMessages, mesage_item])
    console.log(mesage_item);
  }
  // console.log(inputValue);
  return (
    <div className="NewMessage">
      <div className="MessageWrapper">
        <i className="fa-regular fa-face-smile"></i>
        <input 
        placeholder="Message" 
        value={inputValue} onChange={(event) => {
          setInputValue(event.target.value);
        }}
         />
        <i className="fa-solid fa-paperclip"></i>
      </div>
      <SendButton inputValue={inputValue} setInputValue={setInputValue} add_message={add_message} />
    </div>
  );
}