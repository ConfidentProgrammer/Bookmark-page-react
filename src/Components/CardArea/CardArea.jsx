import React from 'react'
import Card from '../Card/Card'
import './CardArea.css'
function CardArea() {
  return (
    <div className='card-area-container'>
         <div className="hero-desc-container t-container">
        <p className="hero-desc-title t-title">
            Bookmark in one click
        </p>
        <p className="desc-para book-para">
        Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites
        <br/>

        </p>

        </div>
        <Card name='../../Images/logo-chrome.svg' Title="Add to Chrome" desc="Minimum Version 62"/>
        <Card name='../../Images/logo-firefox.svg' Title="Add to Firefox" desc="Minimum Version 55"/>
        <Card name='../../Images/logo-opera.svg' Title="Add to Opera" desc="Minimum Version 46"/>
    
    </div>
  )
}

export default CardArea