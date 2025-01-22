import React from "react";
export const metadata = {
  title: "Access Control Solutions for | Smartest Developers",
  description:
      "Smartest Developers provides innovative biometric fingerprint readers, including F11 and X7, designed for high-performance access control. These devices offer advanced algorithms, precision, and reliability, with features like standalone operation, TCP/IP communication, and compatibility with third-party panels. Our solutions are ideal for businesses seeking secure, efficient access control systems.",
  keywords:
      "Access Control Solutions biometric fingerprint readers, F11 fingerprint reader, X7 fingerprint reader, fingerprint matching, TCP/IP communication, standalone access control, security systems, third-party panel integration, access control applications"
};

const AccessControl = () => {
  return (
    <div>
      <div>
        <section className="banner-img">
          <img
            src="/template/WebAssets/img/common/headers/solutions.jpg"
            alt="access control"
            className="img__header"
          />
        </section>
        {/* Content
============================================= */}
        <section id="content" style={{ marginBottom: 0 }}>
          <div className="content-wrap">
            <div className="section header-stick nobg nobottommargin pb-0">
              <div className="container clearfix">
                <div className="row justify-content-between align-items-top">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="heading-block bottommargin-sm">
                      <h3 data-animate="fadeInUp" className="fadeInUp animated">
                        Access Control Solution
                      </h3>
                    </div>
                    <p
                      className="text-justify fadeInUp animated"
                      data-animate="fadeInUp"
                    >
                      F11 is an innovative biometric Fingerprint reader for
                      access control applications, offering unparalleled
                      performance using an advanced algorithm for reliability,
                      precision and excellent matching speed. The F11 features
                      the fastest commercial-based Fingerprint matching
                      algorithm and high-performance, high-image quality optical
                      fingerprint sensor. The device offers the Flexibility to
                      be installed standalone or with any third party panel that
                      supports 26-bit Wiegand. The user can be enrolled by
                      administrator card when the device works as a standalone
                      access control. TCP / IP and RS232/485 are available that
                      the device can be used in different network. TCP / IP
                      communication make sure the data transition between the
                      device and the PC can be easily done within several
                      seconds.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div
                      className="border-light fadeInUp animated"
                      data-animate="fadeInUp"
                      data-delay={200}
                    >
                      <img
                        src="/template/WebAssets/img/Solutions/Access%20Control%20Solution.png"
                        alt="Smartest Developers data-animate="
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div data-animate="fadeInUp" className="fadeInUp animated">
                      <h4 className="mb-2">Features:</h4>
                      <div className="col_full features">
                        <ul className="iconlist iconlist-color nobottommargin">
                          <li className="box-shadow mb-3">
                            <i className="icon-line-circle-check pb-2" />{" "}
                            Fingerprint reader with durable and highly accurate
                            optical sensor
                          </li>
                          <li className="box-shadow mb-3">
                            <i className="icon-line-circle-check pb-2" /> 1
                            touch a-second user recognition
                          </li>
                          <li className="box-shadow mb-3">
                            <i className="icon-line-circle-check pb-2" /> Stores
                            1,500 templates and 10,000 cards
                          </li>
                          <li className="box-shadow mb-3">
                            <i className="icon-line-circle-check pb-2" /> Reads
                            Fingerprint and/or Card
                          </li>
                          <li className="box-shadow mb-3">
                            <i className="icon-line-circle-check pb-2" />{" "}
                            Optional integrated smart card reader
                          </li>
                          <li className="box-shadow mb-3">
                            <i className="icon-line-circle-check pb-2" />{" "}
                            Request-to-exit and alarm contacts
                          </li>
                          <li className="box-shadow mb-3">
                            <i className="icon-line-circle-check pb-2" />{" "}
                            Real-time 1-touch data export 3rd party hosted &amp;
                            non-hosted applications
                          </li>
                          <li className="box-shadow mb-3">
                            <i className="icon-line-circle-check pb-2" />{" "}
                            Audio-Visual indications for acceptance and
                            rejection of valid/invalid fingers
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-animate="fadeInUp" className="fadeInUp animated">
                  <p>
                    X7 Innovative biometric fingerprint reader for access
                    control applications, offers unparalleled performance using
                    an advanced algorithm for reliability, precision and
                    excellent matching speed. As a terminal designed for users
                    having common access control requirement, it can operate on
                    standalone mode with the interface for third party electric
                    lock, alarm, door sensor, exit button and doorbell.
                  </p>
                </div>
                <div data-animate="fadeInUp" className="fadeInUp animated">
                  <h4 className="mb-2">Features:</h4>
                  <div className="col_full nobottommargin features">
                    <ul className="iconlist iconlist-color nobottommargin">
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Standard
                        ID card while Mifare card as optional feature
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Password
                        capacity up to 8 groups
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> 1 touch
                        a-second user recognition
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Reads
                        Fingerprint/Password/Card
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Rugged and
                        elegant design
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Easy
                        keypad operation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* #content end */}
      </div>
    </div>
  );
};

export default AccessControl;
