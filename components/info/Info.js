import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./styles/Info.module.css"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Info = () => {
    return (
        <section className={styles.info}>
            <div className={styles.infoContainer}>
                <div className={styles.iconBox}>
                    <FontAwesomeIcon icon={faPhone} className={styles.icon}/>
                    <h3>Phone</h3>
                    <span>+91 8147530047</span>
                </div>
                <div className={styles.iconBox}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                    <h3>Email</h3>
                    <span>chowrakesh1993@gmail.com</span>
                </div>
            </div>
        </section>
    )
}

export default Info