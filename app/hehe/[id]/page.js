import LoggerButton from "@/components/LoggerButton";
import styles from "../..//page.module.css";
import Link from "next/link";

const getTitle = async (id) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const {title} = await data.json();

  return title;
}

export default async function Hehe({params}) {
  console.log('Hehe component computed')

  const title = await getTitle(params.id);

  return (
    <div className={styles.page}>
      <h1>Hehe: {title}</h1>
      <Link href="/">Go Home ➡️</Link>
      <LoggerButton text="from hehe page"/>
    </div>
  );
}

export function generateStaticParams() {
  return [{
    id: '1'
  }]
}