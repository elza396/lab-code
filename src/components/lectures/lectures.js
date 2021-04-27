import React, {useEffect, useState} from 'react';
import styles from './lectures.module.css';
import {Link} from "react-router-dom";
import {DB} from "../../db";

export function Lectures() {
    const [lectures, setLectures] = useState([]);

    useEffect(() => {
        DB.collection("lectures").get().then((querySnapshot) => {
            const lectures = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                lectures.push({id: doc.id, ...data, date: new Date(data.date.seconds * 1000).toLocaleDateString()});
            });
            setLectures(lectures);
        });
    }, [])

    return (
        <div>
            <p className={styles.title}>Лекции</p>
            {lectures.map((lec) => {
                return (
                    <Link to={`lectures/${lec.id}`} key={lec.id} className={styles.lecture}>
                        <p className={styles.name}>{lec.name}</p>
                        <p className={styles.author}>{lec.author}</p>
                        <p className={styles.date}>{lec.date}</p>
                    </Link>
                )
            })}
        </div>
    );
}