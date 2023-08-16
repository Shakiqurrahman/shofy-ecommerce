import React from "react";
import "./Contact.css";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import {MdEmail} from "react-icons/md";
 
const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-header">
        <h1>How Can We Help You??</h1>
      </div>

    <div className="contact-body">
    <div className="contact">
        <div className="section-header">
          <div className="sec-container">
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis dignissimos eaque doloremque, nulla mollitia facilis
              temporibus ullam voluptas nostrum consequatur? Fugiat vitae sint
              quo est eveniet perspiciatis eum asperiores ipsam.
            </p>
          </div>
        </div>

        <div className="sec-container">
          <div className="row">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FaHome size={30}/>
                </div>

                <div className="contact-info-content">
                  <h4>Address</h4>
                  <p>
                    3100 Sylhet Sadar,
                    <br /> Bangladesh
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                <FaPhoneAlt  size={25}/>
                </div>

                <div className="contact-info-content">
                  <h4>Phone</h4>
                  <p>+8801761-094636</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MdEmail size={30}/>
                </div>

                <div className="contact-info-content">
                  <h4>Email</h4>
                  <p>rahmanshakiqur@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <div  id="contact-form">
                <h2>Send Message</h2>
                <div className="input-box">
                  <input type="text" required name="" />
                  <span>Full Name</span>
                </div>

                <div className="input-box">
                  <input type="email" required name="" />
                   <span>Email</span>
                </div>

                <div className="input-box">
                  <textarea required name=""></textarea>
                  <span>Type your Message...</span>
                </div>

                <div className="input-box">
                  <input type="submit" value="Send" name="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
