
import React from 'react';
import FeaturesSplit from '../components/sections/FeaturesSplit';


const Home = (props) => {
  const {patient} = props;
  return (
    <>
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" patient={patient}/>
    </>
  );
}

export default Home;