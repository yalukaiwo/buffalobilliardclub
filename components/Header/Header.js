import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import NavLink from "../NavLink/NavLink";

export default function Header({ fixed }) {
  return (
    <div className={styles.header}>
      <img className={styles.image} src="./logo.png" />
      <ul className={styles.nav}>
        <li
          className={`${styles.nav__link} ${styles.nav__link_active} ${styles.shedule}`}
        >
          12.00 - 01.00
        </li>
      </ul>
    </div>
  );
}
