import React from "react";
import "./Contact.css"; // Optional: import your CSS styles

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>If you would like to get in touch, feel free to reach out through any of the following methods:</p>
      <ul>
        <li>Email: <a href="mailto:your-@example.com">ghanshayam8980@example.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/Ghanshayamsharma" target="_blank" rel="noopener noreferrer">Your LinkedIn</a></li>
        <li>GitHub: <a href="https://github.com/Ghanshayamsharma" target="_blank" rel="noopener noreferrer">Your GitHub</a></li>
      </ul>
      <h2>Contact Form</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
