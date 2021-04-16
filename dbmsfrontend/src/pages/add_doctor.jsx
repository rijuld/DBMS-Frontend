
import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import qs from "qs";

function Add_doctor(){
    const [did, setdid] = useState("");
  const [post, setpost] = useState("0");
  const [dob, setdob] = useState("0");
  const [first_name, setfname] = useState("0");
  const [last_name, setlname] = useState("");
  
  const [gender, setgender] = useState("");
  const [dept_id, setdept_id] = useState("");
  const [password, setpassword] = useState("");
  const [street, setstreet] = useState("");
  const [house, sethouse] = useState("");
}