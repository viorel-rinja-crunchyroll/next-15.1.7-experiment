import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  console.log('Home component computed')

  return (
    <div className={styles.page}>
      <h1>Home</h1>
      <Link href="/hehe/1">Go to Hehe ➡️</Link>
      <ul>
        <li>Unlike traditional SSR, RSC's server does not render only once</li>
        <li>RSCs can make requests</li>
        <li>Props provided by RSC's are serialized</li>
        <li>"use client" = this component will render BOTH on server and client</li>
        <li>why useState(Math.random()) = hydration error</li>
      </ul>
    </div>
  );
}

export function generateStaticParams() {
  return [
    {
      slug: "",
    },
  ];
}
