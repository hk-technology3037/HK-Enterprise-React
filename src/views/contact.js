import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavigationBar from '../components/navigation-bar'
import Contact2 from '../components/contact2'
import Logos1 from '../components/logos1'
import Stats2 from '../components/stats2'
import Footer4 from '../components/footer4'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - HK Enterprise</title>
        <meta property="og:title" content="Contact - HK Enterprise" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/45adf276-686d-49b8-9db0-804e3ed8ed51/67ab2f11-c745-4578-8d7d-167af438da30?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <NavigationBar
        action1="Begin Now"
        logoAlt="HK Enterprise IT Solutions"
      ></NavigationBar>
      <Contact2
        email1={
          <Fragment>
            <span className="contact-text10">Contact@hktechnology.in</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="contact-text11">+91 9913017938</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="contact-text12">
              <span>3037, International Fashion Market,</span>
              <br></br>
              <span>Sitanagar to Canal Road,</span>
              <br></br>
              <span>Punagam, Surat – 395010</span>
              <br></br>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text19">
              Get in touch with HK Enterprise today for expert IT solutions and
              support.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text20">Get in touch with us today!</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text21">Contact Us</span>
          </Fragment>
        }
        imageSrc="/contact-1400w.jpg"
      ></Contact2>
      <Logos1
        heading1={
          <Fragment>
            <span className="contact-text22">
              Trusted by the world&apos;s best companies social proof to build
              credibility
            </span>
          </Fragment>
        }
        rootClassName="logos1root-class-name"
      ></Logos1>
      <Stats2
        stat1={
          <Fragment>
            <span className="contact-text23">Years of Experience</span>
          </Fragment>
        }
        stat2={
          <Fragment>
            <span className="contact-text24">80+</span>
          </Fragment>
        }
        stat3={
          <Fragment>
            <span className="contact-text25">Customer Satisfaction Rate</span>
          </Fragment>
        }
        stat4={
          <Fragment>
            <span className="contact-text26">Services Offered</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text27">10+ years</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text28">10+</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text29">Company Stats</span>
          </Fragment>
        }
        stat1Description={
          <Fragment>
            <span className="contact-text30">Industry Experience</span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="contact-text31">Number of Satisfied Clients</span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="contact-text32">Positive Feedback</span>
          </Fragment>
        }
        stat4Description={
          <Fragment>
            <span className="contact-text33">Range of IT Services</span>
          </Fragment>
        }
      ></Stats2>
      <Footer4></Footer4>
    </div>
  )
}

export default Contact
