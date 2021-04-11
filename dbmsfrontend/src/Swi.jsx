import React, {useEffect} from 'react';
import {Switch,Route,Link} from "react-router-dom";
import About from "./About";
import HoverTable_patient from "./pages/table_patient"
import HoverTable_doctor from "./pages/table_doctor"
import Login_doctor from "./pages/login_doctor"
import Login_patient from "./pages/login_patient"
import Login_admin from "./pages/login_admin"
import Register_patient from "./pages/Register_patient"
import HoverTable_icu from "./pages/table_icu"
import Landing from "./pages/landing"
import Patient_Profile from "./pages/profile_patient"
import Patient_Doctor from "./pages/profile_doctor"
import Patient from "./Patient";
import Patientind from "./Patientind";
import Counter from "./test1";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from "./redux/ducks/user";
import { getPatient } from "./redux/ducks/patient";
import { getPatientAll } from "./redux/ducks/patientall";
import Patientcard from './Patientcard';
import Profile_Doctor from './pages/profile_doctor';
import Na from './pages/navigation/navbar'
const Swi = (props)=>{
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getPatient());
    dispatch(getPatientAll());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  console.log(user);
  const patient = useSelector((state) => state.patient.patient);
  console.log(patient);
  const patientall = useSelector((state) => state.patientall.patientall);
  console.log(patientall);
    const count = useSelector((state)=>state.counter.count)
    const history = useHistory();
    return(
        <div>
            <Na/>
            {/* <Link to="/about">About</Link> */}
            {/* <button onClick={()=> history.push('/about')}>About</button> */}
            <Switch>
                <Route exact path ="/login_doctor" children={<Login_doctor/>}/>
                <Route exact path ="/login_patient" children={<Login_patient/>}/>
                <Route exact path ="/login_admin" children={<Login_admin/>}/>
                <Route exact path ="/about" children={<About/>}/>
                <Route exact path ="/register_patient" children={<Register_patient/>}/>
                <Route exact path ="/patient_profile/:id" children={<Patient_Profile/>}/>
                <Route exact path ="/patientall" children={<HoverTable_patient/>}/>
                <Route exact path ="/doctorall" children={<HoverTable_doctor/>}/>
                <Route exact path ="/icuall" children={<HoverTable_icu/>}/>
                <Route exact path ="/patient" render ={(props) => <Patient {...props}/>}/>
                <Route exact path ="/patient/:id" render ={(props) => <Patientind {...props}/>}/>
                <Route exact path ="/counter" render ={(props) => <Counter {...props} />}/>
                <Route exact path ="/" render ={(props) => <Landing {...props} />}/>
                <Route exact path ="/doctor_profile/:id" render ={(props) => <Profile_Doctor {...props} />}/>
                
            </Switch>
        </div>

    );
};
export default Swi;