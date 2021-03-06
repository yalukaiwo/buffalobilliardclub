import React from "react";
import menu from "../../menu/menu";
import MenuNavElement from "../MenuNavElement/MenuNavElement";
import styles from "./MenuNav.module.scss";

export default function MenuNav({
  setContent,
  content,
  open,
  setOpen,
  type,
  setType,
}) {
  const categories = menu[type].categories;

  const types = Object.keys(menu);

  const typesJSX = types.map((el) => {
    return (
      <h2
        className={`${styles.type__button} ${
          el === type ? styles.type__button_active : ""
        }`}
        onClick={() => {
          setType(el);
          setContent(menu[el].categories[0].name.uk);
        }}
        key={el}
      >
        {menu[el].name.uk}
      </h2>
    );
  });

  const JSX = categories.map((el) => {
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
    window.scrollTo({ top: 0, behavior: open ? "auto" : "smooth" });
  };

  return (
    <>
      <ul
        className={`${styles.menu__nav} ${open ? styles.menu__nav_open : ""}`}
      >
        <div className={styles.header}>
          <img src="./logo.png" alt="logo" className={styles.image} />
          <h2 className={styles.shedule}>12.00 - 01.00</h2>
          <div
            className={styles.menu__toggle_holder_open}
            onClick={clickHandler}
          >
            <img
              src="./arrow.svg"
              className={`${styles.menu__toggle} ${
                open ? styles.menu__toggle_open : ""
              }`}
            />
          </div>
        </div>
        <div className={styles.type__toggler}>{typesJSX}</div>
        {JSX}
      </ul>
      <div className={styles.menu__toggle_holder} onClick={clickHandler}>
        <img
          src="./arrow.svg"
          className={`${styles.menu__toggle} ${open ? styles.hidden : ""}`}
        />
      </div>
    </>
  );
}
