import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-bar.css'

const NavigationBar = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  return (
    <header className="navigation-bar-container1">
      <header
        data-thq="thq-navbar"
        className="navigation-bar-navbar-interactive"
      >
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navigation-bar-image1"
        />
        <div data-thq="thq-navbar-nav" className="navigation-bar-desktop-menu">
          <nav className="navigation-bar-links1">
            <Link
              to="/"
              className="navigation-bar-link21 thq-body-small thq-link"
            >
              {props.link1}
            </Link>
            <a
              href="#Services"
              className="navigation-bar-link31 thq-body-small thq-link"
            >
              {props.link2}
            </a>
            <Link
              to="/about"
              className="navigation-bar-link41 thq-body-small thq-link"
            >
              {props.link3}
            </Link>
            <Link
              to="/contact"
              className="navigation-bar-link42 thq-body-small thq-link"
            >
              {props.link4}
            </Link>
          </nav>
          <div className="navigation-bar-buttons1">
            <a
              href="https://www.instagram.com/hkenterprisetechnology?igsh=MXRxNmJtZmk3bDJ6eg=="
              target="_blank"
              rel="noreferrer noopener"
              className="navigation-bar-link1"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="navigation-bar-icon10"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=%2B919913017938&amp;context=ARAtkv5xDFn-fMhikP6aHpbwvXQn2D8WxQCl3gFfyVJcYhY6FGb8jzbcn-WMmb3HJ_4m-MiuqkRLB5VWYJIZL8tk1QzWCxpAS-3-wlM1ADqsDSYqImJegLaIEvI0kQBBvQexHOoPcq6Yuq4TaEl6n3PjaQ&amp;source=FB_Page&amp;app=facebook&amp;entry_point=page_cta&amp;sfnsn=wiwspmo"
              target="_blank"
              rel="noreferrer noopener"
              className="navigation-bar-link6"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="navigation-bar-icon12"
              >
                <path d="M562.857 556.571c9.714 0 102.857 48.571 106.857 55.429 1.143 2.857 1.143 6.286 1.143 8.571 0 14.286-4.571 30.286-9.714 43.429-13.143 32-66.286 52.571-98.857 52.571-27.429 0-84-24-108.571-35.429-81.714-37.143-132.571-100.571-181.714-173.143-21.714-32-41.143-71.429-40.571-110.857v-4.571c1.143-37.714 14.857-64.571 42.286-90.286 8.571-8 17.714-12.571 29.714-12.571 6.857 0 13.714 1.714 21.143 1.714 15.429 0 18.286 4.571 24 19.429 4 9.714 33.143 87.429 33.143 93.143 0 21.714-39.429 46.286-39.429 59.429 0 2.857 1.143 5.714 2.857 8.571 12.571 26.857 36.571 57.714 58.286 78.286 26.286 25.143 54.286 41.714 86.286 57.714 4 2.286 8 4 12.571 4 17.143 0 45.714-55.429 60.571-55.429zM446.857 859.429c197.714 0 358.857-161.143 358.857-358.857s-161.143-358.857-358.857-358.857-358.857 161.143-358.857 358.857c0 75.429 24 149.143 68.571 210.286l-45.143 133.143 138.286-44c58.286 38.286 127.429 59.429 197.143 59.429zM446.857 69.714c237.714 0 430.857 193.143 430.857 430.857s-193.143 430.857-430.857 430.857c-72.571 0-144.571-18.286-208.571-53.714l-238.286 76.571 77.714-231.429c-40.571-66.857-61.714-144-61.714-222.286 0-237.714 193.143-430.857 430.857-430.857z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/HKEnterpriseTechnology?mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer noopener"
              className="navigation-bar-link7"
            >
              <svg viewBox="0 0 1024 1024" className="navigation-bar-icon14">
                <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navigation-bar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navigation-bar-icon16">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navigation-bar-mobile-menu">
          <div className="navigation-bar-nav">
            <div className="navigation-bar-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navigation-bar-logo"
              />
              <div
                data-thq="thq-close-menu"
                className="navigation-bar-close-menu"
              >
                <svg viewBox="0 0 1024 1024" className="navigation-bar-icon18">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navigation-bar-links2">
              <span className="thq-body-small thq-link">{props.link1}</span>
              <span className="thq-body-small thq-link">{props.link2}</span>
              <span className="thq-body-small thq-link">{props.link3}</span>
              <div className="navigation-bar-link5-accordion">
                <div
                  onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                  className="navigation-bar-trigger"
                >
                  <span className="thq-body-small thq-link">contact</span>
                  <div className="navigation-bar-icon-container">
                    {link5AccordionOpen && (
                      <div className="navigation-bar-container2">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="navigation-bar-icon20"
                        >
                          <path d="M298 426h428l-214 214z"></path>
                        </svg>
                      </div>
                    )}
                    {!link5AccordionOpen && (
                      <div className="navigation-bar-container3">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="navigation-bar-icon22"
                        >
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {link5AccordionOpen && (
                  <div className="navigation-bar-container4">
                    <div className="navigation-bar-menu-item1">
                      <img
                        alt={props.page1ImageAlt}
                        src={props.page1ImageSrc}
                        className="navigation-bar-page1-image1"
                      />
                      <div className="navigation-bar-content1">
                        <span className="navigation-bar-page11 thq-body-large">
                          {props.page1}
                        </span>
                        <span className="thq-body-small">
                          {props.page1Description}
                        </span>
                      </div>
                    </div>
                    <div className="navigation-bar-menu-item2">
                      <img
                        alt={props.page2ImageAlt}
                        src={props.page2ImageSrc}
                        className="navigation-bar-page2-image1"
                      />
                      <div className="navigation-bar-content2">
                        <span className="navigation-bar-page21 thq-body-large">
                          {props.page2}
                        </span>
                        <span className="thq-body-small">
                          {props.page2Description}
                        </span>
                      </div>
                    </div>
                    <div className="navigation-bar-menu-item3">
                      <img
                        alt={props.page3ImageAlt}
                        src={props.page3ImageSrc}
                        className="navigation-bar-page3-image1"
                      />
                      <div className="navigation-bar-content3">
                        <span className="navigation-bar-page31 thq-body-large">
                          {props.page3}
                        </span>
                        <span className="thq-body-small">
                          {props.page3Description}
                        </span>
                      </div>
                    </div>
                    <div className="navigation-bar-menu-item4">
                      <img
                        alt={props.page4ImageAlt}
                        src={props.page4ImageSrc}
                        className="navigation-bar-page4-image1"
                      />
                      <div className="navigation-bar-content4">
                        <span className="navigation-bar-page41 thq-body-large">
                          {props.page4}
                        </span>
                        <span className="thq-body-small">
                          {props.page4Description}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
            <div className="navigation-bar-buttons2">
              <button className="thq-button-filled">{props.action1}</button>
              <button className="thq-button-outline">{props.action2}</button>
            </div>
          </div>
          <div className="navigation-bar-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="thq-icon-x-small"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="thq-icon-x-small"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="thq-icon-small"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        {link5DropdownVisible && (
          <div className="navigation-bar-container5 thq-box-shadow">
            <div className="navigation-bar-link5-menu-list">
              <div className="navigation-bar-menu-item5">
                <img
                  alt={props.page1ImageAlt}
                  src={props.page1ImageSrc}
                  className="navigation-bar-page1-image2 thq-img-ratio-1-1"
                />
                <div className="navigation-bar-content5">
                  <span className="navigation-bar-page12 thq-body-large">
                    {props.page1}
                  </span>
                  <span className="thq-body-small">
                    {props.page1Description}
                  </span>
                </div>
              </div>
              <div className="navigation-bar-menu-item6">
                <img
                  alt={props.page2ImageAlt}
                  src={props.page2ImageSrc}
                  className="navigation-bar-page2-image2 thq-img-ratio-1-1"
                />
                <div className="navigation-bar-content6">
                  <span className="navigation-bar-page22 thq-body-large">
                    {props.page2}
                  </span>
                  <span className="thq-body-small">
                    {props.page2Description}
                  </span>
                </div>
              </div>
              <div className="navigation-bar-menu-item7">
                <img
                  alt={props.page3ImageAlt}
                  src={props.page3ImageSrc}
                  className="navigation-bar-page3-image2 thq-img-ratio-1-1"
                />
                <div className="navigation-bar-content7">
                  <span className="navigation-bar-page32 thq-body-large">
                    {props.page3}
                  </span>
                  <span className="thq-body-small">
                    {props.page3Description}
                  </span>
                </div>
              </div>
              <div className="navigation-bar-menu-item8">
                <img
                  alt={props.page4ImageAlt}
                  src={props.page4ImageSrc}
                  className="navigation-bar-page4-image2 thq-img-ratio-1-1"
                />
                <div className="navigation-bar-content8">
                  <span className="navigation-bar-page42 thq-body-large">
                    {props.page4}
                  </span>
                  <span className="thq-body-small">
                    {props.page4Description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      {link5DropdownVisible && (
        <div
          onClick={() => setLink5DropdownVisible(false)}
          className="navigation-bar-container6"
        ></div>
      )}
    </header>
  )
}

NavigationBar.defaultProps = {
  page1ImageAlt: 'Home Image',
  page1: 'Home',
  action2: 'Contact Us',
  page1Description: 'Welcome to HK Enterprise - Your IT Solutions Provider',
  page2ImageAlt: 'Services Image',
  page4Description:
    'Get in touch with us for all your IT needs. We are here to help!',
  link1: 'Home',
  page3: 'About Us',
  page2Description:
    'Explore our range of IT services including computer and laptop repair, networking solutions, server setup and maintenance, and more.',
  link2: 'Services',
  page4ImageAlt: 'Contact Image',
  page1ImageSrc:
    'https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTEzNDAxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  page3Description:
    'Learn about HK Enterprise - Who we are, our mission, and our commitment to providing top-notch IT services.',
  page2ImageSrc:
    'https://images.unsplash.com/photo-1637182981482-0ec10a0ccaf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTEzNDAxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  page4ImageSrc:
    'https://images.unsplash.com/photo-1544216291-b1dc4f7c8735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTEzNDAxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  link4: 'Contact',
  page2: 'Services',
  page4: 'Contact',
  action1: 'Get Started',
  logoAlt: 'HK Enterprise Logo',
  link3: 'About',
  page3ImageAlt: 'About Us Image',
  logoSrc: '/hk2-1400w.png',
  page3ImageSrc:
    'https://images.unsplash.com/photo-1677828140163-2ae7029a6d77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTEzNDAxNXw&ixlib=rb-4.0.3&q=80&w=1080',
}

NavigationBar.propTypes = {
  page1ImageAlt: PropTypes.string,
  page1: PropTypes.string,
  action2: PropTypes.string,
  page1Description: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  page4Description: PropTypes.string,
  link1: PropTypes.string,
  page3: PropTypes.string,
  page2Description: PropTypes.string,
  link2: PropTypes.string,
  page4ImageAlt: PropTypes.string,
  page1ImageSrc: PropTypes.string,
  page3Description: PropTypes.string,
  page2ImageSrc: PropTypes.string,
  page4ImageSrc: PropTypes.string,
  link4: PropTypes.string,
  page2: PropTypes.string,
  page4: PropTypes.string,
  action1: PropTypes.string,
  logoAlt: PropTypes.string,
  link3: PropTypes.string,
  page3ImageAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  page3ImageSrc: PropTypes.string,
}

export default NavigationBar
