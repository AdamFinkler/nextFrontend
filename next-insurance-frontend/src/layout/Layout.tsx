import banner from "../assets/banner.png";
import { ILayout } from "./types";
import "./style.css";
import SearchField from "../common-components/search-field/SearchField";
import favIcon from "../assets/favicon.png";
import facebookIcon from "../assets/facebook-share-icon.png";
import twitterIcon from "../assets/twitter-share-icon.png";
import linkedinIcon from "../assets/linkedin-share-icon.png";
import youtubeIcon from "../assets/youtube-share-icon.png";
import instagramIcon from "../assets/instagram-share-icon.png";

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <div className="layout-top-bar">
        <img className="banner" src={banner} />
      </div>

      <div className="layout-content">{children}</div>

      <div className="layout-footer">
        <img src={favIcon} className="fav-icon" />

        <h1 className="contact-us">Contact Us</h1>
        <div className="contact-info-wrapper">
          <p className="contact-info">support@nextmovies.com</p>
          <p className="contact-info">Mon – Fri | 6:00am – 5:00 pm PT</p>
        </div>

        <div className="social-media-icons-wrapper">
          <img className="social-media-icon" src={facebookIcon} />
          <img className="social-media-icon" src={linkedinIcon} />
          <img className="social-media-icon" src={twitterIcon} />
          <img className="social-media-icon" src={instagramIcon} />
          <img className="social-media-icon" src={youtubeIcon} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
