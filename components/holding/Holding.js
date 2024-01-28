import styles from "./styles/Holding.module.css"

const Holding = ({title}) => {
    return (
        <section className={styles.holding}>
            <div className={styles.holdingText}>
                <h2>{title}</h2>
            </div>
        </section>
    )
}

export default Holding