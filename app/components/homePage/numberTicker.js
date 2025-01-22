"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Counter({ from, to, duration, stepSize = 1 }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      const steps = Math.ceil((to - from) / stepSize);
      const interval = duration / steps;
      const ticker = setInterval(() => {
        setCount((prev) => {
          if (prev + stepSize >= to) {
            clearInterval(ticker);
            return to;
          }
          return prev + stepSize;
        });
      }, interval * 1000);
    }
  }, [inView, from, to, duration, stepSize]);

  return (
    <motion.div ref={ref} className="counter counter-lined">
      {count.toLocaleString()}+
    </motion.div>
  );
}

export default function NumberTicker() {
  return (
    <div className="row">
      <div className="col-lg-3 col-sm-6 nobottommargin center counter-icon-box">
        <img src="template/api/UploadImages/creative-solutions-project-complete.png" className="counter__img" />
        <Counter from={60} to={2350} duration={2} />
        <h5>PROJECT COMPLETED</h5>
      </div>
      <div className="col-lg-3 col-sm-6 nobottommargin center counter-icon-box">
        <img src="template/api/UploadImages/happy-clients-creative-solutions.png" className="counter__img" />
        <Counter from={60} to={1500} duration={2} />
        <h5>HAPPY CLIENTS</h5>
      </div>
      <div className="col-lg-3 col-sm-6 nobottommargin center counter-icon-box">
        <img src="template/api/UploadImages/cup-coffee-saudi.png" className="counter__img" />
        <Counter from={60} to={16895} duration={1} />
        <h5>CUPS OF COFFEE CONSUMED</h5>
      </div>
      <div className="col-lg-3 col-sm-6 nobottommargin center counter-icon-box">
        <img src="template/api/UploadImages/code-developers-creative-solutions.png" className="counter__img" />
        <Counter from={60} to={1961289} duration={2.2} stepSize={10000} />
        <h5>LINES OF CODES</h5>
      </div>
    </div>
  );
}
