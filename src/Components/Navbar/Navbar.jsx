import React from 'react'
import './Navbar.css'
import logo from '../../Images/logo-bookmark.svg'
function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-white nav">
  <div class="container-fluid nav-container">
      <img src={logo} className='logo-b' alt="" />
      <div className="con"></div>
    {/* <a class="navbar-brand brand-name" href="#">BOOKMARK</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav-coll" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">FEATURES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">PRICING</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ">CONTACT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link login-btn">LOGIN</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar