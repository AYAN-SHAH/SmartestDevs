"use client";
import React, { useState } from "react";
import { useEffect } from "react";

const FormWidget = () => {
  const [classRecord, setClassRecord] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    address: "",
    city: "",
    country: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/insertcontact`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent successfully.");
        console.log("Contact inserted successfully", data.data);
        // window.location.reload();
      } else {
        const result = await response.json();
        alert(`Error: ${result.error || "Failed to submit the form."}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong! Please try again later.");
    }
  };

  // useEffect(() => {
  //   fetch("/api/classes")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setClassRecord(data);
  //       console.log(data);
  //     })
  //     .catch(error => console.error("Error fetching data:", error));
  // }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });

  //   // Simple validation
  //   const validationErrors = {};
  //   if (name === 'Name' && !/^[a-zA-Z\s]{3,50}$/.test(value)) {
  //     validationErrors.Name = '*Please enter a valid name (3-50 characters, no special symbols or numbers).';
  //   } else if (name === 'Email' && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
  //     validationErrors.Email = '*Please enter a valid email address.';
  //   } else if (name === 'Description' && value.length > 300) {
  //     validationErrors.Description = '*Message cannot exceed 300 characters.';
  //   }
  //   setErrors(validationErrors);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (Object.keys(errors).length === 0 && formData.Name && formData.Email && formData.Description) {
  //     // Submit form logic here
  //     console.log('Form submitted:', formData);
  //   } else {
  //     console.log('Validation errors:', errors);
  //   }

  return (
    <form onSubmit={handleSubmit} className="form-widget">
      <div className="row">
        <div className="col-md-4 mb-3">
          <label htmlFor="txtName">
            Full Name <small>*</small>
          </label>
          <input
            autoComplete="off"
            // className={`custom-input ${formData.Name && !errors.Name ? 'valid' : 'invalid'}`}
            id="txtName"
            name="name"
            placeholder="Enter Full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {/* <span className="text-danger">{errors.Name}</span> */}
        </div>

        <div className="col-md-4 mb-3">
          <label htmlFor="txtEmail">
            Email Address <small>*</small>
          </label>
          <input
            autoComplete="off"
            // className={`custom-input ${formData.Email && !errors.Email ? 'valid' : 'invalid'}`}
            id="txtEmail"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            type="email"
            required
          />
          {/* <span className="text-danger">{errors.Email}</span> */}
        </div>

        <div className="col-md-4 mb-3">
          <label htmlFor="phone">
            Phone Number <small>*</small>
          </label>
          <input
            autoComplete="off"
            // className={`custom-input ${formData.phone && !errors.phone ? 'valid' : 'invalid'}`}
            id="numphone"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {/* <span className="text-danger">{errors.Phone}</span> */}
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="txtName">
            Address <small>*</small>
          </label>
          <input
            autoComplete="off"
            // className={`custom-input ${formData.Name && !errors.Name ? 'valid' : 'invalid'}`}
            id="txtName"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          {/* <span className="text-danger">{errors.Name}</span> */}
        </div>

        <div className="col-md-3 mb-3">
          <label htmlFor="txtName">
            city<small>*</small>
          </label>
          <input
            autoComplete="off"
            // className={`custom-input ${formData.Name && !errors.Name ? 'valid' : 'invalid'}`}
            id="txtName"
            name="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          {/* <span className="text-danger">{errors.Name}</span> */}
        </div>

        <div className="col-md-3 mb-3">
          <label htmlFor="txtName">
            country<small>*</small>
          </label>
          <input
            autoComplete="off"
            // className={`custom-input ${formData.Name && !errors.Name ? 'valid' : 'invalid'}`}
            id="txtName"
            name="country"
            placeholder="Enter your country"
            value={formData.country}
            onChange={handleChange}
            required
          />
          {/* <span className="text-danger">{errors.Name}</span> */}
        </div>
      </div>

      <div className="col_full mb-3">
        <label htmlFor="txtDescription">
          Message <small>*</small>
        </label>
        <textarea
          // className={`custom-input ${formData.Description && !errors.Description ? 'valid' : 'invalid'}`}
          id="txtDescription"
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          required
        />
        {/* <span className="text-danger">{errors.Description}</span> */}
      </div>

      <div className="col_full mb-3">
        <button className="button button-3d nomargin" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormWidget;
