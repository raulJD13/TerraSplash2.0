import { HomeOutlined, SearchOutlined, HeartOutlined, BookOutlined, UserOutlined } from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon">
        <HomeOutlined />
      </div>
      <div className="footer-icon">
        <SearchOutlined />
      </div>
      <div className="footer-icon">
        <HeartOutlined />
      </div>
      <div className="footer-icon">
        <BookOutlined />
      </div>
      <div className="footer-icon">
        <UserOutlined />
      </div>
    </div>
  );
};

export default Footer;
