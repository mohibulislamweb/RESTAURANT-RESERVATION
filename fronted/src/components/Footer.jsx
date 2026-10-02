import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const phoneNumber = "8801853389495"; 
  const formattedNumber = "+880 1853-389495";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hello Engr. Mohibul Islam I reached out from TastyBites website (${formattedNumber}).`
  )}`;

  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left" style={{ display: "flex", alignItems: "center" }}>
            <div className="left" style={{ display: "flex", alignItems: "center" }}>
                 𝓣𝓪𝓼𝓽𝔂<span style={{ color: "#ff4757" }}>𝓑𝓲𝓽𝓮𝓼</span>
              </div>
          </div>
          <div className="right">
             <p>Madani Ave, Dhaka</p>
            <p>Open: 9:00 AM - 10:00 PM</p>
            <p>Phone: +880 1853-389495</p>
          </div>
        </div>
        <div className="banner">
          <div 
            className="left" 
            style={{ 
              width: "100%", 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              gap: "12px",
              flexWrap: "wrap"
            }}
          >
            <p style={{ margin: 0, fontWeight: "500" }}>
  Developed By{" "}
  <span style={{ color: "#007bff", fontWeight: "bold" }}>
    Engr. Mohibul Islam
  </span>
</p>
            <a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "#25D366",
    color: "#fff",
    padding: "6px 14px",
    borderRadius: "20px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "bold"
  }}
>
  <FaWhatsapp style={{ fontSize: "16px" }} /> Contact
</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;