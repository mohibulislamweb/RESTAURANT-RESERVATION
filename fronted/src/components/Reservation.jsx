import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://restaurant-backend-tocc.onrender.com/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img src="/reservation.png" alt="res" style={{ width: "100%", maxWidth: "500px", height: "auto" }} />
        </div>
        <div className="banner" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          {/* Box height, width o padding ekhane bariye dewa hoise */}
          <div 
            className="reservation_form_box" 
            style={{ 
              width: "100%", 
              maxWidth: "520px", 
              padding: "40px 30px", 
              boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
              borderRadius: "16px",
              backgroundColor: "#ffffff"
            }}
          >
            <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>MAKE A RESERVATION</h1>
            <p style={{ marginBottom: "25px", color: "#666" }}>For Further Questions, Please Call</p>
            <form onSubmit={handleReservation}>
              <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{ width: "100%", padding: "12px", borderRadius: "6px" }}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  style={{ width: "100%", padding: "12px", borderRadius: "6px" }}
                />
              </div>
              <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{ width: "100%", padding: "12px", borderRadius: "6px" }}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  style={{ width: "100%", padding: "12px", borderRadius: "6px" }}
                />
              </div>
              <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: "100%", padding: "12px", borderRadius: "6px" }}
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ width: "100%", padding: "12px", borderRadius: "6px" }}
                />
              </div>
              <button type="submit" style={{ width: "100%", padding: "14px", marginTop: "10px", cursor: "pointer" }}>
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;