"use client"
import { useState } from 'react';

const GetQuoteComp = () => {
  const [formData, setFormData] = useState({
    Name: '',
    JobTitle: '',
    Email: '',
    Phone: '',
    CompanyName: '',
    Website: '',
    NoOfEmployee: '',
    YearsInBusiness: '',
    Budget: '',
    TimeLine: '',
    Description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/insertgetquote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Your quote request has been submitted successfully.');
        setFormData({
          Name: '',
          JobTitle: '',
          Email: '',
          Phone: '',
          CompanyName: '',
          Website: '',
          NoOfEmployee: '',
          YearsInBusiness: '',
          Budget: '',
          TimeLine: '',
          Description: '',
        });
      } else {
        alert('There was an issue submitting your quote request.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the form. Please try again later.');
    }
  };

  return (
    <div>
      <section className="banner-img">
        <img src="/template/WebAssets/img/common/headers/solutions.jpg" alt="get a quote" className="img__header" />
      </section>
      <section id="content" style={{ marginBottom: 0 }}>
        <div className="content-wrap">
          <div className="container clearfix">
            <div className="col_full nobottommargin">
              <div data-animate="fadeInUp" className="fadeInUp animated">
                <div className="heading-block mb-4">
                  <h2>GET A QUOTE</h2>
                </div>
                <form className="form-widget" onSubmit={handleSubmit}>
                  <div className="form-result" />
                  <input type="hidden" name="CountryCode" />
                  <input type="hidden" name="CountryShortCode" />
                  <h4 className="nobottommargin" style={{ color: '#C5A746' }}>Personal Details</h4>
                  <div className="line my-3" />
                  <div className='row mb-4'>
                  <div className="col-md-3">
                    <label htmlFor="txtName">Full Name <small>*</small></label>
                    <input
                      type="text"
                      id="txtName"
                      name="Name"
                      placeholder="Enter name"
                      className="txtAlphaEnAr sm-form-control text-box single-line"
                      value={formData.Name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="txtJobTitle">Job Title <small>*</small></label>
                    <input
                      type="text"
                      id="txtJobTitle"
                      name="JobTitle"
                      placeholder="Enter job title"
                      className="txtAlphaEnAr sm-form-control text-box single-line"
                      value={formData.JobTitle}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="txtEmail">Email Address <small>*</small></label>
                    <input
                      type="email"
                      id="txtEmail"
                      name="Email"
                      placeholder="Enter email"
                      className="sm-form-control text-box single-line"
                      value={formData.Email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="txtPhone">Phone Number<small>*</small></label>
                    <input
                      type="tel"
                      id="txtPhone"
                      name="Phone"
                      placeholder="Enter Phone number"
                      className="sm-form-control text-box single-line"
                      value={formData.Phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  </div>
                  <h4 className="nobottommargin" style={{ color: '#C5A746' }}>Company Details</h4>
                  <div className="line my-3" />

                  <div className='row mb-4'>
                  <div className="col-md-3">
                    <label htmlFor="txtCompanyName">Company Name <small>*</small></label>
                    <input
                      type="text"
                      id="txtCompanyName"
                      name="CompanyName"
                      placeholder="Enter company name"
                      className="txtAlphaEnAr sm-form-control text-box single-line"
                      value={formData.CompanyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="txtWebsite">Website <small>*</small></label>
                    <input
                      type="text"
                      id="txtWebsite"
                      name="Website"
                      placeholder="Enter website"
                      className="sm-form-control text-box single-line"
                      value={formData.Website}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="ddlNoOfEmployees">Number Of Employees <small>*</small></label>
                    <select
                      id="ddlNoOfEmployees"
                      name="NoOfEmployee"
                      className="sm-form-control"
                      value={formData.NoOfEmployee}
                      onChange={handleChange}
                      required
                    >
                      <option value="">--Please Select--</option>
                      <option value="1-10 Employees">1-10 Employees</option>
                      <option value="10-100 Employees">10-100 Employees</option>
                      <option value="101-200 Employees">101-200 Employees</option>
                      <option value="201-500 Employees">201-500 Employees</option>
                      <option value="501-1000 Employees">501-1000 Employees</option>
                      <option value="1000+ Employees">1000+ Employees</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="ddlYearsInBusiness">Years In Business <small>*</small></label>
                    <select
                      id="ddlYearsInBusiness"
                      name="YearsInBusiness"
                      className="sm-form-control"
                      value={formData.YearsInBusiness}
                      onChange={handleChange}
                      required
                    >
                      <option value="">--Please Select --</option>
                      <option value="0-2 Years">0-2 Years</option>
                      <option value="2-5 Years">2-5 Years</option>
                      <option value="5-10 Years">5-10 Years</option>
                      <option value="10+ Years">10+ Years</option>
                    </select>
                  </div>
                  </div>

                  <h4 className="nobottommargin" style={{ color: '#C5A746' }}>Project Details</h4>
                  <div className="line my-3" />
                  <div className="col_half">
                    <label htmlFor="ddlBudget">Budget <small>*</small></label>
                    <select
                      id="ddlBudget"
                      name="Budget"
                      className="sm-form-control"
                      value={formData.Budget}
                      onChange={handleChange}
                      required
                    >
                      <option value="">--Please Select --</option>
                      <option value="500-1000 USD">500-1000 USD</option>
                      <option value="2000-3000 USD">2000-3000 USD</option>
                      <option value="4000-5000 USD">300,000-400,000 USD</option>
                      <option value="5000-10000 USD">5000-10000 USD</option>
                    </select>
                  </div>
                  <div className="col_half col_last">
                    <label htmlFor="ddlTimeline">Timeline <small>*</small></label>
                    <select
                      id="ddlTimeline"
                      name="TimeLine"
                      className="sm-form-control"
                      value={formData.TimeLine}
                      onChange={handleChange}
                      required
                    >
                      <option value="">--Please Select --</option>
                      <option value="1-2 Weeks">1-2 Weeks</option>
                      <option value="2-3 Weeks">2-3 Weeks</option>
                      <option value="3-4 Weeks">3-4 Weeks</option>
                      <option value="4+ Weeks">4+ Weeks</option>
                    </select>
                  </div>
                  <div className="col_full">
                    <label htmlFor="Description">Brief Description of Project<small>*</small></label>
                    <textarea
                      id="Description"
                      name="Description"
                      rows="6"
                      placeholder="Enter project description"
                      className="sm-form-control"
                      value={formData.Description}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col_full">
                    <button type="submit" className="button button-3d nomargin">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetQuoteComp;
