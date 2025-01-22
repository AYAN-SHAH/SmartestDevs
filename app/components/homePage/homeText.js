"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedText() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const [words, setWords] = useState([]);
  const text = `Incorporated in January 2003, "We are a team of the Smartest Developers , specializing in website design, development, and providing tailored IT solutions for diverse business environments. Smartest Developers provides a range of Software Services, Networking Solutions, technical consulting, and system integration services to help customers architect, implement, and manage complex networks."`;

  useEffect(() => {
    if (inView) {
      setWords(text.split(" "));
    }
  }, [inView]);

  const wordVariants = {
    hidden: { opacity: 0, filter: "blur(5px)" },
    visible: (i) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1, // Adjust timing for each word
        duration: 0.25,
      },
    }),
  };

  return (
    <div className="col-lg-5 col-md-7 col-sm-7">
      <motion.div ref={ref} className="font-16 font-weight-700 text-dark text-justify">
        {words.map((word, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={wordVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ display: "inline-block", marginRight: "0.3em" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
