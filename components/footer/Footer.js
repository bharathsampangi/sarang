import Link from "next/link"
import styles from "./styles/Footer.module.css"
import Image from "next/image"
import Logo from "../../public/images/Sarang-Logo-White-1.png"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerOptions}>
                <div className={styles.footerOption1}>
                    <Image src={Logo} height={200}/>
                </div>
                <div className={styles.footerOption2}>
                    <div>
                        <div className={styles.head}>
                            CONTACT US
                        </div>
                        <div className={styles.text}>
                            +91 8147530047<br/>
                            chowrakesh1993@gmail.com
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.footerEnd}>
                <div></div>
                <div>Terms & Conditions</div>
            </div>
        </footer>
    )
}