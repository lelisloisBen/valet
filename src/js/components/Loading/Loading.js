import React from 'react';
import styles from './Loading.module.css';

import valetLogo from '../../../img/logo.png';

const Loading = () => {
    return (
        <div className={styles.section}>
            <div className={styles.shareLoading}>
                <img src={valetLogo} alt="valet logo"/>
            </div>
        </div>
    );
};

export default Loading;