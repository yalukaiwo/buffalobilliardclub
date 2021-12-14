import React, { useState } from "react";
import menu from "../../menu/menu";
import MenuNavElement from "../MenuNavElement/MenuNavElement";
import styles from "./MenuNav.module.scss";

export default function MenuNav({ setContent, content }) {
  const categories = menu;

  const [open, setOpen] = useState(true);

  const JSX = menu.map((el) => {
    return (
      <MenuNavElement
        className={styles.nav__link}
        activeClass={styles.nav__link_active}
        marker={content}
        text={el.name.uk}
        setContent={setContent}
        setOpen={setOpen}
        key={el.name.uk}
      />
    );
  });

  const clickHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <ul
        className={`${styles.menu__nav} ${open ? styles.menu__nav_open : ""}`}
      >
        {JSX}
      </ul>
      <div
        className={`${styles.menu__toggle_holder} ${
          open ? styles.menu__toggle_holder_open : ""
        }`}
        onClick={clickHandler}
      >
        <img
          src="./menu_toggle.svg"
          className={`${styles.menu__toggle} ${
            open ? styles.menu__toggle_open : ""
          }`}
        />
      </div>
    </>
  );
}
