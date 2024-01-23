import styles from "./styles/Hero.module.css"
import Image from "next/image"
import Folium from "../../public/images/folium-2.png"
import Link from "next/link"

export default function Hero() {
    return (
        <section>
            <div className={styles.landingContainer}>
                <div className={styles.landingMain}></div>
                <div className={styles.landingQuery}>
                    <section className={styles.enquire}>
                        <h3 className={styles.header}>Request A Callback</h3>
                        <form
                            className={styles.form}
                            action="https://api.web3forms.com/submit"
                            method="POST"
                        >
                            <input
                                type="hidden"
                                name="access_key"
                                value="ec20fcf4-3183-4ea2-b3cb-2f8096c34440"
                            />
                            <div className={styles.formElement}>
                                <label className={styles.label}>
                                    Full Name
                                </label>
                                <input type="text" name="full_name" required />
                            </div>
                            <div className={styles.formElement}>
                                <label className={styles.label}>Phone</label>
                                <input
                                    type="number"
                                    name="phone_number"
                                    required
                                />
                            </div>
                            <div className={styles.formElement}>
                                <label className={styles.label}>Email</label>
                                <input type="email" name="email" required />
                            </div>
                            <div className={styles.formElement}>
                                <label className={styles.label}>Message</label>
                                <textarea name="questions" />
                            </div>
                            <button type="submit" className={styles.button}>Submit</button>
                        </form>
                    </section>
                </div>
            </div>
        </section>
    );
}