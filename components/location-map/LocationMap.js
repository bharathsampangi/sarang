import styles from "./styles/LocationMap.module.css"
import Map from "../../public/images/Sumadhura-Map-01-2048x1448.webp"
import Image from "next/image"

const LocationMap = () => {
    return (
        <section className={styles.location}>
            <div className={styles.locationContainer}>
                <div className={styles.locationText}>
                    <h1 className={styles.Title}>Location</h1>
                    <h3 className={styles.SubTitle}>Exquisite Enclave</h3>
                    <p className={styles.locationTextPara}>
                    Experience unparalleled convenience at this luxurious address, just minutes from IT parks, top-notch schools, and essential amenities. 
                    Surrounding the property is the scenic Atal Bihari Botanical Garden, adding to its allure. With unmatched connectivity, upscale ambiance, 
                    and captivating aesthetics, SARANG is the epitome of luxury living – an iconic address.
                    </p>
                </div>
                <div className={styles.locationImage}>
                    <Image src={Map} className={styles.image} />
                </div>
            </div>
        </section>
    )
}

export default LocationMap