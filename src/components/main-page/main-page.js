import React from 'react';
import styles from './main-page.module.css';
import {Link} from "react-router-dom";


export function MainPage() {

    return (
        <div>
            <Link to={'lectures'}>
                <p className={styles.text}>Перейти к лекциям</p>
            </Link>
        </div>
    );
}