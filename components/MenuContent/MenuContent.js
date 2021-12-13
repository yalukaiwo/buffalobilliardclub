import React from "react";
import menu from "../../menu/menu";
import MenuContentItem from "../MenuContentItem/MenuContentItem";
import styles from "./MenuContent.module.scss";

export default function MenuContent({ content }) {
  const categorie = menu.find((el) => el.name.uk === content);
  const elements = categorie.postitions;

  const JSX = elements.map((el) => {
    return <MenuContentItem element={el} />;
  });

  return <div className={styles.content}>{JSX}</div>;
}
