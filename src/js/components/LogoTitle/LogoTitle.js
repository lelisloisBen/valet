import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LogoTitle.module.css';

import logo from '../../../img/logo.png';

const LogoTitle = () => {
    return (
        <section className={styles.section}>
            <Link to="/">
                <img className={styles.logo} src={logo} alt="sharesensation"/>
            </Link>
        </section>
    );
};

export default LogoTitle;