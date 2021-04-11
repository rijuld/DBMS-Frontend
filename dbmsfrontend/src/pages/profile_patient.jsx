import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import LayoutDefault from './layouts/LayoutDefault';
import Home from './views/Home_dashboard';
import Patientind from '../Patientind';
import { useDispatch, useSelector } from 'react-redux';
import { getPatient } from "../redux/ducks/patient";
import {useParams} from "react-router-dom";
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const Patient_Profile= () => {
const {id} = useParams();
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatient(id));
  }, [dispatch]);
  const patient = useSelector((state) => state.patient.patient);
  
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
      <>
      <h1>HELLO {patient && (patient.pid)}</h1>
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Home layout={LayoutDefault} patient={patient}/>
      )} />
      </>
  );
}

export default Patient_Profile;