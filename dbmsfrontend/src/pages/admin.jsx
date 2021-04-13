import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../pages/utils/SectionProps";
import SectionHeader from "../pages/components/sections/partials/SectionHeader.js";
import Image from "../pages/components/elements/Image.js";
import ButtonGroup from "../pages/components/elements/ButtonGroup.js";
import Button from "../pages/components/elements/Button.js";
import { useHistory } from "react-router-dom";

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
    title: `Hi ADMIN`,
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
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
              color="dark"
              wideMobile
              href="https://github.com/cruip/open-react-template/"
            >
              ASK FOR AN ORGAN
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

Admin.propTypes = propTypes;
Admin.defaultProps = defaultProps;

export default Admin;
