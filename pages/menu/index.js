import Header from "../../components/Header/Header";
import styles from "../../styles/menupage.module.scss";
import Head from "next/head";
import PageTitle from "../../components/PageTitle/PageTitle";
import MenuNav from "../../components/MenuNav/MenuNav";
import { useState } from "react";
import menu from "../../menu/menu";
import MenuContent from "../../components/MenuContent/MenuContent";

export default function Menu() {
  const [content, setContent] = useState(menu[0].name.uk);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Head>
          <title>Меню</title>
        </Head>
        <Header />
        {/* <PageTitle text="Наше меню" /> */}
        <div className={styles.content_holder}>
          <MenuNav setContent={setContent} content={content} />
          <MenuContent content={content} />
        </div>
      </div>
    </div>
  );
}
