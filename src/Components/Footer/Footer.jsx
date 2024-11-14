import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
   <section className="f-wrapper" id='Footer'>
    <div className="paddings innerWidth flexCenter f-container">
        

        {/*left side*/}
        <div className="flexColStart f-left">
            <a href="#hero"><img src="./VistaNest(4).png" alt=""  width={120}/></a>
            

            <span className="secondaryText">
                Our vision is to make all people <br />
                the best place to live for them.
            </span>
        </div>

        <div className="flexColStart f-right">
            <span className='primaryText'>Information</span>
            <span className='secondaryText'>112, Nigerian Railway Compound, Lagos</span>

            <div className="flexCenter f-menu">
                <span><a href="#Residencies">Property</a></span>
                <span><a href="#Value">Services</a></span>
                <span><a href="#Residencies">Product</a></span>
                <span><a href="#Contact">About us</a></span>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Footer