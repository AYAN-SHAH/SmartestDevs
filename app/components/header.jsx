"use client";
import React from 'react'
import Link from 'next/link'
import  { useState } from "react";
import { Container } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const header = () => {

const [hoveredLink, setHoveredLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    
    <header id="myheader" className="custom-dropdown">
    <div id="header-wrap">
      <div className="container clearfix d-inline-block">
        <div id="logo">
          <Link href="/" className="standard-logo">
            <img src="/template/sd-logo.png" alt="Smartest Developers Logo" style={{ height: "48px" }} />
          </Link>
          <Link href="/" className="retina-logo">
            <img src="/template/sd-logo.png" alt="Smartest Developers Logo" />
          </Link>
        </div>
        <Link href="#0" className="nav-trigger">
          Open Nav<span aria-hidden="true" />
        </Link>
        <nav id="primary-menu" className="main-nav">
          <ul>
            <li id="liHome">
              <Link href="/"><div>Home</div></Link>
            </li>
            <li id="BusinessSuites" className="has-dropdown gallery" data-content="businesssuite">
              <Link href="/products"><div>Products</div></Link>
            </li>
            <li id="liServices" className="has-dropdown gallery" data-content="services">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" variant="secondary">
                  Services
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li id="liSolutions" className="has-dropdown gallery" data-content="solutions">
              <Link href="/solutions"><div>Solutions</div></Link>
            </li>
            <li id="liCareers">
              <Link href="/careers"><div>Careers</div></Link>
            </li>
            <li id="liContactUs">
              <Link href="/contact-us"><div>Contact Us</div></Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
 
  )
}

export default header