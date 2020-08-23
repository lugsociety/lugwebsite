import React from "react";
import logo from "./images/logo.png";
import Sample from "./images/Sample.jpg";

function Foot() {
  return (
    <div>
      <div className="footer">
        <div id="one">
          <img className="last" src={logo} alt="click" />
          <div>
            To Know More About Us,
            <a href="#about">click</a>here
          </div>
        </div>
        <div id="three">
          <div className="address">Contact Us</div>
          <div className="address-footer">@9876543211</div>

          <div className="address-footer">email:abc@gmail.com</div>
        </div>
        <div id="two">
          <div className="address">Address</div>
          <div className="address-footer">
            Thapar Institude of Engineering and Technology
          </div>
          <div className="address-footer">Patiala,144007</div>
        </div>
      </div>
      <hr
        style={{
          color: "white",
          backgroundColor: "grey",
          height: 2,
          alignItems: "center",
        }}
      />

      <div>
        <div className="copyright address-footer">
          copyright LINUX USER GROUP 2020
        </div>
        <div className="connect">
          <div id="links">
            <div className="address">Connect with us.</div>
            <div id="social-icons">
              <img src={Sample} alt="A google plus icon" />
              <img src={Sample} alt="A facebook icon" />
              <img src={Sample} alt="A linkedin icon" />
              <img src={Sample} alt="A twitter icon" />
              <img src={Sample} alt="An instagram icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foot;
