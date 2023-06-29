import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        {/* <img
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
          alt=""
        /> */}
        <img className="nav__main__logo" src="./img/LOGO 7.png" />
        {/* <img
          className="nav__avatar"
          src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1725655669.jpg"
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default Nav;
