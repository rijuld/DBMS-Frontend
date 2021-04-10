import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
const Patientind = ()=> {
    const {id} = useParams();
    const [todoDetails, setTodoDetails] =  useState();
    useEffect(()=>{
        axios.get(`http://localhost:5000/patient/${id}`)
      .then(res => {
        const responsetodo = res.data[0];
        setTodoDetails(responsetodo)
      })
    },[])
  const {pid,first_name,last_name,house_number}= todoDetails|| {};
    return(
    <div><h1>{`This is the individual patient component and the patient id is ${pid} and the patient name is ${first_name} and the last name of the patient is ${last_name} and the house number is ${house_number}`}</h1></div>
    );
};
export default Patientind;

/**
 * {todos? 
            (<div style ={{display: "flex", flexWrap: "wrap"}}>
                <h1>Todo List </h1>
                {todos && todos.slice(0,4).map(todo => <Patientcard patient={todo}/>)}
            </div>)
            : <CircularProgress/>}
 */