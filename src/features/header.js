import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting, AiOutlineSearch } from 'react-icons/ai';
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
      <p>Most viewed</p>
      <div className="innerbox">
        <p className="headicon"><FaMicrophone /></p>
        <p className="headicon"><AiOutlineSetting /></p>
        <p className="headicon"><AiOutlineSearch /></p>
      </div>
    </header>
    {children}
  </main>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;