import React from "react";
import menu from "../../menu/menu";
import MenuNavElement from "../MenuNavElement/MenuNavElement";
import styles from "./MenuNav.module.scss";

export default function MenuNav({ setContent, content }) {
  const categories = menu;

  const JSX = menu.map((el) => {
    return (
      <MenuNavElement
        className={styles.nav__link}
        activeClass={styles.nav__link_active}
        marker={content}
        text={el.name.uk}
        setContent={setContent}
        key={el.name.uk}
      />
    );
  });

  return <ul className={styles.menu__nav}>{JSX}</ul>;
}
