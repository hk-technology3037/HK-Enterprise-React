import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavigationBar from '../components/navigation-bar'
import Hero2 from '../components/hero2'
import Stats1 from '../components/stats1'
import Testimonial16 from '../components/testimonial16'
import Features23 from '../components/features23'
import Team3 from '../components/team3'
import Footer4 from '../components/footer4'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - HK Enterprise</title>
        <meta property="og:title" content="About - HK Enterprise" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/45adf276-686d-49b8-9db0-804e3ed8ed51/67ab2f11-c745-4578-8d7d-167af438da30?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <NavigationBar
        link1="Home"
        link2="Services"
        link3="About"
        link4="Contact"
        action1="Begin Now"
        logoAlt="HK Enterprise IT Solutions"
      ></NavigationBar>
      <Hero2 image1Src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fGNvbXB1dGVyfGVufDB8fHx8MTcyMTM4MDczM3ww&amp;ixlib=rb-4.0.3&amp;h=1500"></Hero2>
      <Stats1 rootClassName="stats1root-class-name"></Stats1>
      <Testimonial16
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
      ></Testimonial16>
      <Features23
        text={
          <Fragment>
            <span className="about-text1 thq-body-small">
              <br></br>
              <span>
                At HK Enterprise, we offer a range of key features designed to
                elevate your business operations. Our expert team specializes in
                seamless computer and laptop repairs, ensuring minimal downtime.
                We provide reliable server installation and maintenance,
                tailored to your specific needs, while our network design and
                management services create a solid foundation for your
                operations. Additionally, our advanced firewall and NAS
                solutions offer robust security, keeping your data safe from
                potential threats. With a focus on quality, efficiency, and
                customer satisfaction, we are committed to delivering
                exceptional IT solutions.
              </span>
            </span>
          </Fragment>
        }
      ></Features23>
      <Team3 content3="Join our team and make an impact in the IT world with HK Enterprise"></Team3>
      <Footer4></Footer4>
    </div>
  )
}

export default About
