import React from "react";
import {
  HomeOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FaBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="footer">
      <div
        className="footer-icon"
        onClick={() => handleNavigation("/home")}
      >
        <HomeOutlined />
      </div>
      <div
        className="footer-icon"
        onClick={() => handleNavigation("/profile")}
      >
        <HeartOutlined />
      </div>
      <div
        className="footer-icon"
        onClick={() => handleNavigation("/profile")}
      >
        <FaBookmark />
      </div>
      <div
        className="footer-icon"
        onClick={() => handleNavigation("/profile")}
      >
        <UserOutlined />
      </div>
    </div>
  );
};

export default Footer;
