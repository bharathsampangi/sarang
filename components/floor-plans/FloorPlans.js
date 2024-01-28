import React from "react"
import styles from "./styles/FloorPlans.module.css"
import Image from "next/image";
import FloorPlansImage from "../../public/images/2-BHK-Smart-West-1536x1536.webp"
import Link from "next/link";

const FloorPlans = () => {
    return (
        <section className={styles.floorPlans}>
            <div>
                <h1 className={styles.Title}>Floor Plans</h1>
                <h3 className={styles.SubTitle}>A Home Like No Other</h3>
            </div>
            <div className={styles.floorPlansContainer}>
                <div className={styles.floorPlansImage}>
                    <Image src={FloorPlansImage} height={450} className={styles.image}/>
                </div>
                <div className={styles.floorPlansText}>
                    <p className={styles.floorPlansTextPara}>
                    A seamless blend of aesthetics and practicality, SARANG homes cater to the refined preferences of modern buyers. 
                    These luxurious 2, 3, and 4 BHK homes boast an exquisite facade and are thoughtfully designed. With no common walls, you’re assured of complete privacy, allowing you to relish moments of peace or celebrate occasions without the worry of disturbing neighbors.
                    Aligned with true Indic Vastu, each unit invites an abundance of natural light and embraces excellent ventilation, creating a harmonious living environment.
                    </p>
                    <button type="button" className={styles.button}>
                        <Link href="/project">
                            Know More
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FloorPlans