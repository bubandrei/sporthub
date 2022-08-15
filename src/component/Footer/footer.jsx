import React from "react";
import style from "./footer.module.css";
import logo from "../../assets/image/18.png";
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.firstRow}>
        <div className={style.logo}><img src={logo} alt="" /></div>
        <div className={style.common}>О проекте </div>
        <div className={style.common}>Обратная связь</div>
        <div className={style.wrap}>
          <p className={style.adv}>Реклама:</p>
          <p className={style.email}>ads@sporthub.news</p>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Footer;
