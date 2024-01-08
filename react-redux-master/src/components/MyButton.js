import React from "react";
import { useDispatch } from "react-redux";
import increment from "../actions";


const MyButton = () => {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(increment())}>Increment</button>
    );
}

export default MyButton;