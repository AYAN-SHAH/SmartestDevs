import React from "react";
export const metadata = {
  title: "Surveillance Solutions Provider | Smartest Developers",
  description:
      "Smartest Developers offers comprehensive surveillance solutions including CCTV, IP cameras, video door phones, access control, and alarm systems. Our products come with cloud-based remote viewing and a central management system. With a focus on R&D, we provide reliable and field-tested security products backed by manufacturer warranties.",
  keywords:
      "surveillance solutions CCTV systems, IP cameras, video door phones, access control, intruder alarm systems, fire alarm systems, cloud-based remote viewing, central management system, security products, field-tested surveillance"
};

const SurveillanceSolution = () => {
  return (
    <div>
      <div>
        <section className="banner-img">
          <img
            src="/template/WebAssets/img/common/headers/solutions.jpg"
            alt="surviellance company"
            className="img__header"
          />
        </section>
        {/* #page-title end */}
        {/* Content
<div>
*/}
        ============================================= --&gt;
        <section id="content" style={{ marginBottom: 0 }}>
          <div className="content-wrap">
            <div className="section header-stick nobg nobottommargin pb-0">
              <div className="container clearfix">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="heading-block bottommargin-sm">
                      <h3 data-animate="fadeInUp" className="fadeInUp animated">
                        Surveillance Solution
                      </h3>
                    </div>
                    <p
                      className="text-justify fadeInUp animated"
                      data-animate="fadeInUp"
                    >
                      A complete source for CCTV, IP Camera, Video Door Phones,
                      Access Control, Intruder/Fire Alarm Systems.{" "}
                    </p>
                    <h4 className="mb-2 not-animated" data-animate="fadeInUp">
                      Our philosophy is Simple
                    </h4>
                    <div data-animate="fadeInUp" className="not-animated">
                      <p className="mb-2 text-justify">
                        We are continuously investing great deal of time and
                        money in R &amp; D. This allows us to be very selective
                        in the brands and products that we carry. We do not
                        follow industry trends, but rather set them. We embrace
                        products that are field tested and include a
                        manufacturer’s warranty.
                      </p>
                      <p className="text-justify">
                        All our Solutions come equipped with cloud based remote
                        viewing and Central Management System
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div
                      className="border-light fadeInUp animated"
                      data-animate="fadeInUp"
                      data-delay={200}
                    >
                      <img
                        src="/template/WebAssets/img/Solutions/Surveillance%20Solution.png"
                        alt="Featured image 3"
                        className="card-img-top"
                      />
                    </div>
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

export default SurveillanceSolution;
