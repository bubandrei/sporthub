import React from "react";
import style from "./header.module.css";
import image1 from "../../assets/image/1.png";

const Header = () => {
  return (
    <div className={style._container}>
      <header>
        <div className={`${style._container} ${style.wrap}`}>
          <a href="#">
            <span className={style.firstLetter}>sport</span>
            <span className={style.secondLetter}>hub</span>
          </a>
          <nav className={style.headerMenu}>
            <ul className={style.menuClass}>
              <li className={style.menuItem}>
                <a href="#" className={`${style.menuLink} ${style.burger}`}>
                  Review
                </a>
              </li>
              <li className={style.menuItem}>
                <a href="#" className={`${style.menuLink} ${style.burger}`}>
                  Экстрим
                </a>
              </li>
              <li className={style.menuItem}>
                <a href="#" className={`${style.menuLink} ${style.burger}`}>
                  Легенды
                </a>
              </li>
              <li className={style.menuItem}>
                <a href="#" className={`${style.menuLink} ${style.burger}`}>
                  зож и туризм
                </a>
              </li>
              <li className={style.menuItem}>
                <a href="#" className={`${style.menuLink} ${style.burger}`}>
                  Позірк
                </a>
              </li>
              <li className={style.menuItem}>
                <a href="#" className={`${style.menuLink} ${style.burger}`}>
                  Треш
                </a>
              </li>
              <li className={style.menuItem}>
                <a href="#" className={`${style.menuLink}`}>
                  #######
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className={style.content}>
        <div className={style.topContent}>#Экстрим</div>
        <div className={style.bottomContent}>Юрий Поклад: «Динамо» как бы начинает работать заново</div>
      </div>
    </div>
  );
};

export default Header;
