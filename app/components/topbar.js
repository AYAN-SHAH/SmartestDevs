import React from "react";
import Link from "next/link";

const Topbar = () => {
  return (
    <div>
      <div id="top-bar">
        <div className="container clearfix">
          <div className="col_half col-first nobottommargin">
            <p className="nobottommargin">
              <Link href="mailto:sales@smartestdevelopers.com">
                <i className="icon-envelope21" /> sales@smartestdevelopers.com
              </Link>
            </p>
          </div>
          <div className="col_half col_last fright nobottommargin">
            {/* Top Links
            ============================================= */}
            <div className="top-links">
              <ul className="clearfix">
                <li className="d-none-350">
                  <Link href="mailto:sales@smartestdevelopers.com">
                    <i className="icon-envelope21" />
                  </Link>
                </li>
                <li className="d-none-350"></li>
                <li className="b-0">
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li className="top-quote">
                  <Link href="/get-a-quote">Get A Quote</Link>
                </li>
                <li></li>
              </ul>
            </div>
            {/* .top-links end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
