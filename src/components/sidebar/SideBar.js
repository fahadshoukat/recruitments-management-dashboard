import React from 'react'
import './sideBar.css'
import logo from "../../images/logo.png";
import basket from "../../images/basket.png";
import carton from "../../images/Illustration.png"

const SideBar = () => {
  return (
    <div className="container sideBar text-light">
      <div className="row">
        <div className="col">
          <div>
            <img src={ logo } alt="logo" />
            <div className='d-flex justify-content-center'>
              <img src={ basket } alt="basket-logo" />
              <span>My Recruitment</span>
            </div>
          </div>
          <div className='sidebar-footer'>
            <div className='line'></div>
            <img className='carton' src={ carton } alt="carton-img" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar