import LoggerButton from "@/components/LoggerButton";
import styles from "../..//page.module.css";
import Link from "next/link";

const getTitle = async (id) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const {title} = await data.json();

  return title;
}

export default async function Hehe({children, params}) {
  console.log('Hehe component computed')

  const title = await getTitle(params.id);

  const numericPage = Number(params.id);
  const nextPage = numericPage + 1;

  return (
    <div className={styles.page}>
      <h1>Hehe: {title}</h1>
      <div>
        <Link href="/">Go Home ➡️</Link>
        <br/>
        <Link href={`/hehe/${nextPage}`}>Go to Hehe {nextPage} ➡️</Link>
      </div>
      {children}
      <LoggerButton text="from hehe page"/>
    </div>
  );
}

export function generateStaticParams() {
  return [{
    id: '1'
  }]
}