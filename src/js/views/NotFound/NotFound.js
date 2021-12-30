import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <section className={styles.section}>
            <div className={styles.title}>
                Page Not Found
            </div> 
            <div className={styles.title404}>
                404
            </div> 
            <div className={styles.title}>
                SORRY
            </div>
            <div className={styles.text}>
                It looks like that page no longer exist. Would you like to go to homepage
            </div> 
            <div className="text-center mt-5">
                <Link to='/'>
                    <button className={styles.homeBtn}>
                        Home Page
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default NotFound;