"use client";
import { motion } from "framer-motion";

const staggeredList = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Technologies() {
  return (
    <motion.div
      className="section client-slide nobottommargin"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={staggeredList}
    >
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-block mb-1">
              <motion.h1
                className="text-dark"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
              >
                Technologies We Work On
              </motion.h1>
            </div>
            <motion.ul
              className="clients-grid grid-6 nobottommargin clearfix"
              initial="hidden"
              animate="visible"
              variants={staggeredList}
              whileInView="visible"
              viewport={{ once: false }}
            >
              <motion.li variants={fadeInUp}>
                <img
                  src="template/assets/images/resources/1.png"
                  alt="Clients"
                />
              </motion.li>
              <motion.li variants={fadeInUp}>
                <img
                  src="template/assets/images/resources/2.png"
                  alt="Clients"
                />
              </motion.li>
              <motion.li variants={fadeInUp}>
                <img
                  src="template/assets/images/resources/3.png"
                  alt="Clients"
                />
              </motion.li>
              <motion.li variants={fadeInUp}>
                <img
                  src="template/assets/images/resources/4.png"
                  alt="Clients"
                />
              </motion.li>
              <motion.li variants={fadeInUp}>
                <img
                  src="template/assets/images/resources/5.png"
                  alt="Clients"
                />
              </motion.li>
              <motion.li variants={fadeInUp}>
                <img
                  src="template/assets/images/resources/6.png"
                  alt="Clients"
                />
              </motion.li>
              <motion.li variants={fadeInUp}>
                <img
                  src="template/assets/images/resources/7.png"
                  alt="Clients"
                />
              </motion.li>
              <motion.li variants={fadeInUp}>
                <img
                  src="template/assets/images/resources/8.png"
                  alt="Clients"
                />
              </motion.li>
              <motion.li variants={fadeInUp}>
                <img
                  src="template/assets/images/resources/9.png"
                  alt="Clients"
                />
              </motion.li>
              <motion.li variants={fadeInUp}>
                <img
                  src="template/assets/images/resources/10.png"
                  alt="Clients"
                />
              </motion.li>
              <motion.li variants={fadeInUp}>
                <img
                  src="template/assets/images/resources/11.png"
                  alt="Clients"
                />
              </motion.li>
              <motion.li variants={fadeInUp}>
                <img
                  src="template/assets/images/resources/12.png"
                  alt="Clients"
                />
              </motion.li>
              <motion.li variants={fadeInUp}>
                <img
                  src="template/assets/images/resources/13.png"
                  alt="Clients"
                />
              </motion.li>
              <motion.li variants={fadeInUp}>
                <img
                  src="template/assets/images/resources/14.png"
                  alt="Clients"
                />
              </motion.li>
              <motion.li variants={fadeInUp}>
                <img
                  src="template/assets/images/resources/15.png"
                  alt="Clients"
                />
              </motion.li>
              <motion.li variants={fadeInUp}>
                <img
                  src="template/assets/images/resources/16.png"
                  alt="Clients"
                />
              </motion.li>
              <motion.li variants={fadeInUp}>
                <img
                  src="template/assets/images/resources/17.png"
                  alt="Clients"
                />
              </motion.li>
              <motion.li variants={fadeInUp}>
                <img
                  src="template/assets/images/resources/18.png"
                  alt="Clients"
                />
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
