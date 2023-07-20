import { useRef } from "react";
import "./ChatElement.css"

const time = "13:10";

export default function ChatElement(props) {
  // console.log(props);

  const ref = useRef();

  const handleClick = () => {
    // const element = ref.current;

    // if (!element.classList.contains("ChatElement--blue")) {
    //   element.classList.add("ChatElement--blue")
    // }
  }

  const className = props.isBlue 
  ? "ChatElement ChatElement--blue" 
  : "ChatElement"

    return (
    <div  ref={ref} className={className} onClick={props.handleClick}>
      <img
        className="ChatElement__avatar"
        src={props.avatar}
      />
      <div className="ChatElement__content">
        <p className="ChatElement__title">{props.title}</p>
        <p className="ChatElement__description">
          {props.description}
        </p>
      </div>
      <div className="ChatElement__time">{props.time}</div>
    </div>
    )

}