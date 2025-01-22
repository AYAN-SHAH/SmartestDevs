import React from 'react'
import Link from 'next/link'

const footer = () => {
  return (
    
         <footer id="footer" className="section pt-0 pb-0">
          <div className="shape-divider" data-shape="wave-4" data-height={150} id="shape-divider-6017"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 140" preserveAspectRatio="none"><path className="shape-divider-fill" fill="#F8F7F2" d="M0 51.76c36.21-2.25 77.57-3.58 126.42-3.58 320 0 320 57 640 57 271.15 0 312.58-40.91 513.58-53.4V0H0z" opacity="0.3" /><path className="shape-divider-fill" d="M0 24.31c43.46-5.69 94.56-9.25 158.42-9.25 320 0 320 89.24 640 89.24 256.13 0 307.28-57.16 481.58-80V0H0z" opacity="0.5" /><path className="shape-divider-fill" d="M0 0v3.4C28.2 1.6 59.4.59 94.42.59c320 0 320 84.3 640 84.3 285 0 316.17-66.85 545.58-81.49V0z" /></svg></div>
          <div className="container">
            <div className="footer-widgets-wrap row col-mb-50 pt-0">
              {/* ======================== Footer Widget 4 ===================== */}
              <div className="col-lg-3 col-sm-6">
                <div className="widget widget_links">
                  <div className="footer-img-logo">
                    <img style={{width:"auto", height:"100px"}} src="/template/sd-logo.png" />
                    <p>We are a team of the Smartest Developers , specializing in website design, development, and providing tailored IT solutions for diverse business environments.</p>
                  </div>
                </div>
                <div className="mt-2 widget_links">
                  <h4 className="my-2 mb-sm-2">Contact Us</h4>
                  <div className="contact-map">
                    
                    <abbr title="Email Address"><strong>Email :</strong></abbr> <Link href="mailto:sales@smartestdevelopers.com">sales@smartestdevelopers.com</Link>
                  </div>
                </div>
                <div className="copyrights-menu copyright-links m-0">
                  <div className="mt-3 d-inline-block">
                    <Link href="https://www.facebook.com/smartestdevelopers" className="social-icon si-small si-dark si-facebook ml-0" title="Facebook" target="_blank">
                      <i className="icon-facebook" />
                      <i className="icon-facebook" />
                    </Link>
                    <Link href="https://twitter.com/smartestdevelopers" className="social-icon si-small si-dark si-twitter ml-0" title="twitter" target="_blank">
                      <i className="twitter-x">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                        </svg>
                      </i>
                      <i className="twitter-x">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                        </svg>
                      </i>
                    </Link>
                    <Link href="https://www.linkedin.com/company/smartestdevelopers" className="social-icon si-small si-dark si-instagram ml-0" title="instagram" target="_blank">
                      <i className="icon-linkedin" />
                      <i className="icon-linkedin" />
                    </Link>
                    <Link href="https://www.instagram.com/smartestdevelopers" className="social-icon si-small si-dark si-instagram ml-0" title="instagram" target="_blank">
                      <i className="icon-instagram" />
                      <i className="icon-instagram" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Footer Widget 3
              ============================================= */}
              <div className="col-lg-3 col-sm-6">
                <div className="widget widget_links">
                  <h4 className="my-3 mb-sm-3">Products</h4>
                  <ul>
                    <li><Link href="../products/execution-planner-software">Execution Planner Software</Link></li>
                    <li><Link href="../products/information-center-software">Information Center Software</Link></li>
                    <li><Link href="../products/document-management-system">Document Management Software</Link></li>
                    <li><Link href="../products/help-desk-management-software">Helpdesk Management Software</Link></li>
                    <li><Link href="../products/attendance-management-system">Attendance Management Software</Link></li>
                    <li><Link href="../products/operationManagement">Smart Brew Checklist and Operation Management Software</Link></li>
                    <li><Link href="../products/van-sales-software">VAN Sales Software</Link></li>
                  </ul>
                  <h4 className="my-3 mb-sm-3">Other Links</h4>
                  <ul>
                    <li><Link href="../about-us">About Us</Link></li>
                    <li><Link href="../portfolio">Portfolio</Link></li>
                    <li><Link href="../careers">Careers</Link></li>
                    <li><Link href="../contact-us">Contact Us</Link></li>
                    <li><Link href="../get-a-quote">Get A Quote</Link></li>
                    <li><Link href="../privacy-policy">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>
              {/* ======================= Footer Widget 3 ====================== */}
              <div className="col-lg-3 col-sm-6">
                <div className="widget widget_links">
                  <h4 className="my-3 mb-sm-3">Services</h4>
                  <ul>
                    <li><Link href="../services/smartphone-application-development">Smartphone Application Development</Link></li>
                    <li><Link href="../services/software-development">Custom Software Development</Link></li>
                    <li><Link href="../services/web-development">Website Development</Link></li>
                    <li><Link href="../services/e-commerce-development">E-Commerce Development</Link></li>
                    <li><Link href="../services/it-infrastructure">IT Infrastructure Implementation</Link></li>
                    <li><Link href="../services/system-integration">System Integration</Link></li>
                    <li><Link href="../services/network-support">Network Support &amp; AMC</Link></li>
                    <li><Link href="../services/erp-solutions">ERP Solution</Link></li>
                    <li><Link href="../services/point-of-sale">POS Solution</Link></li>
                    <li><Link href="../services/search-engine-optimization">SEO</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget widget_links">
                  <h4 className="my-3 mb-sm-3">Solutions</h4>
                  <ul>
                    <li><Link href="../solution/drive-thru-solution">Drive Thru Solution</Link></li>
                    <li><Link href="../solution/digital-signage-solutions">Digital Signage Solution</Link></li>
                    <li><Link href="../solution/time-attendance">Time &amp; Attendance Solution</Link></li>
                    <li><Link href="../solution/wireless-calling">Wireless Calling Solution</Link></li>
                    <li><Link href="../solution/video-conference">Video Conference Solution</Link></li>
                    <li><Link href="../solution/surveillance-solution">Surveillance Solution</Link></li>
                    <li><Link href="../solution/access-control">Access Control Solution</Link></li>
                    <li><Link href="../solution/data-leak-protection">Data Leak Protection System</Link></li>
                    <li><Link href="../solution/wifi-hotspot">Wifi Hotspot Solution</Link></li>
                    <li><Link href="../solution/print-tracking">Print Tracking Solution</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* ======================== Copyrights ===================== */}
          <div id="copyrights">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  Copyrights © 2024 All Rights Reserved<br /> Website Design &amp; Developed by <Link href="/"><strong>Smartest Developers.</strong></Link> .
                </div>
              </div>
            </div>
          </div>{/* #copyrights end */}
        </footer>

   
  )
}

export default footer