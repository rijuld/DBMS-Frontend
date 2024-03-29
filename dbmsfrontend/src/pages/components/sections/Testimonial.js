import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import pic3 from "./pic3.gif";
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const {doctor,doctordepartment}= props;
  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: `Hi, ${doctor &&(doctor.first_name)} ${doctor &&(doctor.last_name)}`,
    paragraph: `${doctor &&(doctor.post)}`
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container"
      >
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses} style={{ 
        backgroundImage: `url(${pic3})` ,
        borderRadius: 20,
      }}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200" >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    YOUR DATE OF BIRTH
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high"><h3>{doctor &&(doctor.dob.substring(0,10))}</h3></span>
                  <span className="text-color-low">  </span>
                  <span className="testimonial-item-link">
  <a href="#0"></a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    YOUR GENDER
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high"><h3>{doctor &&(doctor.gender)}</h3></span>
                  <span className="text-color-low">  </span>
                  <span className="testimonial-item-link">
  <a href="#0"></a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    YOUR DEPARTMENT
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high"><h3>{doctordepartment && doctordepartment.dept_name}</h3></span>
                  <span className="text-color-low">  </span>
                  <span className="testimonial-item-link">
                    <a href="#0"></a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;