import styles from "./styles/FloorPlansMultiple.module.css"
import Image from "next/image";
import TwoBHKSmart from "../../public/images/2-BHK-Smart-West-2048x2048.webp"
import ThreeBHKSmartWest from "../../public/images/14-2048x2048.jpg"
import ThreeBHKSmartWest2 from "../../public/images/13-2048x2048.jpg"
import ThreeBHKSmartWestGF from "../../public/images/3-BHK-Smart-West2-2048x2048.webp"
import Unit4ThreeSmartWest from "../../public/images/3-BHK-Smart-West-2048x2048.webp"

const FloorPlansMultiple = () => {
    return (
        <section className={styles.floorPlans}>
            <div>
                <h1 className={styles.Title}>Floor Plans</h1>
                <h3 className={styles.SubTitle}>A Home Like No Other</h3>
            </div>
            <div className={styles.floorPlansText}>
                <p className={styles.floorPlansTextPara}>
                    A seamless blend of aesthetics and practicality, SARANG
                    homes cater to the refined preferences of modern buyers.
                    These luxurious 2, 3, and 4 BHK homes boast an exquisite
                    facade and are thoughtfully designed. With no common walls,
                    you’re assured of complete privacy, allowing you to relish
                    moments of peace or celebrate occasions without the worry of
                    disturbing neighbors. Aligned with true Indic Vastu, each
                    unit invites an abundance of natural light and embraces
                    excellent ventilation, creating a harmonious living
                    environment.
                </p>
            </div>
            <div className={styles.floorPlansContainer}>
                <div className={styles.floorPlansItem}>
                    <div>
                        <Image
                            src={TwoBHKSmart}
                            layout="fill"
                            objectFit="contain"
                            className={styles.image}
                        />
                        <span className={styles.floorPlansSubText}>2 BHK Smart - West Facing - SBUA 1225 sqft</span>
                    </div>
                </div>
                <div className={styles.floorPlansItem}>
                    <div>
                        <Image
                            src={ThreeBHKSmartWest}
                            layout="fill"
                            objectFit="contain"
                            className={styles.image}
                        />
                        <span className={styles.floorPlansSubText}>3 BHK Smart - West Facing - SBUA 1700 sqft</span>
                    </div>
                </div>
                <div className={styles.floorPlansItem}>
                    <div>
                        <Image
                            src={ThreeBHKSmartWest2}
                            layout="fill"
                            objectFit="contain"
                            className={styles.image}
                        />
                        <span className={styles.floorPlansSubText}>3 BHK Smart - West Facing - SBUA 1655 sqft</span>
                    </div>
                </div>
                <div className={styles.floorPlansItem}>
                    <div>
                        <Image
                            src={ThreeBHKSmartWestGF}
                            layout="fill"
                            objectFit="contain"
                            className={styles.image}
                        />
                        <span className={styles.floorPlansSubText}>3 BHK Smart - West Facing - SBUA 1700 sqft</span>
                    </div>
                </div>
                <div className={styles.floorPlansItem}>
                    <div>
                        <Image
                            src={Unit4ThreeSmartWest}
                            layout="fill"
                            objectFit="contain"
                            className={styles.image}
                        />
                        <span className={styles.floorPlansSubText}>3 BHK Smart - West Facing - SBUA 1655 sqft</span>
                    </div>
                </div>
                <div className={styles.floorPlansItem}>
                    <div>
                        <Image
                            src={TwoBHKSmart}
                            layout="fill"
                            objectFit="contain"
                            className={styles.image}
                        />
                        <span className={styles.floorPlansSubText}>2 BHK Smart - West Facing - SBUA 1225 sqft</span>
                    </div>
                </div>
                <div className={styles.floorPlansItem}>
                    <div>
                        <Image
                            src={ThreeBHKSmartWest}
                            layout="fill"
                            objectFit="contain"
                            className={styles.image}
                        />
                        <span className={styles.floorPlansSubText}>3 BHK Smart 2 BHK Smart - West Facing - SBUA 1700 sqft</span>
                    </div>
                </div>
                <div className={styles.floorPlansItem}>
                    <div>
                        <Image
                            src={ThreeBHKSmartWest2}
                            layout="fill"
                            objectFit="contain"
                            className={styles.image}
                        />
                        <span className={styles.floorPlansSubText}>3 BHK Smart 2 BHK Smart - West Facing - SBUA 1655 sqft</span>
                    </div>
                </div>
                <div className={styles.floorPlansItem}>
                    <div>
                        <Image
                            src={ThreeBHKSmartWestGF}
                            layout="fill"
                            objectFit="contain"
                            className={styles.image}
                        />
                        <span className={styles.floorPlansSubText}>3 BHK Smart 2 BHK Smart - West Facing - SBUA 1700 sqft</span>
                    </div>
                </div>
                <div className={styles.floorPlansItem}>
                    <div>
                        <Image
                            src={Unit4ThreeSmartWest}
                            layout="fill"
                            objectFit="contain"
                            className={styles.image}
                        />
                        <span className={styles.floorPlansSubText}>3 BHK Smart 2 BHK Smart - West Facing - SBUA 1655 sqft</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FloorPlansMultiple