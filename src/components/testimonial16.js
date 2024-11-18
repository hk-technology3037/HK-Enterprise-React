import React from 'react'

import PropTypes from 'prop-types'

import './testimonial16.css'

const Testimonial16 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial16-max-width thq-section-max-width">
        <div className="testimonial16-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial16-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="testimonial16-container12 thq-card">
            <div className="testimonial16-container13">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial16-image1"
              />
              <div className="testimonial16-container14">
                <strong className="thq-body-large">{props.author1Name}</strong>
                <span className="thq-body-small">{props.author1Position}</span>
              </div>
            </div>
            <span className="testimonial16-text14 thq-body-small">
              {props.review1}
            </span>
          </div>
          <div className="testimonial16-container15 thq-card">
            <div className="testimonial16-container16">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial16-image2"
              />
              <div className="testimonial16-container17">
                <strong className="thq-body-large">{props.author2Name}</strong>
                <span className="thq-body-small">{props.author2Position}</span>
              </div>
            </div>
            <span className="testimonial16-text17 thq-body-small">
              {props.review2}
            </span>
          </div>
          <div className="testimonial16-container18 thq-card">
            <div className="testimonial16-container19">
              <img
                alt={props.author3Alt}
                src={props.author3Src}
                className="testimonial16-image3"
              />
              <div className="testimonial16-container20">
                <strong className="thq-body-large">{props.author3Name}</strong>
                <span className="thq-body-small">{props.author3Position}</span>
              </div>
            </div>
            <span className="testimonial16-text20 thq-body-small">
              {props.review3}
            </span>
          </div>
          <div className="testimonial16-container21 thq-card">
            <div className="testimonial16-container22">
              <img
                alt={props.author4Alt}
                src={props.author4Src}
                className="testimonial16-image4"
              />
              <div className="testimonial16-container23">
                <strong className="thq-body-large">{props.author4Name}</strong>
                <span className="thq-body-small">{props.author4Position}</span>
              </div>
            </div>
            <span className="testimonial16-text23 thq-body-small">
              {props.review4}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial16.defaultProps = {
  heading1: 'Testimonials',
  author1Name: 'John Smith',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  author1Alt: 'image',
  author3Name: 'Michael Lee',
  review1:
    "HK Enterprise provided excellent service for our company's network setup. Their team was professional and efficient.",
  author4Src:
    'https://images.unsplash.com/photo-1519336555923-59661f41bb45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM4MDY4OHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'image',
  author3Position: 'IT Manager at XYZ Corp.',
  review2:
    'I had my laptop repaired by HK Enterprise, and I was impressed by their quick turnaround time and reasonable pricing.',
  author2Src:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM4MDY4OHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: 'Emily Chen',
  author3Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM4MDY4OXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Src:
    'https://images.unsplash.com/photo-1422544834386-d121ef7c6ea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM4MDY4OXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: 'CEO at ABC Inc.',
  review3:
    'HK Enterprise helped us enhance our server security measures, and we have had no issues since then. Highly recommended!',
  review4:
    'Their networking solutions have significantly improved our office connectivity. Great job by the HK Enterprise team!',
  author2Position: 'Freelance Graphic Designer',
  author2Alt: 'image',
  author4Alt: 'image',
  author4Position: 'Operations Manager at LMN Company',
  author2Name: 'Sarah Johnson',
}

Testimonial16.propTypes = {
  heading1: PropTypes.string,
  author1Name: PropTypes.string,
  content1: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Name: PropTypes.string,
  review1: PropTypes.string,
  author4Src: PropTypes.string,
  author3Alt: PropTypes.string,
  author3Position: PropTypes.string,
  review2: PropTypes.string,
  author2Src: PropTypes.string,
  author4Name: PropTypes.string,
  author3Src: PropTypes.string,
  author1Src: PropTypes.string,
  author1Position: PropTypes.string,
  review3: PropTypes.string,
  review4: PropTypes.string,
  author2Position: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author4Position: PropTypes.string,
  author2Name: PropTypes.string,
}

export default Testimonial16
