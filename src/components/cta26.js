import React from 'react'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span className="thq-heading-2">{props.heading1}</span>
                <p className="thq-body-large">{props.content1}</p>
              </div>
              <div className="cta26-actions">
                <button
                  type="button"
                  className="thq-button-filled cta26-button"
                >
                  {props.action1}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  heading1: 'Get in touch for all your IT needs!',
  content1: 'Contact us today for reliable and efficient IT services.',
  rootClassName: '',
  action1: 'Contact Us',
}

CTA26.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  rootClassName: PropTypes.string,
  action1: PropTypes.string,
}

export default CTA26
