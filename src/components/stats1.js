import React from 'react'

import PropTypes from 'prop-types'

import './stats1.css'

const Stats1 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="stats1-max-width thq-section-max-width">
        <div className="stats1-container2 thq-flex-column">
          <span className="thq-body-small">{props.content1}</span>
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="thq-body-large">{props.content2}</p>
          <div className="stats1-container3">
            <div className="stats1-container4">
              <h2 className="thq-heading-2">{props.stat1}</h2>
              <span className="thq-body-small">{props.stat1Description}</span>
            </div>
            <div className="stats1-container5">
              <h2 className="thq-heading-2">{props.stat2}</h2>
              <span className="thq-body-small">{props.stat2Description}</span>
            </div>
          </div>
          <div className="stats1-container6">
            <div className="stats1-container7">
              <h2 className="thq-heading-2">{props.stat3}</h2>
              <span className="thq-body-small">{props.stat3Description}</span>
            </div>
            <div className="stats1-container8">
              <h2 className="thq-heading-2">{props.stat4}</h2>
              <span className="thq-body-small">{props.stat4Description}</span>
            </div>
          </div>
        </div>
        <div className="stats1-container9">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats1-image"
          />
        </div>
      </div>
    </div>
  )
}

Stats1.defaultProps = {
  stat3Description: 'Devices repaired',
  stat1: '95%',
  stat3: '5000+',
  stat4: '24/7',
  image1Alt: 'Stats Image',
  stat1Description: 'Customer satisfaction rate',
  content1: 'Customer Feedback',
  stat4Description: 'Support availability',
  stat2: '500+',
  stat2Description: 'Successful IT solutions provided',
  content2:
    'Business improvements emphasized with numbers to increase creadibility',
  heading1: 'Our Stats',
  rootClassName: '',
  image1Src:
    'https://images.unsplash.com/photo-1713946598605-77978a208bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM4MDY4OHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Stats1.propTypes = {
  stat3Description: PropTypes.string,
  stat1: PropTypes.string,
  stat3: PropTypes.string,
  stat4: PropTypes.string,
  image1Alt: PropTypes.string,
  stat1Description: PropTypes.string,
  content1: PropTypes.string,
  stat4Description: PropTypes.string,
  stat2: PropTypes.string,
  stat2Description: PropTypes.string,
  content2: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Stats1
