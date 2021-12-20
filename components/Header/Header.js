import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import NavLink from "../NavLink/NavLink";

export default function Header({ fixed }) {
  return (
    <div className={styles.header}>
      <img className={styles.image} src="./logo.png" />
      <ul className={styles.nav}>
        <NavLink
          href="/menu"
          exact
          className={styles.nav__link}
          activeClass={styles.nav__link_active}
        >
          Меню
        </NavLink>
      </ul>
    </div>
  );
}
