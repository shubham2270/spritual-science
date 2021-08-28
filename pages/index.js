import Head from "next/head";
import Image from "next/image";
import Flow from "../src/components/Flow";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Flow />
    </div>
  );
}
