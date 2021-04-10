import React, {useEffect} from 'react';
import {Switch,Route,Link} from "react-router-dom";
import About from "./About";
import HoverTable_patient from "./pages/table_patient"
import HoverTable_doctor from "./pages/table_doctor"
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
 
            {/* <Link to="/about">About</Link> */}
            <button onClick={()=> history.push('/about')}>About</button>
            <button onClick={()=> history.push('/patientall')}>Patient All</button>
            <button onClick={()=> history.push('/doctorall')}>Doctor All</button>
            <button onClick={()=> history.push('/icuall')}>ICU All</button>
            <button onClick={()=> history.push('/patient')}>Patient</button>
            <button onClick={()=> history.push('/patient/1')}>Content</button>
            <button onClick={()=> history.push('/counter')}>Counter</button>
            <button onClick={()=> history.push('/landing')}>Landing</button>
            <button onClick={()=> history.push('/patient_profile/1')}>Patient Profile</button>
            <button onClick={()=> history.push('/doctor_profile')}>Doctor Profile</button>
            <Switch>
                <Route exact path ="/about" children={<About/>}/>
                <Route exact path ="/patient_profile/:id" children={<Patient_Profile/>}/>
                <Route exact path ="/patientall" children={<HoverTable_patient/>}/>
                <Route exact path ="/doctorall" children={<HoverTable_doctor/>}/>
                <Route exact path ="/icuall" children={<HoverTable_icu/>}/>
                <Route exact path ="/patient" render ={(props) => <Patient {...props}/>}/>
                <Route exact path ="/patient/:id" render ={(props) => <Patientind {...props}/>}/>
                <Route exact path ="/counter" render ={(props) => <Counter {...props} />}/>
                <Route exact path ="/landing" render ={(props) => <Landing {...props} />}/>
                <Route exact path ="/doctor_profile" render ={(props) => <Profile_Doctor {...props} />}/>
                
            </Switch>
        </div>

    );
};
export default Swi;