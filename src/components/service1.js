import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './service1.css'

const Service1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div id="Services" className="thq-section-padding Content">
      <div className="service1-container2 thq-section-max-width">
        <div className="service1-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="service1-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="service1-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="service1-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="service1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="service1-tab-horizontal1"
          >
            <div className="service1-divider-container1">
              {activeTab === 0 && <div className="service1-container3"></div>}
            </div>
            <div className="service1-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="service1-tab-horizontal2"
          >
            <div className="service1-divider-container2">
              {activeTab === 1 && <div className="service1-container4"></div>}
            </div>
            <div className="service1-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="service1-tab-horizontal3"
          >
            <div className="service1-divider-container3">
              {activeTab === 2 && <div className="service1-container5"></div>}
            </div>
            <div className="service1-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Service1.defaultProps = {
  feature1ImgSrc: '/what-is-nas-1400w.jpg',
  feature1Title: 'NAS And Cloud Storage Solution',
  feature2ImgAlt: 'Networking Solutions Image',
  feature3Title: 'Server Establishment and Maintenance',
  feature2ImgSrc: '/selecting-network-switch-1400w.png',
  feature3Description:
    'Specialized services for setting up and maintaining servers to support your business operations.',
  feature1Description:
    'Secure, scalable NAS and cloud storage solutions tailored to your business needs—ensuring seamless access, data protection, and efficient management.',
  feature1ImgAlt: 'Computer and Laptop Repair Image',
  feature2Title: 'Networking Solutions',
  feature3ImgAlt: 'Server Establishment and Maintenance Image',
  feature2Description:
    'Professional networking solutions to enhance connectivity and efficiency within your IT infrastructure.',
  feature3ImgSrc: '/server-image-1-1400w.png',
}

Service1.propTypes = {
  feature1ImgSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
}

export default Service1
