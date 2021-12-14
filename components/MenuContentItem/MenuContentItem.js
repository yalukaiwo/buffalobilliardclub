import React from "react";
import styles from "./MenuContentItem.module.scss";

export default function MenuContentItem({ element }) {
  return (
    <div className={styles.menu__position}>
      <div className={styles.position__name_holder}>
        <h2 className={styles.position__name_uk}>{element.name.uk}</h2>
        <h3 className={styles.position__name_en}>{element.name.en}</h3>
      </div>
      <div className={styles.position__information}>
        <h2 className={styles.position__price}>
          {element.price}&#8372; / {element.weight}г
        </h2>
      </div>
    </div>
  );
}
