import React from 'react';
import { Link } from 'react-router-dom';
import { s3Url } from 'constant';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles['header']}>
    <Link to="/" className={styles['logo-wrapper']} alt="logo">
      <img className={styles['logo']} src={`${s3Url}/image/common/header/logo.png`} alt="logo" />
      <span className={styles['logo-txt']}>Waffle</span>
    </Link>
  </header>

);

export default Header;
