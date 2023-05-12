import React from "react";

export default function Header() {
  return (
    <div className="header">
      <ul className="header__left">
        <li className="header__left__content">
          <a href="" className="header__left-link">
            Chat with us
          </a>
        </li>
        <li className="header__left__content">
          <a href="phone" className="header__left-text">
            +420 336 775 664
          </a>
        </li>
        <li className="header__left__content">
          <a href="email" className="header__left-text">
            info@freshnesecom.com
          </a>
        </li>
      </ul>
      <ul className="header__right">
        <li className="header__right__content">
          <a href="#" className="header__right-item">
            Blog
          </a>
        </li>
        <li className="header__right__content">
          <a href="#" className="header__right-item">
            About Us
          </a>
        </li>
        <li className="header__right__content">
          <a href="#" className="header__right-item">
            Careers
          </a>
        </li>
      </ul>
    </div>
  );
}
