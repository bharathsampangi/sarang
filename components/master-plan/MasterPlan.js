import styles from "./styles/MasterPlan.module.css"
import Image from "next/image"
import ImgMasterPlan from "../../public/images/sarang-masterplan-png-1-3.webp"

const MasterPlan = () => {
    return (
        <section className={styles.masterPlan}>
            <div className={styles.masterPlanWrapper}>
                <h2 className={styles.header}>Master Plan</h2>
                <div className={styles.imageContainer}>
                    <Image src={ImgMasterPlan} className={styles.image} />
                </div>
            </div>
        </section>
    )
}

export default MasterPlan