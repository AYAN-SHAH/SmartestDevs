"use client"
import React, { useState } from "react";
import axios from "axios";
import Careeraccord from "./careeraccord";

const Career = () => {
  const [formData, setFormData] = useState({
    DesignationId: "",
    FullName: "",
    Email: "",
    Phone: "",
    Resume: null,
    Description: "",
  });

  const [formResult, setFormResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      Resume: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    Object.keys(formData).forEach((key) => {
      formPayload.append(key, formData[key]);
    });

    try {
      const response = await axios.post("/api/insertcareer", formPayload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log()
      setFormResult({ message: "Application submitted successfully!", error: false });
    } catch (error) {
      setFormResult({ message: "Failed to submit application.", error: true });
    }
  };

  return (
    <form id="example-form" onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="loading-overlay">
        <span className="fa fa-spinner fa-3x fa-spin" />
      </div>
      <section className="banner-img">
        <img
          src="/template/WebAssets/img/common/headers/careers.jpg"
          alt="careers at Smartest Developers company"
          className="img__header"
        />
      </section>
      <section id="content" style={{ marginBottom: 0 }}>
        <div className="content-wrap">
          <div className="container clearfix">
            <div
              className="col_three_fifth nobottommargin fadeInUp"
              data-animate="fadeInUp"
            >
              <div id="job-apply" className="heading-block highlight-me">
                <h2>Available Positions</h2>
              </div>
              <div id="accordion-12" className="u-accordion u-accordion-color-primary">
                {/* Include Careeraccord component or dynamic positions */}
                <Careeraccord/>
              </div>
            </div>

            <div className="col_two_fifth nobottommargin col_last fadeInUp" data-animate="fadeInUp" data-delay={100}>
              <div id="job-apply" className="heading-block highlight-me mb-3">
                <h2>Apply Now</h2>
                <p>And we'll get back to you within 48 hours.</p>
              </div>

              <div className="form-widget">
                {formResult && (
                  <div className={formResult.error ? "text-danger" : "text-success"}>
                    {formResult.message}
                  </div>
                )}
                

                <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="txtName">Full Name <small>*</small></label>
                  <input
                    className="sm-form-control"
                    type="text"
                    name="FullName"
                    placeholder="Enter name"
                    value={formData.FullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="txtEmail">Email <small>*</small></label>
                  <input
                    className="sm-form-control"
                    type="email"
                    name="Email"
                    placeholder="Enter email"
                    value={formData.Email}
                    onChange={handleChange}
                  />
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="txtPhone">Phone <small>*</small></label>
                  <input
                    className="sm-form-control"
                    type="number"
                    name="Phone"
                    placeholder="Enter contact"
                    value={formData.Phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="ddlPositions">Position <small>*</small></label>
                  <select
                    className="sm-form-control required"
                    name="DesignationId"
                    value={formData.DesignationId}
                    onChange={handleChange}
                  >
                    <option value="">-Please Select Position-</option>
                    <option value="Accountant">Accountant</option>
                    <option value="Android App Developer">Android App Developer</option>
                    <option value="iPhone App Developer">iPhone App Developer</option>
                    <option value="Dot Net Programmer">Dot Net Programmer</option>
                    <option value="Network Engineer4">Network Engineer</option>
                    <option value="Desktop Support Engineer">Desktop Support Engineer</option>
                    <option value="Executive Secretary">Executive Secretary</option>
                    <option value="Project Coordinator">Project Coordinator</option>
                    <option value="Sales Executive">Sales Executive</option>
                  </select>
                </div>
                </div>
                <div className="col_full mb-3">
                  <label>Upload Resume <small>*</small></label>
                  <input
                    type="file"
                    name="Resume"
                    accept="application/pdf,application/msword"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="col_full mb-3">
                  <label>Description</label>
                  <textarea
                    className="sm-form-control"
                    name="Description"
                    placeholder="Enter description"
                    value={formData.Description}
                    onChange={handleChange}
                  />
                </div>
                <div className="col_full mb-3">
                  <button className="button button-3d button-large btn-block nomargin" type="submit">
                    Send Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Career;
