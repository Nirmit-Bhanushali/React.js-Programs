import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contact: "",
    course: ""
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required!";
    if (!formData.age) newErrors.age = "Age is required!";
    if (!formData.contact) newErrors.contact = "Contact is required!";
    if (!formData.course) newErrors.course = "Course is required!";
    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Registration Successful!");
      console.log("Form Data:", formData);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Student Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        {/* Age */}
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
        </div>

        {/* Contact */}
        <div>
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
          {errors.contact && <p style={{ color: "red" }}>{errors.contact}</p>}
        </div>

        {/* Course */}
        <div>
          <label>Course:</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
          />
          {errors.course && <p style={{ color: "red" }}>{errors.course}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
