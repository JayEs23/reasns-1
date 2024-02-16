import Header from "@src/components/Header";
import Footer from "@src/components/Footer";
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <>
            <Header />
            <main>
                <div className={styles.context}>
                    <div className={styles.oContent}>
                        <h2 className={styles.oContentText}>religion and tribe</h2>
                        <div className={styles.btns}>
                            <button className={`${styles.contentBtn} ${styles.eachBtn}`}>continue</button>
                            <button className={`${styles.contentBtn} ${styles.skipBtn} ${styles.eachBtn}`}>skip</button>
                        </div>
                    </div>
                    </div>
            </main>
            <Footer />
        </>
    )
}