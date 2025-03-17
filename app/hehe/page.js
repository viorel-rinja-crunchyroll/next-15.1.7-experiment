import ClientButton from "@/components/LoggerButton";
import styles from "../page.module.css";
import Link from "next/link";

export default function Hehe() {
  console.log('Hehe component computed')

  return (
    <div className={styles.page}>
      <h1>Hehe</h1>
      <Link href="/">Go Home ➡️</Link>
      <ClientButton text="Hehe Page!"/>
    </div>
  );
}
