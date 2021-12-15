import Header from "../../components/Header/Header";
import styles from "../../styles/Menupage.module.scss";
import Head from "next/head";
import MenuNav from "../../components/MenuNav/MenuNav";
import { useState, useEffect } from "react";
import menu from "../../menu/menu";
import MenuContent from "../../components/MenuContent/MenuContent";

export default function Menu() {
  const [arrow, setArrow] = useState(false);
  const [type, setType] = useState("foods");
  const [content, setContent] = useState(menu[type].categories[0].name.uk);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 140) {
        setArrow(true);
      } else if (scrolled <= 140) {
        setArrow(false);
      }
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Head>
          <title>Меню</title>
        </Head>
        <Header />
        <div className={styles.content_holder}>
          <MenuNav
            setContent={setContent}
            content={content}
            open={open}
            setOpen={setOpen}
            type={type}
            setType={setType}
          />
          <MenuContent content={content} type={type} />
        </div>
        {arrow && (
          <div className={styles.scrolltop} onClick={scrollTop}>
            <img
              src="./arrow.svg"
              alt="go up"
              className={styles.scrolltop_image}
            />
          </div>
        )}
      </div>
    </div>
  );
}
