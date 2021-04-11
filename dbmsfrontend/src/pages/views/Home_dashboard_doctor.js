
import React from 'react';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = (props) => {
  const {doctor} = props;

  return (
    
    <>
      <Testimonial topDivider doctor={doctor}/> 
      <Cta split />
    </>
  );
}

export default Home;