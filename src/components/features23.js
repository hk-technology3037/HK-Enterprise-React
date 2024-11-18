import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features23.css'

const Features23 = (props) => {
  return (
    <div className="features23-layout349 thq-section-padding">
      <div className="features23-max-width thq-section-max-width">
        <div className="features23-container1">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span>
            {props.text ?? (
              <Fragment>
                <span className="features23-text24 thq-body-small">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </span>
              </Fragment>
            )}
          </span>
          <button className="thq-button-filled features23-button">
            <span className="thq-body-small">{props.action1}</span>
          </button>
        </div>
        <div className="thq-grid-3">
          <div className="features23-container3 thq-card">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features23-image1 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature1Title}</h2>
            <span className="features23-text13 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
          <div className="features23-container4 thq-card">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="features23-image2 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature2Title}</h2>
            <span className="features23-text15 thq-body-small">
              {props.feature2Description}
            </span>
          </div>
          <div className="features23-container5 thq-card">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features23-image3 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature3Title}</h2>
            <span className="features23-text17 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
          <div className="features23-container6 thq-card">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="features23-image4 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature4Title}</h2>
            <span className="features23-text19 thq-body-small">
              {props.feature4Description}
            </span>
          </div>
          <div className="features23-container7 thq-card">
            <img
              alt={props.feature5ImageAlt}
              src={props.feature5ImageSrc}
              className="features23-image5 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature5Title}</h2>
            <span className="features23-text21 thq-body-small">
              {props.feature5Description}
            </span>
          </div>
          <div className="features23-container8 thq-card">
            <img
              alt={props.feature6ImageAlt}
              src={props.feature6ImageSrc}
              className="features23-image6 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature6Title}</h2>
            <span className="features23-text23 thq-body-small">
              {props.feature6Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features23.defaultProps = {
  feature3Description:
    'Professional server setup and ongoing maintenance to ensure seamless operations for your business.',
  feature4ImageAlt: 'Security Solutions Image',
  feature3Title: 'Server Setup and Maintenance',
  feature4Description:
    'Robust security solutions to safeguard your data and protect your systems from cyber threats.',
  feature1Description:
    'Expert repair services for computers and laptops to keep your devices running smoothly.',
  feature6Title: 'Customer Satisfaction Guarantee',
  feature3ImageAlt: 'Server Setup and Maintenance Image',
  action1: 'Learn More',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1690383922983-90d7a4658ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM4MDY4OHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Key Features',
  feature6Description:
    'Dedicated to ensuring customer satisfaction through efficient service delivery and support.',
  feature5Title: 'Customized IT Services',
  feature1Title: 'Computer and Laptop Repair',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1422565167033-dec8fad92aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM4MDY4OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature5ImageAlt: 'Customized IT Services Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1494173853739-c21f58b16055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM4MDY4OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature5Description:
    'Tailor-made IT services to meet the specific needs of your business or individual requirements.',
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM4MDY4OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'Networking Solutions Image',
  feature6ImageAlt: 'Customer Satisfaction Guarantee Image',
  text: undefined,
  feature1ImageAlt: 'Computer and Laptop Repair Image',
  feature2Title: 'Networking Solutions',
  feature2Description:
    'Tailored networking solutions to optimize connectivity and enhance communication within your business.',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM4MDY5MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1625055930842-b9ad84b7facd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM4MDY4OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4Title: 'Security Solutions',
}

Features23.propTypes = {
  feature3Description: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature4Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature6Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  action1: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  heading1: PropTypes.string,
  feature6Description: PropTypes.string,
  feature5Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature5Description: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  text: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature4Title: PropTypes.string,
}

export default Features23
