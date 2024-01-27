import React from "react"
import styles from "./styles/About.module.css"
import Image from "next/image";
import Transcend from "../../public/images/transcend.webp"
import classnames from "classnames";

const About = () => {
    return (
        <section className={classnames(styles.about, styles.aboutContainer)}>
            <div className={styles.aboutText}>
                <h1 className={styles.Title}>Transcend The Ordinary</h1>
                <h3 className={styles.SubTitle}>Apartments for large hearts & tall minds.</h3>
                <p className={styles.aboutTextPara}>
                    All you ever want is a place to write your story. A sliver of space in the busy world where your family can find Joy, Solitude, Laughter and Love. 
                    Sarang in true sense, is home which you have dreamt of. Spacious 3, 4 BHK apartments are the Epitome of Luxury living at SARANG. 
                    Nestled in the heart of the city, these apartments offer a serene and tranquil environment for those looking for a refreshing lifestyle through brilliantly crafted homes.
                </p>
                <button type="button" className={styles.button}>Know More</button>
            </div>
            <div className={styles.aboutImage}>
                <Image src={Transcend} height={250}/>
            </div>
        </section>
    )
}

export default About