import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer4-logo2"
            />
          </div>
          <div className="footer4-links">
            <span className="thq-body-small">{props.link1}</span>
            <span className="thq-body-small">{props.link2}</span>
            <span className="thq-body-small">{props.link3}</span>
            <span className="thq-body-small">{props.link4}</span>
            <Link to="/contact" className="footer4-navlink thq-body-small">
              {props.link5}
            </Link>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">
                © 2024 HK Enterprise - All rights reserved
              </span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text6 thq-body-small">
                {props.privacyLink}
              </span>
              <span className="thq-body-small">{props.termsLink}</span>
              <span className="thq-body-small">{props.cookiesLink}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  cookiesLink: 'Cookies Policy',
  privacyLink: 'Privacy Policy',
  logoAlt: 'HK Enterprise Logo',
  link3: 'Server Establishment and Maintenance',
  termsLink: 'Terms and Conditions',
  link1: 'Computer Laptop Repair',
  logoSrc: '/enterprise%20(1)-200h.png',
  link5: 'Contact Us',
  link2: 'Networking Solutions',
  link4: 'Software Solutions',
}

Footer4.propTypes = {
  cookiesLink: PropTypes.string,
  privacyLink: PropTypes.string,
  logoAlt: PropTypes.string,
  link3: PropTypes.string,
  termsLink: PropTypes.string,
  link1: PropTypes.string,
  logoSrc: PropTypes.string,
  link5: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
}

export default Footer4
