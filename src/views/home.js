import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavigationBar from '../components/navigation-bar'
import Hero17 from '../components/hero17'
import Service2 from '../components/service2'
import CTA26 from '../components/cta26'
import Service1 from '../components/service1'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import ContactUS from '../components/contact-us'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div id="Home" className="home-container">
      <Helmet>
        <title>HK Enterprise</title>
        <meta property="og:title" content="HK Enterprise" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/45adf276-686d-49b8-9db0-804e3ed8ed51/67ab2f11-c745-4578-8d7d-167af438da30?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <NavigationBar
        link2="Services"
        action1="Begin Now"
        logoAlt="HK Enterprise IT Solutions"
      ></NavigationBar>
      <Hero17
        content1="Your go-to destination for comprehensive IT solutions. Whether you need computer or laptop repairs, networking solutions, or server setup and maintenance, we have the expertise to meet all your requirements."
        image1Src="https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxDT01QVVRFUlN8ZW58MHx8fHwxNzIxMTM0Mjg0fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image2Alt="Network Solutions"
        image2Src="https://images.unsplash.com/photo-1519033628719-72e1861f20cf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxDT01QVVRFUlN8ZW58MHx8fHwxNzIxMTM0Mjg0fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image3Src="https://images.unsplash.com/photo-1599949104055-2d04026aee1e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI4fHxTRVJWRVJ8ZW58MHx8fHwxNzIxMTM0OTA5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image4Src="https://images.unsplash.com/photo-1489436969537-cf0c1dc69cba?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMyfHxTRVJWRVJ8ZW58MHx8fHwxNzIxMTM0OTA5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image5Src="https://images.unsplash.com/photo-1546124404-9e7e3cac2ec1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMwfHxTRVJWRVJ8ZW58MHx8fHwxNzIxMTM0OTA5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image6Src="https://images.unsplash.com/photo-1551781069-73a1da89e333?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fFBSSU5URVJTfGVufDB8fHx8MTcyMTEzNDM4OXww&amp;ixlib=rb-4.0.3&amp;w=1500"
        image7Src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fFBSSU5URVJTfGVufDB8fHx8MTcyMTEzNDM4OXww&amp;ixlib=rb-4.0.3&amp;w=1500"
        image8Src="https://images.unsplash.com/photo-1591238372408-8b98667c0460?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ4fHxDT01QVVRFUlN8ZW58MHx8fHwxNzIxMTM0Mjg1fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image9Src="https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMyfHxDT01QVVRFUlN8ZW58MHx8fHwxNzIxMTM0Mjg1fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image10Src="https://images.unsplash.com/photo-1627281796892-39e266ee50be?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxDT01QVVRFUlN8ZW58MHx8fHwxNzIxMTM0Mjg0fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image11Src="https://images.unsplash.com/photo-1495954222046-2c427ecb546d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI3fHxDT01QVVRFUlN8ZW58MHx8fHwxNzIxMTM0Mjg1fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image12Src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fENPTVBVVEVSU3xlbnwwfHx8fDE3MjExMzQyODR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        rootClassName="hero17root-class-name"
      ></Hero17>
      <Service2></Service2>
      <CTA26 rootClassName="cta26root-class-name"></CTA26>
      <Service1></Service1>
      <Pricing14 rootClassName="pricing14root-class-name"></Pricing14>
      <Steps2
        text={
          <Fragment>
            <span className="home-text1 thq-body-small">
              <span>
                Optimize your connectivity with our expert networking solutions.
                From design to maintenance, we ensure a seamless, secure, and
                high-performing network infrastructure.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1="HK Enterprise transformed our server infrastructure with their exceptional expertise. Their team handled the entire server setup and maintenance seamlessly, resulting in improved performance, reliability, and security. We now have a robust, scalable server solution that supports our business growth effortlessly. Highly recommended for anyone seeking professional IT solutions!"
        review2="HK Enterprise exceeded our expectations with their network implementation services. Their team designed and installed a robust, scalable network that significantly improved our connectivity and performance. The project was completed on time, with minimal disruption to our operations, and their ongoing support has been exceptional. We highly recommend HK Enterprise for any business looking for reliable and efficient networking solutions."
        review3="Exceptional service from start to finish! HK Enterprise quickly diagnosed and repaired our laptops, set up a reliable server, and optimized our entire network infrastructure. Their team is professional, knowledgeable, and always goes the extra mile. Their firewall and NAS solutions have greatly enhanced our data security. Highly recommend them for any IT needs!"
        review4="HK Enterprise has been a game-changer for our IT infrastructure. Their expertise in computer and laptop repairs, server installation, and network design is unmatched. They’ve transformed our entire setup with their reliable firewall and NAS solutions, ensuring our data is always secure. The team is professional, responsive, and always ready to go the extra mile. We highly recommend HK Enterprise for any business looking for top-notch IT services"
        content1="HK Enterprise provided excellent service for our company's networking needs. They were professional, efficient, and reliable. I highly recommend their services."
        author1Src="/riffdata%20-%20copy-200h.jpg"
        author2Src="/logo1-1-200h.png"
        author3Src="/logo_footer-200w.png"
        author4Src="/kv-200w.jpg"
        author1Name="Hardik Patel"
        author2Name="Jignesha chaludiya"
        author3Name="Ripin Khatroja"
        author4Name="TARAK"
        author1Position=" Founder, DHPATEL And Co."
        author2Position="CEO, sukharam electrical enterprise"
        author3Position="Founder, RCK"
        author4Position="DIRECTOR, kaushal vidyabhavan"
      ></Testimonial17>
      <ContactUS rootClassName="contact-u-sroot-class-name"></ContactUS>
      <Footer4></Footer4>
    </div>
  )
}

export default Home
