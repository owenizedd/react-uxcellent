import React, { useState, useEffect } from 'react'
import { PageHeader, Menu, Button, Typography } from 'antd'
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
        <section style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '50px 100px 0 100px'}}>
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
      </main>
    </div>
  )
}

export default App
