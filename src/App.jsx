import React, { useState, useEffect } from 'react'
import { PageHeader, Menu, Button, Typography } from 'antd'
import BenefitBox from './components/BenefitBox';
import 'antd/dist/antd.css';
import './App.css'

function App() {
  const [ eventName, setEventName ] = useState('Eventssss');
  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setEventName(data.results[0].name.first)
      })
  }, [])

  return (
    <div className="App">
      <div className="page-header">
        <PageHeader
          className="site-page-header"
          title="UXCellent"
          avatar="https://via.placeholder.com/35"
          extra={
            [
              <div style={{display: 'flex', alignItems: 'center'}}>
                <Menu mode="horizontal">
                  <Menu.Item>
                    <a href="#">
                      Home
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a href="#" >
                      Academy
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a href="#">
                      Webinar
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a href="#" >
                      <b>Digital Product Development Conference</b>
                    </a>
                  </Menu.Item>
                </Menu>
                <Button type="primary" style={{marginLeft: '100px'}}>Masuk</Button>
              </div>
            ]
          }
          style={{ boxShadow: '0px 5px 5px #ddd'}}
        />
      </div>
      <main>
        <section className="section-text-image">
          <div className="section-content">
            <Typography.Title>DIGITAL PRODUCT<br/>DEVELOPMENT CONFERENCE</Typography.Title>
            <Typography.Paragraph>Engaging minds, empowering success. Event Name: {eventName}</Typography.Paragraph>
            <Button type="primary">Join Us</Button>
          </div>
          <img src="https://via.placeholder.com/300"/>
        </section>
        <section style={{padding: '50px 250px 0 250px'}}>
          <Typography.Title style={{textAlign: 'center'}}>OUR GOAL</Typography.Title>
          <Typography.Paragraph style={{fontSize: '16px'}}>
            New products often appear but breakthroughs that have a positive impact on people's lives are rare.
            <br/>
            <br/>

            Building an impactful event isn't just about getting bigger and better on the surface. create outcome-oriented product, develop 
            the possibilities, and achieve whatever results you dream of.  
            <br/>
            <br/>

            UXCellent Digital Product Development Conference will bring together the brightest minds behind successful companies and 
            teach you how to do it right.  
          </Typography.Paragraph>
        </section>
        <section className="section-text-image">
          <img src="https://via.placeholder.com/300"/>
          <div className="section-content">
            <Typography.Title className="text-center">ABOUT THIS EVENT</Typography.Title>
            <Typography.Paragraph className="padding-left-5">This event is open from December 1st 2021 - January 10th 2022. All of selected participants will be 
given exclusive workshop, webinar and mentoring to develop their products. They will be given the 
opportunity to attract the judges. They also be given tools and resources to create 
outcome-oriented product. Showcase will be scheduled in main event.</Typography.Paragraph>
          </div>
        </section>
        <section style={{padding: '50px 200px 75px 200px', backgroundColor: '#F2F2F2'}}>
          <Typography.Title style={{textAlign: 'center'}}>WHO SHOULD ATTEND?</Typography.Title>
          <div className="roles">
            <div>PRODUCT LEADERS</div>
            <div>PRODUCT MANAGERS</div>
            <div>PRODUCT ENGINEERS</div>
            <div>PRODUCT MARKETERS</div>
            <div>DATA ANALYSTS</div>
            <div>PRODUCT ENTHUSIASTS</div>
          </div>
        </section>
        <section style={{padding: '0px 200px 75px 200px'}}>
          <Typography.Title style={{textAlign: 'center'}}>WHY SHOULD ATTEND?</Typography.Title>
          <div className="benefits">
            <BenefitBox imageUrl="https://via.placeholder.com/150" description="Take away 600 minutes of practical content"/>
            <BenefitBox imageUrl="https://via.placeholder.com/150" description="Learn from product leaders of high-growth products"/>
            <BenefitBox imageUrl="https://via.placeholder.com/150" description="Connect with product thinkers around the region"/>
            <BenefitBox imageUrl="https://via.placeholder.com/150" description="Find out best practices on how to build winning products"/>
            <BenefitBox imageUrl="https://via.placeholder.com/150" description="Discover your next product talents"/>
          </div>
        </section>
        <section style={{padding: '50px 200px 75px 200px'}}>
          <Typography.Title style={{textAlign: 'center'}}>AGENDA</Typography.Title>
          <div className="roles half">
            <div>PRODUCT LEADERS</div>
            <div>PRODUCT LEADERS</div>
            <div>PRODUCT LEADERS</div>
            <div>PRODUCT LEADERS</div>
            <div>PRODUCT LEADERS</div>
            <div>PRODUCT LEADERS</div>
          </div>
        </section>
        <section style={{padding: '0px 200px 75px 200px'}}>
          <Typography.Title style={{textAlign: 'center'}}>SPEAKERS</Typography.Title>
          <div className="speakers">
            <BenefitBox imageUrl="https://via.placeholder.com/300" description="Anthony"/>
            <BenefitBox imageUrl="https://via.placeholder.com/300" description="James"/>
            <BenefitBox imageUrl="https://via.placeholder.com/300" description="Bob"/>
          </div>
        </section>
        <section style={{padding: '50px 200px 75px 200px'}}>
          <Typography.Title style={{textAlign: 'center'}}>OUR SPONSORS</Typography.Title>
          <div className="roles half">
            <div>PRODUCT LEADERS</div>
            <div>PRODUCT LEADERS</div>
            <div>PRODUCT LEADERS</div>
            <div>PRODUCT LEADERS</div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
