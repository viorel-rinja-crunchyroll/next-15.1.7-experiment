import ClientButton from "@/components/LoggerButton";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  console.log('Home component computed')

  return (
    <div className={styles.page}>
      <h1>Home</h1>
      <Link href="/hehe">Go to Hehe ➡️</Link>
      <ClientButton text="Home page!"/>
    </div>
  );
}
