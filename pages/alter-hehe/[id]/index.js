import LoggerButton from "@/components/LoggerButton";
// import styles from "../../../app/page.module.css";
import Link from "next/link";

const styles = {};

export default function Hehe({ children, title, id }) {
  console.log('Hehe component computed');

  const numericPage = Number(id);
  const nextPage = numericPage + 1;

  return (
    <div className={styles.page}>
      <h1>Hehe: {title}</h1>
      <div>
        <Link href="/">Go Home ➡️</Link>
        <br />
        <Link href={`/alter-hehe/${nextPage}`}>Go to next: {nextPage} ➡️</Link>
        <br />
        <Link href={`/hehe/${nextPage}`}>Go to the other next: {nextPage} ➡️</Link>
      </div>
      {children}
      <LoggerButton text="from hehe page" />
    </div>
  );
}

// Replace async server component with getServerSideProps
export async function getServerSideProps(context) {
  const { id } = context.params;
  
  // Fetch data similar to the original component
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const { title } = await data.json();

  // Return data as props
  return {
    props: {
      title,
      id,
    },
  };
}
