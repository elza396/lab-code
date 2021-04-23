import React, {useCallback, useEffect, useState} from 'react';
import styles from './lecture.module.css';
import positiveSmiley from './../../res/images/positive.svg';
import neutralSmiley from './../../res/images/neutral.svg';
import negativeSmiley from './../../res/images/negative.svg';
import {useParams} from "react-router";
import {DB} from "../../db";


export function Lecture() {
    const {lectureId} = useParams();
    const [lecture, setLecture] = useState(null);

    const loadLecture = useCallback((lectureId) => {
        const docRef = DB.collection("lectures").doc(lectureId);

        docRef.get().then((doc) => {
            if (doc.exists) {
                const data = doc.data();
                setLecture({id: doc.id, ...data, date: new Date(data.date.seconds * 1000).toLocaleDateString()});
            } else {
                console.log("Нет такой лекции!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    },[])

    useEffect(() => {
        loadLecture(lectureId);
    }, [lectureId, loadLecture])

    console.log(lecture);
    if (!lecture) {
        return null;
    }

    function clickSmiley(votesType) {
        DB.collection("lectures").doc(lectureId).update({
            [votesType]: ++lecture[votesType]
        })
            .then(() => {
                loadLecture(lectureId);
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
    }

    return (
        <div>
            <p className={styles.name}>{lecture.name}</p>
            <div className={styles.smileys}>
                <img onClick={() => clickSmiley('positiveVotes')} className={styles.smiley} src={positiveSmiley} alt="positive"/>
                <img onClick={() => clickSmiley('neutralVotes')} className={styles.smiley} src={neutralSmiley} alt="neutral"/>
                <img onClick={() => clickSmiley('negativeVotes')} className={styles.smiley} src={negativeSmiley} alt="negative"/>
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

