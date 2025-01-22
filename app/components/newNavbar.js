"use client"; // Declare this as a Client Component

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link"; // Import Next.js Link
import styles from "../page.module.css"; // Import custom styles
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import { useRouter } from "next/navigation";
function BasicExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Function to check login status from localStorage
  const checkLoginStatus = () => {
    const token = localStorage.getItem("userToken");
    setIsLoggedIn(!!token); // Update state based on the presence of the token
  };

  useEffect(() => {
    checkLoginStatus(); // Check login status when component mounts
  }, []); // Only run on initial mount

  const handleAuthAction = () => {
    if (isLoggedIn) {
      // If logged in, remove the token and log out
      localStorage.removeItem("userToken");
      setIsLoggedIn(false); // Update state immediately to reflect logout
      router.push("/login"); // Redirect to login page
    } else {
      // If not logged in, redirect to login page
      router.push("/login");
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        className={`bg-body-tertiary navwidth ${styles.stickyNavbar}`}
      >
        <Container>
          {/* Logo positioned on the left */}
          <Navbar.Brand href="/">
            <img
              src="/template/newlogo.jpeg"
              alt="Smartest Developers Logo"
              style={{ height: "48px" }}
            />
          </Navbar.Brand>

          {/* Toggle for responsive behavior */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto font-weight-bold color-dark ml-20">
              <Nav.Link as={Link} href="/">
                HOME
              </Nav.Link>
              <NavDropdown title="PRODUCTS" id="basic-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  href="/products/attendance-management-system"
                >
                  Attendance Management Software
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/products/van-sales-software">
                  Van Sales Software
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/products/information-center-software"
                >
                  Information Center Software
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/products/help-desk-management-software"
                >
                  Help Desk Management Software
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/products/document-management-system"
                >
                  Document Management Software
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/products/execution-planner-software"
                >
                  Execution Planner Software
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="SOLUTIONS" id="basic-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  href="/solution/drive-thru-solution"
                >
                  Drive Thru Solution
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/solution/time-attendance">
                  Time and Attendance Solution
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/solution/wireless-calling">
                  Wireless Calling Solution
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/solution/video-conference">
                  Video Conference Solution
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/solution/digital-signage-solutions"
                >
                  Digital Signage Solution
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/solution/surveillance-solution"
                >
                  Surveillance Solution
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/solution/access-control">
                  Access Control Solution
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/solution/data-leak-protection"
                >
                  Data Leak Protection System
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/solution/wifi-hotspot">
                  WiFi Hotspot Solution
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/solution/print-tracking">
                  Print Tracking Solution
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="SERVICES" id="basic-nav-dropdown">
                <NavDropdown title="Software">
                  <NavDropdown.Item
                    as={Link}
                    href="/services/smartphone-application-development"
                  >
                    Mobile Application Development
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/services/software-development"
                  >
                    Custom Software Development
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/services/web-development">
                    Website Development
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/services/e-commerce-development"
                  >
                    E-Commerce Website Development
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Consultation">
                  <NavDropdown.Item as={Link} href="/services/erp-solutions">
                    ERP Solution
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/services/point-of-sale">
                    POS Solution
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/services/search-engine-optimization"
                  >
                    SEO
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>

              <Nav.Link as={Link} href="../careers">
                CAREERS
              </Nav.Link>
              <Nav.Link as={Link} href="../contact-us">
                CONTACT US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;
