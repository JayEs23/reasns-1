import Header from "@src/components/Header";
import Footer from "@src/components/Footer";
import Question from "@src/components/Question";
import styles from '../styles/Home.module.css';
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleOnClick = () => {
    router.push('/onboarding');
  }

  return (
    <>
      <Header />
      <div className={styles.allContents}>
        <main>
          <div className={styles.content}>
            <div className={styles.textBtnLink}>          
              <h2 className={styles.contentText}>Let's Talk About Parents and Family</h2>
              <button className={styles.contentBtn} onClick={handleOnClick}>continue</button>
              <Question />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
