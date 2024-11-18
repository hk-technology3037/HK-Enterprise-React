import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './hero2.css'

const Hero2 = (props) => {
  return (
    <div className="hero2-header5 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero2-image"
      />
      <div className="hero2-container1">
        <div className="hero2-max-width thq-section-max-width">
          <div className="hero2-column">
            <div className="hero2-content">
              <h1 className="hero2-text1 thq-heading-1">{props.heading1}</h1>
              <p className="hero2-text2 thq-body-large">{props.content1}</p>
              <div className="hero2-actions">
                <div className="hero2-container2">
                  <button className="hero2-button thq-button-filled">
                    <Link to="/about" className="hero2-text3 thq-body-small">
                      {props.action1}
                    </Link>
                  </button>
                </div>
                <div className="hero2-container3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero2.defaultProps = {
  heading1: 'Welcome to HK Enterprise',
  image1Src:
    'https://images.unsplash.com/photo-1718778449026-fc05939d7650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM4MDY4N3w&ixlib=rb-4.0.3&q=80&w=1080',
  action1: 'Get Started',
  action2: 'Learn More',
  image1Alt: 'IT Solutions Provider Image',
  content1: 'Your one-stop destination for professional IT services',
}

Hero2.propTypes = {
  heading1: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
}

export default Hero2
