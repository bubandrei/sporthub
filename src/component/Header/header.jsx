import React from "react";
import style from "./header.module.css";
import image1 from "../../assets/image/1.png";

const Header = () => {
  return (
    <div className={style.wrapper}>
      <header>
        <div className={style._container}>
          <a href="#">
            <span className={style.firstLetter}>sport</span>
            <span className={style.secondLetter}>hub</span>
          </a>
          <nav className={style.headerMenu}>
            <ul className={style.menuClass}>
              <li className={style.menuItem}>
                <a href="#" className={style.menuLink}>Review</a>
              </li>
              <li>
                <a href="#" className={style.menuLink}>Экстрим</a>
              </li>
              <li>
                <a href="#" className={style.menuLink}>Легенды</a>
              </li>
              <li>
                <a href="#" className={style.menuLink}>зож и туризм</a>
              </li>
              <li>
                <a href="#"  className={style.menuLink}>Позірк</a>
              </li>
              <li>
                <a href="#" className={style.menuLink}>Треш</a>
              </li>
              <li>
                <a href="#" className={style.menuLink}></a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      ghbdtn
    </div>
  );
};

export default Header;
