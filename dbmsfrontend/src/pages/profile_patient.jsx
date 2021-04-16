import React, { useRef, useEffect, useState } from "react";
import { useLocation, Switch } from "react-router-dom";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";
import LayoutDefault from "./layouts/LayoutDefault";
import Home from "./views/Home_dashboard";
import { useParams } from "react-router-dom";
import axios from "axios";
import Na_patient from "./navigation/navbar_patient";
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const Patient_Profile = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState();
  const [patientdoctor, setPatientDoctor] = useState();
  const [patienticu, setPatientIcu] = useState();
  useEffect(() => {
    axios.get(`http://localhost:5000/patient/${id}`).then((res) => {
      const patient = res.data;
      setPatient(patient);
    });
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:5000/patientdoctor/${id}`).then((res) => {
      const patientdoctor = res.data;
      setPatientDoctor(patientdoctor);
    });
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:5000/patienticu/${id}`).then((res) => {
      const patienticu = res.data;
      setPatientIcu(patienticu);
    });
  }, []);

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
    <Na_patient/>
      <h1>HELLO {patient && patient.pid}</h1>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Home
            layout={LayoutDefault}
            patient={patient}
            patienticu={patienticu}
            patientdoctor={patientdoctor}
          />
        )}
      />
    </>
  );
};

export default Patient_Profile;
