import React from "react";
import styles from "./styles/Display.module.css"

const Display = () => {
    return (
        <section className={styles.DisplayContainer}>
            <div className={styles.DisplayBlock}>
                <ul className={styles.List}>
                    <li>
                        <div className={styles.ListHeader}>
                            272 
                        </div>
                        <div className={styles.ListText}>
                            Units
                        </div>
                    </li>
                    <li>
                        <div className={styles.ListHeader}>
                            2 
                        </div>
                        <div className={styles.ListText}>
                            Towers
                        </div>
                    </li>
                    <li>
                        <div className={styles.ListHeader}>
                            4.26 
                        </div>
                        <div className={styles.ListText}>
                            Acres
                        </div>
                    </li>
                    <li>
                        <div className={styles.ListHeader}>
                            25+ 
                        </div>
                        <div className={styles.ListText}>
                            Amenities
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Display