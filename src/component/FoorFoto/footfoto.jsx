import React from "react";
import foto9 from "../../assets/image/9.png";
import style from "./footfoto.module.css";

const Footfoto = () => {
  return (
    <div className={style.home}>
      <div className={style.home_bg_img}>
        <img src={foto9} className={style.imgBack} alt="" />
      </div>
      <div className={style.container}>
        <div className={style.homeContent}>
          <p className={style.homeHead}>Экстрим</p>
          <p className={style.homeText}>
            Интервью с Юрием Покладом. Полный список всех медалей Беларуси на
            Европейских играх.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footfoto;
