import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import About from "./About";
import HoverTable_patient from "./pages/table_patient";
import HoverTable_doctor from "./pages/table_doctor";
import Login_doctor from "./pages/login_doctor";
import Login_patient from "./pages/login_patient";
import Login_admin from "./pages/login_admin";
import Organ_donate from "./pages/organ_donate";
import Receive_entries from "./pages/receive_entries";
import Organ_recieve from "./pages/organ_receive";
import Register_patient from "./pages/Register_patient";
import HoverTable_icu from "./pages/table_icu";
import Landing from "./pages/landing";
import Patient_Profile from "./pages/profile_patient";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPatientAll } from "./redux/ducks/patientall";
import Profile_Doctor from "./pages/profile_doctor";
import Admin from "./pages/admin";
import Add_patient from "./pages/add_patient";
import Add_doctor from "./pages/add_doctor";
import Profile_icu from "./pages/profile_icu";
import Add_icu from "./pages/add_icu";

import Success from "./pages/success";

const Swi = (props) => {
  const history = useHistory();
  return (
    <div>
      {/* <Link to="/about">About</Link> */}
      {/* <button onClick={()=> history.push('/about')}>About</button> */}
      <Switch>
        <Route
          exact
          path="/login_doctor"
          children={<Login_doctor />}
        />
        <Route exact path="/login_patient" children={<Login_patient />} />
        <Route exact path="/login_admin" children={<Login_admin />} />
        <Route exact path="/about" children={<About />} />
        <Route exact path="/register_patient" children={<Register_patient />} />
        <Route
          exact
          path="/patient_profile/:id"
          children={<Patient_Profile />}
        />
          <Route
          exact
          path="/icu_profile"
          children={<icu_Profile />}
        />
        <Route exact path="/patientall" children={<HoverTable_patient />} />
        <Route exact path="/doctorall" children={<HoverTable_doctor />} />
        <Route exact path="/icuall" children={<HoverTable_icu />} />
        <Route exact path="/" render={(props) => <Landing {...props} />} />
        <Route
          exact
          path="/doctor_profile/:id"
          render={(props) => <Profile_Doctor {...props} />}
        />
        <Route
          exact
          path="/add_patient"
          render={(props) => <Add_patient {...props} />}
        />
         <Route
          exact
          path="/add_doctor"
          render={(props) => <Add_doctor {...props} />}
        />
        <Route
          exact
          path="/add_icu"
          render={(props) => <Add_icu {...props} />}
        />
        <Route exact path="/admin" render={(props) => <Admin {...props} />} />
        <Route
          exact
          path="/organ_donate/:id"
          render={(props) => <Organ_donate {...props} />}
        />
        <Route
          exact
          path="/organ_receive/:id"
          render={(props) => <Organ_recieve {...props} />}
        />
        <Route
          exact
          path="/receive_entries/:organid/:pincode"
          children={<Receive_entries />}
        />
        <Route
          exact
          path="/success/:first_name/:pid/:phone_no/:hospital_name"
          children={<Success />}
        />
      </Switch>
    </div>
  );
};
export default Swi;
