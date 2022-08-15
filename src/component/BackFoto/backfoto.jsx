import React from "react";
import foto10 from "../../assets/image/10.png";
import style from "./backfoto.module.css";

const BackFoto = () => {
  return (
    <div className={style.home}>
      <div className={style.home_bg_img}>
        <img src={foto10} className={style.imgBack} alt="" />
      </div>
      <div className={style.container}>
        <div className={style.homeContent}>
          <p className={style.homeHead}>#болельщикам</p>
          <p className={style.homeText}>
            Юрий Поклад: «Динамо» как бы начинает работать заново
          </p>
        </div>
      </div>
    </div>
  );
};
export default BackFoto;
