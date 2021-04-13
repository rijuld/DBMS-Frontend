import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
function Success() {
  const { first_name, pid, phone_no, hospital_name } = useParams();
  return (
    <div>
      <h1>SUCCESS</h1>
      <h1>Donor Details</h1>
      <h4>Name: {first_name}</h4>
      <h4>Patient id: {pid}</h4>
      <h4>Phone_no: {phone_no}</h4>
      <h4>Hospital_name: {hospital_name}</h4>
    </div>
  );
}

export default Success;
