import React from "react";
import Sample from "./images/Sample.jpg";

function Footer() {
  return (
    <div>
      <footer id="footer-section">
        <div className="container">
          <div id="branding">
            <h3 className="alt-font">Plain & Simple</h3>
            <p>
              Here we can write about the special works or achievements.Here we
              can write about the special works or achievements.Here we can
              write about the special works or achievements.Here we can write
              about the special works or achievements.
            </p>
            <h5 className="alt-font">Copyright 2020</h5>
          </div>
          <div id="links">
            <h3>Connect with us.</h3>
            <div id="social-icons">
              <img src={Sample} alt="A google plus icon" />
              <img src={Sample} alt="A facebook icon" />
              <img src={Sample} alt="A linkedin icon" />
              <img src={Sample} alt="A twitter icon" />
              <img src={Sample} alt="An instagram icon" />
            </div>
            <nav>
              <ul>
                <li>
                  <h6>Sponsors</h6>
                </li>
                <li>
                  <a href="/">Company1</a>
                </li>
                <li>
                  <a href="/">Company2</a>
                </li>
                <li>
                  <a href="/">Company3</a>
                </li>
                <li>
                  <a href="/">Company4</a>
                </li>
                <li>
                  <a href="/">Company5</a>
                </li>
                <li>
                  <a href="/">COmpany6</a>
                </li>
              </ul>
              <ul>
                <li>
                  <h6>Navigation</h6>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">Policy</a>
                </li>
                <li>
                  <a href="/">Get Started</a>
                </li>
                <li>
                  <a href="/">Back to Top</a>
                </li>
              </ul>
              <ul>
                <li>
                  <h6>Company</h6>
                </li>
                <li>
                  <a href="/">Terms of Service</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/">Referral Program</a>
                </li>
                <li>
                  <a href="/">Jobs</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
