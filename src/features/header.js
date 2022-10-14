import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { FaMicrophone, FaRegCommentDots, FaIceCream } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './header.css';

const Header = ({ children }) => (
  <main>
    <header className="head">
      <NavLink to="/" className="link-item">
        {' '}
        <IoIosArrowBack />
        {' '}
      </NavLink>
      <p>Best Technology Posts</p>
      <div className="innerbox">
        <p className="headicon"><FaMicrophone /></p>
        <p className="headicon"><FaIceCream /></p>
        <p className="headicon"><FaRegCommentDots /></p>
      </div>
    </header>
    {children}
  </main>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
