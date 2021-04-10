import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {decrement, increment} from "./redux/ducks/counter";
const Counter = (props)=> {
    const {name} = props;
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    const handleIncrement = () =>{
        dispatch(increment())
    };
    const handleDecrement = () =>{
        dispatch(decrement())
    };
    return (
        <React.Fragment>
        <p>The count is: {count}</p>
        <p>The name is </p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        </React.Fragment>
    );
  }
  export default Counter;