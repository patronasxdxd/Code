import React from 'react';
import Tilt from 'react-parallax-tilt';

import styles from '../styles';
import { allCards, hscard2,legendCardBack } from '../assets';
import { hscards } from '../assets';
import { useGlobalContext } from '../context';

/* global BigInt */



const generateRandomCardImage = () => allCards[Math.floor(Math.random() * (allCards.length - 1))];

// const img1 = allCards[localStorage.getItem('outfit')-1];
const img2 = generateRandomCardImage();




const HearthstoneCard = ({ card, title, restStyles, cardRef, playerTwo,img1 }) => (

  <Tilt>
      {/* <img src={playerTwo ? img2 : img1} alt="ace_card" className={styles.cardImg} /> */}

      
    <div ref={cardRef} className={`${styles.cardContainer} ${restStyles}`}>
      <img src={playerTwo? hscard2[Number(card.id)-1] :legendCardBack} alt="ace_card" className={styles.cardImg} />



      <div className={`${styles.cardPointContainer} sm:right-[20.2%] right-[15%] ${styles.flexCenter}`}>
        <p className={`${styles.cardPoint} text-yellow-400`}>{playerTwo? Number(card.attack) : ""}</p>
      </div>

      <div className={`${styles.cardPointContainer} sm:left-[21.2%] left-[22%] ${styles.flexCenter}`}>
        <p className={`${styles.cardPoint} text-yellow-400`}>{playerTwo? Number(card.health) : ""}</p>
      </div>
   

      

      <div className={`${styles.cardTextContainer} ${styles.flexCenter}`}>
        <p className={styles.cardText}>{title}</p>
      </div>
    </div>
  </Tilt>
);

export default HearthstoneCard;
