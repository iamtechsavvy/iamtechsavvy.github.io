import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.top}>
      <div className={styles.center}>
        <h1>Naresh Vasikarla</h1>
        </div>
        <p>| Technical Expert | Motivated Mentor | Forward Thinker | Innovative |</p>
        
      </div>
      <footer>
        <p>&copy; 2024 Naresh Vasikarla. All rights reserved.</p>
    </footer>
    </main>
  );
}
