import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const {patient}= props;
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: `Hi ${patient &&(patient.first_name)} ${patient &&(patient.last_name)} welcome to Jeevan Daan`,
    paragraph: `House number-${patient &&(patient.house_number)}, Street-${patient &&(patient.street)} , City-${patient &&(patient.city)}  ,State-${patient &&(patient.state)} , Pincode-${patient &&(patient.pincode)}  `
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      
      <div className="container">
        
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
        
                  <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                    DONATE AN ORGAN 
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    ASK FOR AN ORGAN
                    </Button>
                  
     

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Temperature
                  </div>
                <h3 className="mt-0 mb-12">
                  TEMPERATURE: {patient &&(patient.temp)}°C
                  </h3>
                <p className="m-0">
                The average normal body temperature is generally accepted as 98.6°F (37°C)
                  </p>
              </div>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Blood Group
                  </div>
                <h3 className="mt-0 mb-12">
                BLOOD GROUP: {patient &&(patient.blood_group)}
                  </h3>
                <p className="m-0">
                Types O negative and O positive are best suited to donate red blood cells
                  </p>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Pulse
                  </div>
                <h3 className="mt-0 mb-12">
                  PULSE: {patient &&(patient.pulse)}
                  </h3>
                <p className="m-0">
                A normal resting heart rate should be 60–100 beats per minute, but it can vary from minute to minute
                  </p>
              </div>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                 bp
                  </div>
                <h3 className="mt-0 mb-12">
                BLOOD PRESSURE (DISTOLIC): {patient &&(patient.blood_pressure_dis)}
                  </h3>
                <p className="m-0">
                (diastolic pressure) that's between 60 and less than 80.
                  </p>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                 bp
                  </div>
                <h3 className="mt-0 mb-12">
                BLOOD PRESSURE (SYSTOLIC): {patient &&(patient.blood_pressure_sys)}
                  </h3>
                <p className="m-0">
                (systolic pressure) that's between 90 and less than 120 
                  </p>
              </div>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Comorbidity status
                  </div>
                <h3 className="mt-0 mb-12">
                COMORBIDITY STATUS : {patient &&(patient.comorbidity_status)}
                  </h3>
                <p className="m-0">
                  none
                  </p>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Breathing rate
                  </div>
                <h3 className="mt-0 mb-12">
                BREATHING RATE: {patient &&(patient.breathing_rate)}
                  </h3>
                <p className="m-0">
                The normal respiration rate for an adult at rest is 12 to 20 breaths per minute
                  </p>
              </div>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                Date of Birth : {patient &&(patient.dob).substring(0,10)}
                  </h3>
                <p className="m-0">
                  Happy b'day if it's your birthday!
                  </p>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  UNDER THE DOCTOR
                  </div>
                <h3 className="mt-0 mb-12">
                SELECT DNAME FROM DOCTOR D,PATIENT P WHERE P.DID=D.DID;
                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Under the ICU
                  </div>
                <h3 className="mt-0 mb-12">
                SELECT ICUNAME FROM ICU I,PATIENT P WHERE P.ICUID=I.ICUID;
                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
            </div>


            

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;