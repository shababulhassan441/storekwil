"use client";
import React, { useState } from "react";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    telephone: "",
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacyPolicy) {
      alert("Please agree to the Privacy Policy.");
      return;
    }
    console.log("Form Submitted", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        // background: "linear-gradient(to right, #1c2663, #1a2a78)",
        padding: "20px",
        borderRadius: "8px",
        color:"white"
      }}
    >
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <div style={{ flex: 1 }}>
          <label htmlFor="firstName" style={{ fontWeight: "bold" }}>
            * FIRST NAME
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="lastName" style={{ fontWeight: "bold" }}>
            * LAST NAME
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <div style={{ flex: 1 }}>
          <label htmlFor="email" style={{ fontWeight: "bold" }}>
            * EMAIL ADDRESS
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="company" style={{ fontWeight: "bold" }}>
            COMPANY
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <div style={{ flex: 1 }}>
          <label htmlFor="country" style={{ fontWeight: "bold" }}>
            * COUNTRY
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            required
          >
            <option value="" disabled>
              Select Country
            </option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            {/* Add more countries as needed */}
          </select>
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="telephone" style={{ fontWeight: "bold" }}>
          * TELEPHONE
        </label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          required
        />
      </div>

      {/* <span className=" !flex items-center " style={{ marginBottom: "15px" }}>
          <input
            type="checkbox"
            name="privacyPolicy"
            checked={formData.privacyPolicy}
            onChange={handleChange}
            className="inline-block" // Adds margin to the right of the checkbox for spacing
          />
          <p className="m-0 inline-block">
            By clicking this box you agree to our Privacy Policy
          </p>
      </span> */}

      <button
        type="submit"
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Sign Up
      </button>
    </form>
  );
};

export default WaitlistForm;
