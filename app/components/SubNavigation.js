"use client";
import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";
const MainNavBar = () => {
	const [hoveredLink, setHoveredLink] = useState(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	let timer = null;

	const handleMouseEnter = (link) => {
		clearTimeout(timer); // Clear any existing timeout
		setHoveredLink(link); // Set the hovered link
		setIsMenuOpen(true); // Open the menu immediately
	};

	const handleMouseLeave = () => {
		timer = setTimeout(() => {
			setHoveredLink(null); // Reset hovered link after 2 seconds
			setIsMenuOpen(false); // Close the menu after 2 seconds
		}, 200); // 2-second delay
	};

	return (
		<>
		<div className="container ">
		<Navbar bg="light" expand="lg" className="border-top d-none d-lg-block" style={{ height: "70px" }}>
  <Container>
    <div>
      <Link href="/" className="standard-logo">
        <img src="/template/sd-logo.png" alt="Smartest Developers Logo" style={{ height: "100px" }} />
      </Link>
    </div>
    <div className="font-weight-bold text-dark w-50 d-flex justify-content-between">
      <Nav
        className="me-auto"
        style={{
          margin: "auto",
        }}
      >
        <div style={{ position: "relative" }}>
          <Nav.Link
            onMouseEnter={() => handleMouseEnter("sports")}
            onMouseLeave={handleMouseLeave}
            style={{
              padding: "0 10px",
              fontSize: "13px",
            }}
          >
            Services
          </Nav.Link>
          {hoveredLink === "sports" && (
            <div
              className="submenu bg-danger"
              onMouseEnter={() => handleMouseEnter("sports")}
              onMouseLeave={handleMouseLeave}
              style={{
                position: "absolute",
                top: "100%",
                left: "0",
                minWidth: "200px", // Adjust width as needed
                zIndex: 10,
              }}
            >
              <Container fluid>
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <h6>Sports Categories</h6>
                    <ul>
                      <li>Football</li>
                      <li>Basketball</li>
                      <li>Cricket</li>
                      <li>Baseball</li>
                    </ul>
                  </div>
                  <div className="menu-image">
                    <img src="https://via.placeholder.com/300x150" alt="Sports" className="img-fluid" />
                  </div>
                </div>
              </Container>
            </div>
          )}
        </div>
        {/* Repeat similar structure for other menu items */}
      </Nav>
    </div>
  </Container>
</Navbar>

			

		
			</div>
		</>
	);
};

export default MainNavBar;
