import React from "react";

function Contact() {
  return (
      <div className="contactPage">
        <div className="title">
          Contact Us
        </div>
        <div className="details">
          <div className="social">
          <i class='bx bxl-twitter'></i>
          <i class='bx bxl-meta' ></i>
          <i class='bx bxl-instagram' ></i>
          <i class='bx bx-envelope' ></i>
          <i class='bx bxl-whatsapp' ></i>
          </div>

          <div className="location">
            <div className="location-icon">
            <i class='bx bx-location-plus'></i>
            </div>
            <div className="location-name">
            No. 7, Section 5, Xinyi Road, Xinyi District
            </div>
          </div>
        </div>
      </div>
  );
}

export default Contact;
