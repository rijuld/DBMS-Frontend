import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import LayoutDefault from './layouts/LayoutDefault';
import Home from './views/Home';


ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const Landing= () => {

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
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Home layout={LayoutDefault}/>
      )} />
  );
}

export default Landing;