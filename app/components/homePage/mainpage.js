"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Slider from "./navSlider";
import NumberTicker from "./numberTicker";
import HomeText from "./homeText";
import Specialities from "./Specialities";
import Technologies from "./technologiesUsed";
import Link from "next/link";

export default function Home() {
  const words = ["business", "technology", "innovation"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval);
  }, [words.length]);

  const variants = {
    initial: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
      transition: {
        duration: 0.8,
      },
    },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each card animation
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div >
      {/* Use the Metadata component */}

      <div className="banner-wrap">
        <div className="banner-slider">
          <Slider />
          {/* hero slide start
					<div className="banner-slide">
						<div className="hero-image">
							<img src="template/api/UploadImages/ecommerce_website_development_saudi_arabia.jpg" />
						</div>
						<div className="container">
							<div className="hero-content"></div>
						</div>
					</div>
					<div className="banner-slide">
						<div className="hero-image">
							<img src="template/api/UploadImages/mobile_app_development_saudi_arabia.jpg" />
						</div>
						<div className="container">
							<div className="hero-content"></div>
						</div>
					</div>
					<div className="banner-slide">
						<div className="hero-image">
							<img src="template/api/UploadImages/4d9f45a6-9cd5-4e6c-9164-d98119a6641fdrive%20thru%20solutions%2003.png" />
						</div>
						<div className="container">
							<div className="hero-content"></div>
						</div>
						<div className="hero-overlay" />
					</div>
					<div className="banner-slide">
						<div className="hero-image">
							<img src="template/api/UploadImages/ecommerce_website_development_saudi_arabia.jpg" />
						</div>
						<div className="container">
							<div className="hero-content"></div>
						</div>
					</div>
					<div className="banner-slide">
						<div className="hero-image">
							<img src="template/api/UploadImages/mobile_app_development_saudi_arabia.jpg" />
						</div>
						<div className="container">
							<div className="hero-content"></div>
						</div>
					</div>
					<div className="banner-slide">
						<div className="hero-image">
							<img src="template/api/UploadImages/67e07543-e14f-403e-8a12-1b1edd3611a0Creative-Time-Attendance-Software-02.jpg" />
						</div>
						<div className="container">
							<div className="hero-content"></div>
						</div>
					</div> */}
        </div>
      </div>
      {/* hero slider end */}
      <div className="how-to-use"></div>

      <section id="content">
        <div className="content-wrap py-0 nobottompadding">
          <div className="section client-slide">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-5 col-sm-5">
                  <h3 className="text-dark mb-3">Smartest Developers</h3>
                  <h2
                    className="display-5 font-weight-semibold ls--2"
                    data-animate="fadeInUp"
                  >
                    <span
                      className="text-rotater"
                      data-separator="|"
                      data-rotate="fadeIn"
                    >
                      <span className="text-dark t-rotate">
                        We are world of
                        <br />
                        <div
                          className="t-rotate"
                          style={{ color: "navy", fontSize: "" }}
                        >
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={words[index]} // Ensures each word gets a unique key
                              variants={variants}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              style={{ display: "inline-block" }}
                            >
                              {words[index]}
                            </motion.span>
                          </AnimatePresence>
                        </div>
                      </span>
                    </span>
                  </h2>
                </div>

                <HomeText />
              </div>
            </div>
          </div>
          <div
            className="section client-slide pb-5 nobottommargin"
            style={{ display: "none" }}
          >
            <div className="container clearfix">
              <div className="row clearfix">
                <div className="col-lg-5">
                  <div className="heading-block mt-3 mb-2">
                    <h1
                      className="text-dark"
                      data-animate="fadeInUp"
                      data-delay={200}
                    >
                      Smartest Developers
                    </h1>
                    <h4 data-animate="fadeInUp" data-delay={300}>
                      The World of Business Technology.
                    </h4>
                  </div>
                  <p
                    className="text-justify text-dark mb-0 pb-5--md pb-4"
                    data-animate="fadeInUp"
                    data-delay={500}
                  >
                    Incorporated in January 2003. We are a team of the Smartest
                    Developers , specializing in website design,
                    development, and providing tailored IT solutions for diverse
                    business environments. Smartest Developers provides a range
                    of Software Services, Networking Solutions, technical
                    consulting and system integration services to help customers
                    architect, implement, and manage complex network.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div
                    style={{ position: "relative" }}
                    data-height-xl={426}
                    data-height-lg={390}
                    data-height-md={470}
                    data-height-sm={287}
                    data-height-xs={220}
                  >
                    <img
                      src="template/assets/images/apps/s2-8.png"
                      style={{ position: "absolute", bottom: 0, left: 0 }}
                      data-animate="zoomInUp"
                      data-delay={1200}
                      alt="Chrome"
                    />
                    <img
                      src="template/assets/images/apps/s2-7.png"
                      style={{ position: "absolute", bottom: 0, left: 0 }}
                      data-animate="zoomInUp"
                      data-delay={1100}
                      alt="iPad"
                    />
                    <img
                      src="template/assets/images/apps/s2-6.png"
                      style={{ position: "absolute", bottom: 0, left: 0 }}
                      data-animate="zoomInUp"
                      data-delay={1000}
                      alt="Chrome"
                    />
                    <img
                      src="template/assets/images/apps/s2-5.png"
                      style={{ position: "absolute", bottom: 0, left: 0 }}
                      data-animate="zoomInUp"
                      data-delay={900}
                      alt="iPad"
                    />
                    <img
                      src="template/assets/images/apps/s2-4.png"
                      style={{ position: "absolute", bottom: 0, left: 0 }}
                      data-animate="zoomInUp"
                      data-delay={800}
                      alt="Chrome"
                    />
                    <img
                      src="template/assets/images/apps/s2-3.png"
                      style={{ position: "absolute", bottom: 0, left: 0 }}
                      data-animate="zoomInUp"
                      data-delay={700}
                      alt="iPad"
                    />
                    <img
                      src="template/assets/images/apps/s2-2.png"
                      style={{ position: "absolute", bottom: 0, left: 0 }}
                      data-animate="zoomInUp"
                      data-delay={600}
                      alt="Chrome"
                    />
                    <img
                      src="template/assets/images/apps/s2-1.png"
                      style={{ position: "absolute", bottom: 0, left: 0 }}
                      data-animate="zoomInUp"
                      data-delay={500}
                      alt="iPad"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section about-networks client-slide nobottommargin pt-0">
            <div className="container clear-bottommargin clearfix services-sec">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                // Trigger animation when the card comes into view

                viewport={{ once: false, amount: 0.3 }} // Ensure it triggers when at least 20% of the card is in view
                className="row topmargin-md clearfix"
              >
                <motion.div
                  variants={cardVariant}
                  className="col-md-6 col-lg-4"
                >
                  <div
                    className="card bottommargin box-shadow"
                    data-animate="fadeInUp"
                    data-delay={100}
                  >
                    <div className="card-body p-0">
                      <img
                        src="template/WebAssets/img/common/software-company-saudi-arabia.png"
                        alt="Software development company "
                        className="mb-3"
                        width={60}
                      />
                      <h4 className="mb-2">Software</h4>
                      <p className="text-justify text-dark">
                        We are leading software integrators. Our expert team
                        specializes in providing custom applications and turnkey
                        solutions. We also specialize in user friendly and
                        result driven reporting solutions.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={cardVariant}
                  className="col-md-6 col-lg-4"
                >
                  <div
                    className="card bottommargin box-shadow"
                    data-animate="fadeInUp"
                    data-delay={200}
                  >
                    <div className="card-body p-0">
                      <img
                        src="template/WebAssets/img/common/Networking.png"
                        alt="Newtok support amc service ksa"
                        className="mb-3"
                        width={60}
                      />
                      <h4 className="mb-2">Networking</h4>
                      <p className="text-justify text-dark">
					   
With ever-growing technology, we strive to stay ahead and deliver out-of-the-box Data Leak Protection solutions.  
Our innovative approach ensures your IT infrastructure remains secure and reliable.  
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={cardVariant}
                  className="col-md-6 col-lg-4"
                >
                  <div
                    className="card bottommargin box-shadow"
                    data-animate="fadeInUp"
                    data-delay={300}
                  >
                    <div className="card-body p-0">
                      <img
                        src="template/WebAssets/img/common/creative-solutions-consultation.png"
                        alt="Newtok support amc service ksa"
                        className="mb-3"
                        width={60}
                      />
                      <h4 className="mb-2">Consultation</h4>
                      <p className="text-justify text-dark">
                        We are honored to provide intelligent solutions for
                        today challenging environment. Our strategy includes
                        being focused on Client Business Needs &amp; Support
                        to their Long-term Goals.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className="section section-yogas pt-0 mb-0">
            <div
              className="shape-divider"
              data-shape="wave-4"
              data-height={150}
              id="shape-divider-6017"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1280 140"
                preserveAspectRatio="none"
              >
                <path
                  className="shape-divider-fill"
                  fill="#F8F7F2"
                  d="M0 51.76c36.21-2.25 77.57-3.58 126.42-3.58 320 0 320 57 640 57 271.15 0 312.58-40.91 513.58-53.4V0H0z"
                  opacity="0.3"
                />
                <path
                  className="shape-divider-fill"
                  d="M0 24.31c43.46-5.69 94.56-9.25 158.42-9.25 320 0 320 89.24 640 89.24 256.13 0 307.28-57.16 481.58-80V0H0z"
                  opacity="0.5"
                />
                <path
                  className="shape-divider-fill"
                  d="M0 0v3.4C28.2 1.6 59.4.59 94.42.59c320 0 320 84.3 640 84.3 285 0 316.17-66.85 545.58-81.49V0z"
                />
              </svg>
            </div>
            <div className="container">
              <div className="heading-block">
                <h1
                  className="text-dark"
                  data-animate="fadeInUp"
                  data-delay={200}
                >
                  Products
                </h1>
                <h4 data-animate="fadeInUp" data-delay={400}>
                  Our comprehensive list of products complements and elevates
                  your business to the next level.
                </h4>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div
                    className="card bottommargin"
                    data-animate="fadeInUp"
                    data-delay={200}
                  >
                    <Link href="../../products/execution-planner-software">
                      <div className="card-body p-0">
                        <img
                          src="template/WebAssets/img/common/task-execution-planner-software.png"
                          alt="Daily Task Execution Planner software"
                          className="mb-3"
                          width={60}
                        />
                        <h4 className="mb-2">Execution Planner Software</h4>
                        <p className="text-dark">
                          is a web-based project management tool to manage the
                          work Flow, to-do, organize your plans...{" "}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="card bottommargin"
                    data-animate="fadeInUp"
                    data-delay={400}
                  >
                    <Link href="../../products/information-center-software">
                      <div className="card-body p-0">
                        <img
                          src="template/WebAssets/img/common/company-information-software.png"
                          alt="information software for company"
                          className="mb-3"
                          width={60}
                        />
                        <h4 className="mb-2">Information Center Software</h4>
                        <p className="text-dark">
                          Information Center Software is a fully integrated,
                          corporate-wide online data warehouse that provides...
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="card bottommargin"
                    data-animate="fadeInUp"
                    data-delay={600}
                  >
                    <Link href="../../products/document-management-system">
                      <div className="card-body p-0">
                        <img
                          src="template/WebAssets/img/common/document-management-system.png"
                          alt="Document management software / archive system"
                          className="mb-3"
                          width={60}
                        />
                        <h4 className="mb-2">Document Management Software</h4>
                        <p className="text-dark">
                          A Document Management System (DMS) is a system used to
                          track, manage and store documents and reduce paper.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="card bottommargin"
                    data-animate="fadeInUp"
                    data-delay={200}
                  >
                    <Link href="../../products/help-desk-management-software">
                      <div className="card-body p-0">
                        <img
                          src="template/WebAssets/img/common/hel-desk-management-software.png"
                          alt="helpdesk management system / software"
                          className="mb-3"
                          width={60}
                        />
                        <h4 className="mb-2">Helpdesk Management Software</h4>
                        <p className="text-dark">
                          adds value and productivity to a number of key areas
                          in an organization. From a broad perspective...
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="card bottommargin"
                    data-animate="fadeInUp"
                    data-delay={400}
                  >
                    <Link href="../../products/attendance-management-system">
                      <div className="card-body p-0">
                        <img
                          src="template/WebAssets/img/common/attendance-management-system.png"
                          alt="attendance management system software"
                          className="mb-3"
                          width={60}
                        />
                        <h4 className="mb-2">Attendance Management Software</h4>
                        <p className="text-dark">
                          is a fully automated, 100% web-based solution to
                          easily track and manage employees...
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="card bottommargin"
                    data-animate="fadeInUp"
                    data-delay={600}
                  >
                    <Link href="../../products/operationManagement">
                      <div className="card-body p-0">
                        <img
                          src="template/WebAssets/img/common/outlet-management-system.png"
                          alt="outlet management system"
                          className="mb-3"
                          width={60}
                        />
                        <h4 className="mb-2">Outlet Management Software</h4>
                        <p className="text-dark">
                          With hundreds of retail outlets, Outlet Management
                          Software manages Checklist for every aspect of
                          retail...
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Specialities />

          <div className="section">
            <div className="container center clearfix">
              <NumberTicker />
            </div>
          </div>

          <Technologies />
        </div>
      </section>
    </div>
  );
}
