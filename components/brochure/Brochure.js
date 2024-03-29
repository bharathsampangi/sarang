import React from "react"
import styles from "./styles/Brochure.module.css"
import Link from "next/link"

const Brochure = ({link}) => {
    return (
        <section className={styles.brochure}>
            <div className={styles.brochureContainer}>
                <div className={styles.brochureContent}>
                    <div className={styles.brochureText}>
                        <h1 className={styles.Title}>Brochure</h1>
                        <h3 className={styles.SubTitle}>To know more details about this project</h3>
                    </div>
                    <div className={styles.brochureButton}>
                        <button type="button" className={styles.button}>
                            <Link href={link}>
                                Download Brochure
                            </Link>  
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brochure