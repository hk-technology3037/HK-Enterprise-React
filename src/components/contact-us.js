import React from 'react'

import PropTypes from 'prop-types'

import './contact-us.css'

const ContactUS = (props) => {
  return (
    <div
      id="Contacts"
      className={`contact-us-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact-us-max-width thq-section-max-width">
        <div className="contact-us-content1 thq-flex-row">
          <div className="contact-us-content2">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact-us-content3 thq-flex-row">
          <div className="contact-us-container2">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact-us-image thq-img-ratio-16-9"
            />
            <h3 className="contact-us-text3 thq-heading-3">
              {props.location2}
            </h3>
            <p className="thq-body-large">{props.location2Description}</p>
            <div className="contact-us-container3">
              <a
                href="https://maps.app.goo.gl/3UTGtdr2TsUPFv737"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-us-link thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ContactUS.defaultProps = {
  location2ImageAlt: 'Image of our secondary location',
  rootClassName: '',
  location2Description:
    'For quick queries or appointments, reach out to us via phone or email.',
  content1:
    'For computer, laptop repair, networking solutions, and more, contact us at HK Enterprise.',
  location2ImageSrc: '/ifm-1400w.jpg',
  heading1: 'Contact Us',
  location2:
    '3037, International Fashion Market, Sitanagar to Canal Road, Punagam, Surat – 395010',
}

ContactUS.propTypes = {
  location2ImageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  location2Description: PropTypes.string,
  content1: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  heading1: PropTypes.string,
  location2: PropTypes.string,
}

export default ContactUS
