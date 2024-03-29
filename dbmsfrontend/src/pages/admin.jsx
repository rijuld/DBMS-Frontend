import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../pages/utils/SectionProps";
import SectionHeader from "../pages/components/sections/partials/SectionHeader.js";
import Image from "../pages/components/elements/Image.js";
import ButtonGroup from "../pages/components/elements/ButtonGroup.js";
import Button from "../pages/components/elements/Button.js";
import { useHistory } from "react-router-dom";
import Na_admin from "./navigation/navbar_admin";
import pic3 from "./pic3.gif";
import HoverTable_icu from "./table_icu";
const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const Admin = ({
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
  const history = useHistory();
  const { patient } = props;
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: ``,
    
  };

  return (

    <section {...props} className={outerClasses}>
  
      <Na_admin />
      <h1>Hi admin</h1>
      <div className="container"
      style={{ 
        backgroundImage: `url(${pic3})` ,
        borderRadius: 20,
      }}>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <Button
              tag="a"
              color="primary"
              wideMobile
              onClick={() => {
                {
                  history.push("/add_patient");
                }
              }}
            >
              ADD PATIENT
            </Button>
            <Button
              tag="a"
              color="primary"
              wideMobile
              onClick={() => {
                {
                  history.push("/add_icu");
                }
              }}
            >
              ADD ICU
            </Button>
            <Button
              tag="a"
              color="primary"
              wideMobile
              onClick={() => {
                {
                  history.push("/add_doctor");
                }
              }}
            >
              ADD DOCTOR
            </Button>
          </div>
        </div>
        <HoverTable_icu/>
      </div>
      
     
    </section>
  );
};

Admin.propTypes = propTypes;
Admin.defaultProps = defaultProps;

export default Admin;
