import React from 'react'
import './Card.css'
import chrome from '../../Images/logo-chrome.svg'
import firefox from '../../Images/logo-firefox.svg'
import opera from '../../Images/logo-opera.svg'
import dot from '../../Images/bg-dots.svg'
function Card({name, Title, desc}) {
  return (
    <div className='card-container'>
        <img className='logo' src={name} alt="" />
        <p className="title">{Title}</p>
        <p className="desc">{desc}</p>
        <img className='mt-4 dot' src={dot} alt="" />
        <button className='btn button chrombtn ext-btn'> Add & Install Extension</button>
    </div>
  )
}

export default Card