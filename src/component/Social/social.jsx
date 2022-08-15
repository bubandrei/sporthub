import React from "react";
import style from "./social.module.css";
import iconVk from "../../assets/image/11.png";
import iconFace from "../../assets/image/12.png";
import iconInst from "../../assets/image/13.png";
import iconYou from "../../assets/image/14.png";
import iconTel from "../../assets/image/15.png";
import iconTik from "../../assets/image/16.png";
import iconTwit from "../../assets/image/17.png";

const Social = () => {
  return (
    <div className={style.container}>
      <div className={style.socialWrap}>
        <div className={style.headSocial}>Соцсети</div>
        <div className={style.blockRed}>
          <div className={style.wrapIcons}>
            <div>
              <img src={iconVk} alt="" />
            </div>
            <div>
              <img src={iconFace} alt="" />
            </div>
            <div>
              <img src={iconInst} alt="" />
            </div>
            <div>
              <img src={iconYou} alt="" />
            </div>
            <div>
              <img src={iconTel} alt="" />
            </div>
            <div>
              <img src={iconTik} alt="" />
            </div>
            <div>
              <img src={iconTwit} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.socialWrap}>
        <div className={style.headSocial}>Подписка</div>
        <div className={style.blockBlack}>
          <div className={style.wrapInpBtn}>
            <span>
              <input
                className={style.formInput}
                type="text"
                placeholder="Введите ваш email"
              />
            </span>
            <button className={style.btn}><span className={style.textBtn}>Подписаться</span> </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Social;
