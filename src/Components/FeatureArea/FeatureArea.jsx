import React from 'react'
import herobg from '../../Images/illustration-features-tab-1.svg'
import './FeatureArea.css'
function FeatureArea() {
  return (
    <div className='container-fluid'>
        <div className="hero-desc-container f-desc-container">
        <p className="hero-desc-title features-title">
            Features
        </p>
        <p className="desc-para feature-para">
        Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
        </p>
        <div className="tab-container">
            <p className="tab-item f">Simple Bookmarking</p>
            <p className="tab-item s">Speedy Searching</p>
            <p className="tab-item t">Easy Sharing</p>
        </div>

<div className="tab-flex-container">

  <div className="cl-1">
  <div className="hero-bg f-photo-c">
              <img src={herobg} alt="" className="herobg-photo f-photo" />
            {/* <span className='hero-back-poly pl'>
            </span> */}
        </div>
  </div>
  <div className="cl-2">
  <div className="hero-desc-container s-container">
        <p className="hero-desc-title tab-title">
            Bookmark in one click
        </p>
        <p className="desc-para tab-para">
        Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites
        <br/>
        <button className=' btn button chrombtn mx-auto' style={{color:'white', marginTop:'2rem'}}>More Info</button>
        </p>

        </div>
  </div>
</div>

       
        
      </div>
    </div>
  )
}

export default FeatureArea