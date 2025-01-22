"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const slideLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export default function Specialities() {
  return (
    <motion.div className="section client-slide">
      <div className="container clearfix">
        <div className="row">
          <div className="col-lg-12 nobottommargin">
            <div className="heading-block center mb-lg-5 mb-3">
              <h3>Our Specialities</h3>
            </div>
          </div>
        </div>

        <div className="page-section bottommargin-lg">
          <motion.div
            className="row justify-content-between align-items-center clearfix"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.div className="col-lg-5 center" variants={slideLeft}>
              <img
                src="template/assets/images/Home-SmartphoneApp.jpg"
                alt="Smartphone App"
              />
            </motion.div>
            <motion.div className="col-lg-5" variants={slideRight}>
              <img
                src="template/WebAssets/img/common/point-of-sale-software.png"
                width={70}
                alt="Point Of Sale"
              />
              <h2 className="font-body ls1 font-weight-normal mb-2">
                Smartphone Application Development
              </h2>
              <p style={{ color: "#000" }} className="lead font-sm-16">
                Smartest Developers has extensive experience in creating high
                performance, feature-packed and digitally transformative
                smartphone applications.
              </p>
              <Link href="smartphone-application-development.html" className="section-more-link">
                Read More <i className="icon-angle-right" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="line" />

        <div className="page-section bottommargin-lg">
          <motion.div
            className="row justify-content-between align-items-center clearfix"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.div className="col-lg-5" variants={slideRight}>
              <img src="template/WebAssets/img/common/web-designer-Georgia USA-saudi.png" width={70} alt="Web Design" />
              <h2 className="font-body ls1 font-weight-normal mb-2">
                Web Design & Development
              </h2>
              <p style={{ color: "#000" }} className="lead font-sm-16">
                Smartest Developers provide custom web development services to
                meet the business goals of their valuable clients.
              </p>
              <Link href="web-development.html" className="section-more-link">
                Read More <i className="icon-angle-right" />
              </Link>
            </motion.div>
            <motion.div className="col-lg-5 center" variants={slideLeft}>
              <img
                src="template/assets/images/Home-WEB.jpg"
                alt="Web Development"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="line" />

        <div className="page-section bottommargin-lg">
          <motion.div
            className="row justify-content-between align-items-center clearfix"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.div className="col-lg-5 center" variants={slideLeft}>
              <img src="template/assets/images/Home-SEO.jpg" alt="SEO" />
            </motion.div>
            <motion.div className="col-lg-5" variants={slideRight}>
              <img
                src="template/WebAssets/img/common/point-of-sale-software.png"
                width={70}
                alt="SEO"
              />
              <h2 className="font-body ls1 font-weight-normal mb-2">
                SEO - Search Engine Optimization
              </h2>
              <p style={{ color: "#000" }} className="lead font-sm-16">
                SEO improves the visibility of a website in search engines. The
                higher a website ranks, the more visitors it will receive.
              </p>
              <Link href="search-engine-optimization-saudi-arabia.html" className="section-more-link">
                Read More <i className="icon-angle-right" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
