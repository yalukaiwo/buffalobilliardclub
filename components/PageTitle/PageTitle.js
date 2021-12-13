import React from "react";
import styles from "./PageTitle.module.scss";

export default function PageTitle({ text }) {
  return <h2 className={styles.title}>{text}</h2>;
}
