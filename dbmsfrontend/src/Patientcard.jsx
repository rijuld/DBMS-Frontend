import React from 'react';
import {useHistory} from "react-router-dom";
const Patientcard = (props)=>
{
    
    const {patient} = props;
    const {pid,first_name,last_name } = patient;
    let history = useHistory();
                    return (
                        <div key={pid} style={{ backgroundColor: "grey", margin:"10px", padding: "15px"}}
                        onClick ={()=>history.push(`/patient/${pid}`)}
                        >
                    <h5>{first_name}</h5>
                    <h6>Assigned to user: {last_name}</h6>
                        </div>
                    )
};
export default Patientcard