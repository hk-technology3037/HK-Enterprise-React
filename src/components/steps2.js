import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              At HK Enterprise, we specialize in comprehensive IT solutions
              tailored to your needs. Whether it&apos;s repairing computers and
              laptops, server installation and maintenance, or designing and
              managing robust network infrastructures, we&apos;ve got you
              covered. Our services also include advanced firewall and NAS
              solutions, ensuring your data remains secure and accessible.
              Partner with us for reliable, efficient, and professional tech
              support.
            </p>
            <div className="steps2-actions">
              <button className="thq-button-animated thq-button-filled steps2-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps2-text14 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps2-text15 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span>
                {props.text ?? (
                  <Fragment>
                    <span className="steps2-text25 thq-body-small">
                      <span>
                        Optimize your connectivity with our expert networking
                        solutions. From design to maintenance, we ensure a
                        seamless, secure, and high-performing network
                        infrastructure.
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text18 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps2-text20 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps2-text21 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps2-text23 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps2-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step3Title: 'Server Establishment and Maintenance',
  step3Description:
    'We provide reliable server establishment and maintenance services to optimize your business operations. From setup to ongoing support, we ensure your servers run smoothly and securely.',
  step1Title: 'Computer and Laptop Repair Services',
  step4Title: 'Security Solutions',
  step1Description:
    'Fast and reliable computer and laptop repair services to get your devices running smoothly. From hardware fixes to software troubleshooting, we’ve got the expertise to solve all your tech issues.',
  text: undefined,
  step4Description:
    'We offer advanced firewall, NAS, and network security solutions to safeguard your data and ensure seamless protection against cyber threats. Trust us to secure your digital environment.',
  step2Title: 'Networking Solutions',
}

Steps2.propTypes = {
  step3Title: PropTypes.string,
  step3Description: PropTypes.string,
  step1Title: PropTypes.string,
  step4Title: PropTypes.string,
  step1Description: PropTypes.string,
  text: PropTypes.element,
  step4Description: PropTypes.string,
  step2Title: PropTypes.string,
}

export default Steps2
