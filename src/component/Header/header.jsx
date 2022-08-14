import React from "react";
import style from "./header.module.css";
import logo from "../../assets/image/logo.png";
import background from "../../assets/image/1.png"

const Header = () => {
  return (
    <div>
 
      <section className={style.home}>
      <header className={style.header}>
        <div className={style._container}>
          <div className={style.header_row}>
            <div className={style.headerLogo}>
              <img src={logo} alt="LOGO" />
            </div>
            <nav className={style.headerMenu}>
              <ul className={style.headerNav}>
                <li>
                  <a href="#">Review</a>
                </li>
                <li>
                  <a href="#">Экстрим</a>
                </li>
                <li>
                  <a href="#">Легенды</a>
                </li>
                <li>
                  <a href="#">зож и туризм</a>
                </li>
                <li>
                  <a href="#">Позірк</a>
                </li>
                <li>
                  <a href="#">Треш</a>
                </li>
                <li>
                  <a href="#">#######</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
        <div className={style.container}>
          <div className={style.homeContent}>
            <p className={style.homeHead}>#Экстрим</p>
            <p className={style.homeText}>
              Юрий Поклад: «Динамо» как бы начинает работать заново
            </p>
          </div>
        </div>
        <div className={style.home_bg_img}>
          <img src={background} className={style.imgBack} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Header;
