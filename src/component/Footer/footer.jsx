import React from "react";
import style from "./footer.module.css";
import logo from "../../assets/image/18.png";
import vk from "../../assets/image/vk.png";
import facebook from "../../assets/image/facebook.png";
import instagram from "../../assets/image/instagram.png";
import youtube from "../../assets/image/youtube.png";
import telegram from "../../assets/image/telegram.png";
import tiktok from "../../assets/image/tiktok.png";
import twitter from "../../assets/image/twitter.png";
import group from "../../assets/image/Group.png";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={`${style.firstRow} ${style._container}`}>
        <div className={style.logo}><img src={logo} alt="" /></div>
        <div className={style.common}>О проекте </div>
        <div className={style.common}>Обратная связь</div>
        <div className={style.wrap}>
          <p className={style.adv}>Реклама:</p>
          <p className={style.email}>ads@sporthub.news</p>
        </div>
      </div>
      <div className={style.secondRow}>
        <p><img src={vk} alt="vk" /></p>
        <p><img src={facebook} alt="facebook" /></p>
        <p><img src={instagram} alt="instagram" /></p>
        <p><img src={youtube} alt="youtube" /></p>
        <p><img src={telegram} alt="telegram" /></p>
        <p><img src={tiktok} alt="tiktok" /></p>
        <p><img src={twitter} alt="twitter" /></p>
      </div>
      <div className={`${style.thirdRow} ${style._container}`}>
        <div className={style.date}>© 2022 «Спортхаб»</div>
        <div><img src={group} alt="group" /><span className={style.madeBy}> Разработка сайта — компания PRAS</span></div>
      </div>
    </div>
  );
};
export default Footer;
