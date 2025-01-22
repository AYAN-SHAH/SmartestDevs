"use client";
import React from "react";
import CountryPhone from "./countryPhone";
import ContactForm from "./contactForm";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>MainPage Smartest Developers | Software & IT Solutions</title>
        <meta
          name="description"
          content="MainPage  Smartest Developers specializes in custom software, web, and mobile app development services."
        />
        <meta
          name="keywords"
          content="MainPage , software, IT solutions, mobile apps, custom development,"
        />
      </Head>
      <section className="banner-img">
        <img
          src="/template/WebAssets/img/common/headers/contact-us.jpg"
          alt="Contact Smartest Developers company"
          className="img__header"
        />
      </section>
      <section id="content" style={{ marginBottom: 0 }}>
        <div className="content-wrap">
          <div className="container clearfix">
            {/* Post Content
          ============================================= */}
            <div className="col_full nobottommargin">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <div className="row mb-5">
                    <div className="col-lg-12">
                      <div
                        data-animate="fadeInUp"
                        className="fadeInUp animated"
                      >
                        <h3 className="mb-0">Our Locations</h3>
                        <div className="line my-3" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="nobottommargin fadeInUp animated"
                        data-animate="fadeInUp"
                      >
                        <address className="mb-3">
                          <br />
                        </address>
                        <abbr title="Phone Number">
                          <strong>Mobile:</strong>
                        </abbr>
                        <abbr title="Email Address">
                          <strong>Email:</strong>
                        </abbr>{" "}
                        <a href="mailto:sales@smartestdevelopers.com">
                          sales@smartestdevelopers.com
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="nobottommargin fadeInUp animated"
                        data-animate="fadeInUp"
                        data-delay={150}
                      >
                        <address className="mb-3"></address>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      {/* ================ Google Map =============== */}
                      <div
                        data-animate="fadeInUp"
                        className="google-map fadeInUp animated"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div data-animate="fadeInUp" className="fadeInUp animated">
                    <h3 className="mb-0">Get in Touch with us</h3>
                    <div className="line my-3" />
                  </div>
                  <div data-animate="fadeInUp" className="fadeInUp animated">
                    {/* <div className="form-widget">
                <div className="form-result" />
                <input data-val="true" data-val-required="Please Provide Country Code" id="hdntxtCountryCode" name="CountryCode" type="hidden" defaultValue />
                <input id="hdntxtCountryShortCode" name="CountryShortCode" type="hidden" defaultValue />
                <div className="form-process" />
                <div className="col_full mb-3">
                  <label htmlFor="template-contactform-name">Full Name <small>*</small></label>
                  <input autoComplete="off" className="txtAlphaEnAr sm-form-control text-box single-line" data-val-length="Minimum is 3 and Max is 50 characters"  data-val-regex="Special characters and Numbers are not allowed." data-val-regex-pattern="^[a-zA-Z\s]+$" data-val-required="*Please enter name" id="txtName" maxLength={100} name="Name" placeholder="Enter Full name" type="text" defaultValue />
                  <span className="field-validation-valid text-danger" data-valmsg-for="Name" data-valmsg-replace="true" />
                  <span id="ErrName" style={{display: 'none'}} className="text-danger g-font-size-12">Please enter your full name</span>
                </div>
                <div className="col_full mb-3">
                  <label htmlFor="template-contactform-email">Email Address<small>*</small></label>
                  <input autoComplete="off" className="sm-form-control text-box single-line" data-val-email="The Email field is not a valid e-mail address."  id="txtEmail" maxLength={100} name="Email" placeholder="Enter email address" type="email" defaultValue />
                  <span className="field-validation-valid text-danger" data-valmsg-for="Email" data-valmsg-replace="true" />
                  <span id="ErrEmail" style={{display: 'none'}} className="text-danger g-font-size-12">Please enter your email address</span>
                </div>
                <div className="col_full mb-3">
                  <label htmlFor="template-contactform-service mb-0px">Phone Number<small>*</small></label>
                    <CountryPhone/>
                  <span className="field-validation-valid text-danger" data-valmsg-for="Phone" data-valmsg-replace="true" />
                  <span id="ErrPhone" style={{display: 'none'}} className="text-danger">*Please enter your phone number</span>
                 
                </div>
                <div className="clear" />
                <div className="col_full mb-3">
                  <label htmlFor="template-contactform-message">Message <small>*</small></label>
                  <textarea className="sm-form-control" cols={30} data-val="true" data-val-length="Max length is 300 characters." data-val-length-max={300} id="txtDescription" name="Description" rows={6} defaultValue={""} />
                  <span className="field-validation-valid text-danger" data-valmsg-for="Description" data-valmsg-replace="true" />
                  <span id="ErrMessage" style={{display: 'none'}} className="text-danger g-font-size-12">Please enter brief description</span>
                </div>
                <div className="clear" />
                <div className="col_full mb-3">
                  <div id="reCaptchaContactUs" className="g-recaptcha" data-sitekey="6LfqWbwUAAAAACLt-rjw81t__hUXxcYk9UE9aItD" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback" />
                  <input className="form-control d-none" data-recaptcha="true" data-error="Please complete the Captcha" required />
                  <div id="RecaptchaError" className="text-danger g-font-size-12 help-block with-errors" />
                  <input type="hidden" className="hiddenRecaptcha" name="ContactUs_hiddenRecaptcha" id="ContactUs_hiddenRecaptcha" />
                </div>
                <div className="col_full mb-3">
                  <button className="button button-3d nomargin" onClick="captchAdd();" type="submit" id="template-contactform-submit" name="template-contactform-submit" value="submit">Submit</button>
                </div>
                <input type="hidden" name="prefix" defaultValue="template-contactform-" />
              </div> */}

                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
