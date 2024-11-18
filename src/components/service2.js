import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './service2.css'

const Service2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="service2-container2 thq-section-max-width">
        <div className="service2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="service2-tab-horizontal1"
          >
            <div className="service2-divider-container1">
              {activeTab === 0 && <div className="service2-container3"></div>}
            </div>
            <div className="service2-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="service2-tab-horizontal2"
          >
            <div className="service2-divider-container2">
              {activeTab === 1 && <div className="service2-container4"></div>}
            </div>
            <div className="service2-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="service2-tab-horizontal3"
          >
            <div className="service2-divider-container3">
              {activeTab === 2 && <div className="service2-container5"></div>}
            </div>
            <div className="service2-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="service2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="service2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="service2-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="service2-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Service2.defaultProps = {
  feature1ImgAlt: 'Computer and Laptop Repair Image',
  feature2Title: 'CCTV Complete Solution',
  feature3Description:
    "Protect your business with HK Enterprise's advanced network security and Data Loss Prevention solutions, ensuring your sensitive information stays safe from threats.",
  feature2ImgAlt: 'Networking Solutions Image',
  feature1ImgSrc: '/imac-3-1400w.jpeg',
  feature3ImgAlt: 'Server Establishment and Maintenance Image',
  feature2ImgSrc: '/h1a4718-1400w.jpg',
  feature1Description:
    'Expert repair services for all types of computers and laptops, ensuring optimal performance.',
  feature2Description:
    'Secure your space with our complete CCTV solutions. We offer expert installation, configuration, and maintenance for reliable  surveillance.',
  feature1Title: 'Computer and Laptop Repair And Sell',
  feature3Title: 'Network Security And DLP',
  feature3ImgSrc: '/data-loss-prevention-dlp-1400w.png',
}

Service2.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
}

export default Service2
