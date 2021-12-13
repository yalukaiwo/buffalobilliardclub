import style from "../styles/Constructionpage.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <div className={style.body}>
      <Head>
        <title>Сайт в розробці</title>
      </Head>
      <header className={style.header}>
        <div className={style.header__logo}>
          <img src="./logo.png" alt="logo" className={style.logo} />
        </div>
      </header>
      <main className={style.main}>
        <div className={style.main__holder}>
          <h2 className={style.main__title}>Сайт в розробці</h2>
          <h3 className={style.main__subtitle}>
            Вибачте за тимчасові незручності. Будемо раді бачити вас пізніше!
          </h3>
          <div className={style.main__contacts}>
            <a
              className={style.main__contact}
              href="https://www.facebook.com/buffalobilliardclub/?fref=ts"
            >
              <img
                src="./facebook.png"
                alt="facebook"
                className={style.contact__image}
              />
              buffalobilliardclub
            </a>
            <a
              className={style.main__contact}
              href="https://www.instagram.com/buffalo.kyiv/"
            >
              <img
                src="./instagram.png"
                alt="instagram"
                className={style.contact__image}
              />
              buffalo.kyiv
            </a>
            <a className={style.main__contact} href="tel:+380443338305 ">
              <img
                src="./phone.png"
                alt="phone"
                className={style.contact__image}
              />
              (044) 333 83 05
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
