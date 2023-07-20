import { useContext } from "react";
import { Context } from "../context";

export default function AppWithContext() {
    const text = 'L:WNFLKWRKWNLWNEF';

    return (
    // <Context.Provider value={text}>
        <Text4 text={text} />
    // </Context.Provider>
    )
}

const Text4 = ({text}) => {
    return <Text3 text={text} />
}

const Text3 = ({text}) => {
    return <Text2 text={text} />
}

const Text2 = ({text}) => {
    return <Text1 text={text} />
}

const Text1 = ({text}) => {
    return <Text text={text} />
}

const Text = ({text}) => {
    // const context = useContext(Context)
    // console.log(context);
    // return <p>{context}</p>
    console.log(text);
    return <p>{text}</p>
}