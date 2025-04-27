import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  // Step 1: Create one state object to hold all input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Step 2: Create state to track validation error
  const [error, setError] = useState("");

  // Step 3: Handle input changes dynamically
  function handleChange(event) {
    const { name, value } = event.target; // get name of input and its new value

    // Update only the specific field inside formData
    setFormData((prevData) => ({
      ...prevData, // keep existing values
      [name]: value, // update only the field that changed
    }));
  }

  // Step 4: Handle form submission with validation
  function handleSubmit(event) {
    event.preventDefault(); // stop page refresh

    // Validation: name and email are required
    if (!formData.name || !formData.email) {
      setError("Please fill in your name and email.");
      return;
    }

    // If valid, clear error and simulate submission
    setError("");
    alert(
      `Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
  }

  return (
    <div className="form-preview-wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <br />

        {/* Show error message if exists */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Send</button>
      </form>

      <div className="live-preview">
        <hr />
        <h3>Live Preview</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Message: {formData.message}</p>
      </div>
    </div>
  );
}

export default ContactForm;
