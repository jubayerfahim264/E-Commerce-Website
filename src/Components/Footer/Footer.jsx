import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>
              We are dedicated to providing the best services to our customers.
              Stay connected with us for amazing updates!
            </p>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>
              📍 123 Main Street, Anytown, USA <br />
              📞 (123) 456-7890 <br />
              ✉️ info@company.com
            </p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
        <p className="footer-bottom">
          &copy; 2025 Shopee | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
