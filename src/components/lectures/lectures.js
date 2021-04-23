import React from 'react';
import styles from './lectures.module.css';
import {Link} from "react-router-dom";

export function Lectures() {

    const lectures = [
        {
            name: 'Первая лекция',
            author: 'Федоров Л.А.',
            date: '11.02.21',
            positiveVotes: 3,
            neutralVotes: 5,
            negativeVotes: 2,
            id: 1
        },
        {
            name: 'Вторая лекция',
            author: 'Сидорова Л.А.',
            date: '01.03.21',
            positiveVotes: 6,
            neutralVotes: 3,
            negativeVotes: 1,
            id: 2
        },
        {
            name: 'Третья лекция',
            author: 'Петров Л.А.',
            date: '02.03.21',
            positiveVotes: 1,
            neutralVotes: 5,
            negativeVotes: 4,
            id: 3
        },
        {
            name: 'Четвертая лекция',
            author: 'Павлов М.К.',
            date: '10.03.21',
            positiveVotes: 8,
            neutralVotes: 0,
            negativeVotes: 2,
            id: 4
        }
    ]

    return (
        <div>
            <p className={styles.title}>Лекции</p>
            {lectures.map((lec) => {
                return (
                    <Link to={`lectures/${lec.id}`} key={lec.id}>
                        <div className={styles.lecture}>
                            <p className={styles.name}>{lec.name}</p>
                            <p className={styles.author}>{lec.author}</p>
                            <p className={styles.date}>{lec.date}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}