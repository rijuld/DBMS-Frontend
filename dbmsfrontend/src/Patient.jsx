import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Patientcard from './Patientcard';
import { CircularProgress} from "@material-ui/core";
const Patient = ()=> {
    const [todos, setTodos] =  useState();
    useEffect(()=>{
        axios.get(`http://localhost:5000/patient`)
      .then(res => {
        const responsetodos = res.data;
        setTodos(responsetodos)
      })
    },[])
    return(
        <div> 
            {todos? 
            (<div style ={{display: "flex", flexWrap: "wrap"}}>
                <h1>Todo List </h1>
                {todos && todos.slice(0,4).map(todo => <Patientcard patient={todo}/>)}
            </div>)
            : <CircularProgress/>}
            
        </div>
    );
};
export default Patient;