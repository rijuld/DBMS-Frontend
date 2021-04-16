import React, { useRef, useEffect, useState } from "react";
import { useLocation, Switch } from "react-router-dom";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";
import LayoutDefault from "./layouts/LayoutDefault";
import Home from "./views/Home_dashboard_doctor";
import { useParams } from "react-router-dom";
import axios from "axios";
import Na_doctor from "./navigation/navbar_doctor";
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const Profile_Doctor = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState();
  const [doctordepartment, setDoctorDepartment] = useState();
  useEffect(() => {
    axios.get(`http://localhost:5000/doctor/${id}`).then((res) => {
      const doctor = res.data;
      setDoctor(doctor);
    });
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:5000/doctordepartment/${id}`).then((res) => {
      const doctordepartment = res.data;
      setDoctorDepartment(doctordepartment);
    });
  }, []);

  console.log(doctor);
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
      <Na_doctor />
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Home
            layout={LayoutDefault}
            doctor={doctor}
            doctordepartment={doctordepartment}
          />
        )}
      />
    </>
  );
};

export default Profile_Doctor;
