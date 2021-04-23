import React from 'react';
import styles from './lecture.module.css';
import positiveSmiley from './../../res/images/positive.svg';
import neutralSmiley from './../../res/images/neutral.svg';
import negativeSmiley from './../../res/images/negative.svg';


export function Lecture() {
    const lecture = {
        name: 'Первая лекция',
        author: 'Федоров Л.А.',
        date: '11.02.21',
        positiveVotes: 3,
        neutralVotes: 5,
        negativeVotes: 2,
        id: 1
    };

    return (
        <div>
            <p className={styles.name}>{lecture.name}</p>
            <div className={styles.smileys}>
                <img className={styles.smiley} src={positiveSmiley} alt="positive"/>
                <img className={styles.smiley} src={neutralSmiley} alt="neutral"/>
                <img className={styles.smiley} src={negativeSmiley} alt="negative"/>
            </div>
            <div className={styles.statistic}>
                <p className={styles.text}>Статистика</p>
                <div className={styles.table}>
                    <div className={styles.table__row}>
                        <img src={positiveSmiley} alt="positiveSmiley"/>
                        <p>{lecture.positiveVotes}</p>
                    </div>
                    <div className={styles.table__row}>
                        <img src={neutralSmiley} alt="neutralSmiley"/>
                        <p>{lecture.neutralVotes}</p>
                    </div>
                    <div className={styles.table__row}>
                        <img src={negativeSmiley} alt="negativeSmiley"/>
                        <p>{lecture.negativeVotes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

