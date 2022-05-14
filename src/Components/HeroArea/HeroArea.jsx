import React from 'react'
import './HeroArea.css'
import herobg from '../../Images/illustration-hero.svg'
function HeroArea() {
  return (
    <div className='container-fluid her-c'>
        <div className="row">

            <div className="c1 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="hero-bg">
            <img src={herobg} alt="" className="herobg-photo" />
            <span className='hero-back-poly'>
                
            </span>
        </div>

            </div>
            <div className="c2 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="hero-desc-container">
        <p className="hero-desc-title">
            A Simple Bookmark Manager
        </p>
        <p className="desc-para">
        A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="btn-container">
        <button className='btn btn-primary button chrombtn'>Get it on Chrome</button>
        <button className='btn btn-primary button firefoxbtn'>Get it on Firefox</button>
        </div>
      
            </div>

            </div>

      

   
            </div>
        </div>
  )
}

export default HeroArea