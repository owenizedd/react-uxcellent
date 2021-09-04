import React from 'react'
import {Typography } from 'antd';
function BenefitBox(props){
  /**
   * props === { imageUrl: 'https://via.placeholder.com/150', description = "Take away..."}
   * 
   */
  return (
    <div className="benefit-box">
      <div className="image-wrapper">
        <img src={props.imageUrl}/>
      </div>
      <Typography.Paragraph className="text-center">
        {props.description}
      </Typography.Paragraph>
    </div>
  )
}
export default BenefitBox