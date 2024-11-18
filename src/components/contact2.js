import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact2.css'

const Contact2 = (props) => {
  return (
    <div className="contact2-contact20 thq-section-padding">
      <div className="contact2-max-width thq-section-max-width">
        <div className="contact2-section-title">
          <span className="thq-body-small">
            {props.content2 ?? (
              <Fragment>
                <span className="contact2-text16">
                  Get in touch with us today!
                </span>
              </Fragment>
            )}
          </span>
          <div className="contact2-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact2-text17">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="contact2-text12 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact2-text27">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="thq-img-ratio-16-9"
        />
        <div className="contact2-row">
          <div className="contact2-content2">
            <a
              href="mailto:contact@hktechnology.in?subject=IT Support Request"
              className="contact2-link1"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="contact2-icon1 thq-icon-medium"
              >
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
            </a>
            <div className="contact2-contact-info1">
              <div className="contact2-content3">
                <h3 className="contact2-text13 thq-heading-3">Email</h3>
              </div>
              <span className="contact2-email thq-body-small">
                {props.email1 ?? (
                  <Fragment>
                    <span className="contact2-text18">
                      Contact@hktechnology.in
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact2-content4">
            <a href="tel:+919913017938" className="contact2-link2">
              <svg
                viewBox="0 0 1024 1024"
                className="contact2-icon3 thq-icon-medium"
              >
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
            </a>
            <div className="contact2-contact-info2">
              <div className="contact2-content5">
                <h3 className="contact2-text14 thq-heading-3">Phone</h3>
              </div>
              <span className="contact2-phone thq-body-small">
                {props.phone1 ?? (
                  <Fragment>
                    <span className="contact2-text26">+91 9913017938</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact2-content6">
            <a
              href="https://maps.app.goo.gl/AoUYYEFJX5H1q9Jk8"
              target="_blank"
              rel="noreferrer noopener"
              className="contact2-link3"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="contact2-icon5 thq-icon-medium"
              >
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
            </a>
            <div className="contact2-contact-info3">
              <div className="contact2-content7">
                <h3 className="contact2-text15 thq-heading-3">Office</h3>
              </div>
              <span className="contact2-address thq-body-small">
                {props.address1 ?? (
                  <Fragment>
                    <span className="contact2-text19">
                      <span>3037, International Fashion Market,</span>
                      <br></br>
                      <span>Sitanagar to Canal Road,</span>
                      <br></br>
                      <span>Punagam, Surat – 395010</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact2.defaultProps = {
  imageAlt: 'image',
  content2: undefined,
  heading1: undefined,
  imageSrc:
    'https://images.unsplash.com/photo-1721116858340-d955652c2fc8?ixid=M3w5MTMyMXwwfDF8YWxsfDIzfHx8fHx8Mnx8MTcyMTE0NDMwMHw&ixlib=rb-4.0.3&w=1400',
  email1: undefined,
  address1: undefined,
  phone1: undefined,
  content1: undefined,
}

Contact2.propTypes = {
  imageAlt: PropTypes.string,
  content2: PropTypes.element,
  heading1: PropTypes.element,
  imageSrc: PropTypes.string,
  email1: PropTypes.element,
  address1: PropTypes.element,
  phone1: PropTypes.element,
  content1: PropTypes.element,
}

export default Contact2
