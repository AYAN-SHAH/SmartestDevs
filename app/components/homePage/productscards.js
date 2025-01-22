"use client";
import { motion } from "framer-motion";

const cardHoverEffect = {
  rest: { scale: 1, boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" },
  hover: {
    scale: 1.03,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.9)",
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    transition: { duration: 0.1 },
  },
};

export default function SoftwareCards() {
    const cardsData = [
        {
          href: "execution-planner-software",
          imgSrc: "template/WebAssets/img/common/task-execution-planner-software.png",
          imgAlt: "Daily Task Execution Planner software",
          title: "Execution Planner Software",
          description: "is a web-based project management tool to manage the work Flow, to-do, organize your plans...",
        },
        {
          href: "information-center-software",
          imgSrc: "template/WebAssets/img/common/company-information-software.png",
          imgAlt: "Information software for company",
          title: "Information Center Software",
          description: "Information Center Software is a fully integrated, corporate-wide online data warehouse that provides...",
        },
        {
          href: "document-management-system",
          imgSrc: "template/WebAssets/img/common/document-management-system.png",
          imgAlt: "Document management software / archive system",
          title: "Document Management Software",
          description: "A Document Management System (DMS) is a system used to track, manage and store documents and reduce paper.",
        },
        {
          href: "help-desk-management-software",
          imgSrc: "template/WebAssets/img/common/hel-desk-management-software.png",
          imgAlt: "Helpdesk management system / software",
          title: "Helpdesk Management Software",
          description: "adds value and productivity to a number of key areas in an organization. From a broad perspective...",
        },
        {
          href: "attendance-management-system",
          imgSrc: "template/WebAssets/img/common/attendance-management-system.png",
          imgAlt: "Attendance management system software",
          title: "Attendance Management Software",
          description: "is a fully automated, 100% web-based solution to easily track and manage employees...",
        },
        {
          href: "outlet-management-software",
          imgSrc: "template/WebAssets/img/common/outlet-management-system.png",
          imgAlt: "Outlet management system",
          title: "Outlet Management Software",
          description: "With hundreds of retail outlets, Outlet Management Software manages Checklist for every aspect of retail...",
        },
      ];
      

  return (
    <div className="row">
      {cardsData.map((card, index) => (
        <div className="col-md-6 col-lg-4" key={index}>
          <motion.div
            className="card bottommargin"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={cardHoverEffect}
          >
            <a href={card.href}>
              <div className="card-body p-0">
                <img src={card.imgSrc} alt={card.imgAlt} className="mb-3" width={60} />
                <h4 className="mb-2">{card.title}</h4>
                <p className="text-dark">{card.description}</p>
              </div>
            </a>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
