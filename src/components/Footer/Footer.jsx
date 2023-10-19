import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import "./Footer.css";
import PropTypes from 'prop-types';

const Footer = () => {
  return (
    <footer>
      <div className="rrss-links">
        <a href="https://www.instagram.com/your_instagram_profile" target="_blank" rel="noopener noreferrer">
          <FaInstagram aria-hidden="true" focusable="false" alt="" />
          <span className="visually-hidden">Visítanos en Instagram</span>
        </a>
        <a href="https://www.facebook.com/your_facebook_page" target="_blank" rel="noopener noreferrer">
          <FaFacebookF aria-hidden="true" focusable="false" alt="" />
          <span className="visually-hidden">Visítanos en Facebook</span>
        </a>
        <a href="https://www.twitter.com/your_twitter_profile" target="_blank" rel="noopener noreferrer">
          <FaTwitter aria-hidden="true" focusable="false" alt="" />
          <span className="visually-hidden">Visítanos en X</span>
        </a>
      </div>
      <p>Síguenos en nuestras RRSS</p>
    </footer>
  );
};
export default Footer;
