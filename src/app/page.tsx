import Image from "next/image";
import styles from "./page.module.css";
import Notepad from "../components/Notepad/Notepad";

export default function Home() {
  return (
    <main className={styles.main}>
      <Notepad />
    </main>
  );
}
