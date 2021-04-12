
import React from 'react';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = (props) => {
  const {doctor, doctordepartment} = props;

  return (
    
    <>
      <Testimonial topDivider doctor={doctor} doctordepartment={doctordepartment}/> 
      <Cta split />
    </>
  );
}

export default Home;