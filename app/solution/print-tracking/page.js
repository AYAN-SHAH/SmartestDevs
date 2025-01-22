import React from "react";
export const metadata = {
  title: "Smartest Developers Print Tracking Solution |",
  description:
      "Smartest Developers offers Print Tracking Solutions with Print Polisher and CS Print Polish Marker 1.0 to control printouts, reduce waste, and save costs. Monitor printerge, add watermarks, and track print jobs by user, computer name, date, time, and page count.",
  keywords:
      "Print Tracking Solution, print management software, printerge monitoring, print waste reduction, watermark text, print cost savings, CS Print Polish Marker, Smartest Developers, printouts control, print job tracking,"
};

const PrintTracking = () => {
  return (
    <div>
      <section className="banner-img">
        <img
          src="/template/WebAssets/img/common/headers/solutions.jpg"
          alt="print tracking "
          className="img__header"
        />
      </section>

      <section id="content" style={{ marginBottom: 0 }}>
        <div className="content-wrap">
          <div className="section header-stick nobg nobottommargin pb-0">
            <div className="container clearfix">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="heading-block bottommargin-sm">
                    <h3 data-animate="fadeInUp" className="fadeInUp animated">
                      Print Tracking Solution
                    </h3>
                  </div>
                  <p
                    className="mb-3 text-justify fadeInUp animated"
                    data-animate="fadeInUp"
                    data-delay={100}
                  >
                    If you are worried about your printouts getting wasted and
                    misuse of the print services, then Print Polisher is the
                    choice of application for you. once print polisher is
                    implemented on your network it easily controls the print
                    outs and saves huge amount of wasted cash flow.
                  </p>
                  <p
                    className="mb-3 text-justify fadeInUp animated"
                    data-animate="fadeInUp"
                    data-delay={200}
                  >
                    CS Print Polish Marker 1.0 print software can force a user
                    name, computer name, day, time and page count to appear on
                    footer or header area of printed document from all your
                    applications! User can also create overlays and adds
                    multi-line watermarks and watermark texts on each paper
                    sheet.
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div
                    className="border-light fadeInUp animated"
                    data-animate="fadeInUp"
                    data-delay={100}
                  >
                    <img
                      src="/template/WebAssets/img/Solutions/Print%20Tracking%20Solution.png"
                      alt="Smartest Developers data-animate="
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrintTracking;
