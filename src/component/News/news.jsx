import React from "react";
import styleNews from "./news.module.css";
import foto5 from "../../assets/image/5.png";
import foto6 from "../../assets/image/6.png";
import foto7 from "../../assets/image/7.png";
import foto8 from "../../assets/image/8.png";

const News = () => {
  return (
    <div className={styleNews.wrap}>
      <div className={styleNews.people}>
        <div className={styleNews.man}>
          <div className={styleNews.imgFoto}>
            <img src={foto5} alt="" className={styleNews.icon}/>
            <img src={foto6} alt="" />
          </div>
          <div className={styleNews.name}>Алексей Михайличенко</div>
          <div className={styleNews.prof}>Главный тренер ф.к. Динамо</div>
          <div className={styleNews.text}>
            Сергей Корниленко станет играющим тренером «Крыльев советов»
          </div>
        </div>
        <div className={styleNews.man}>
          <div className={styleNews.imgFoto}>
            <img src={foto5} alt=""  className={styleNews.icon}/>
            <img src={foto7} alt="" />
          </div>
          <div className={styleNews.name}>Алексей Михайличенко</div>
          <div className={styleNews.prof}>Главный тренер ф.к. Динамо</div>
          <div className={styleNews.text}>
            Сергей Корниленко станет играющим тренером «Крыльев советов»
          </div>
        </div>
        <div className={styleNews.man}>
          <div className={styleNews.imgFoto}>
            <img src={foto5} alt=""  className={styleNews.icon}/>
            <img src={foto8} alt="" />
          </div>
          <div className={styleNews.name}>Алексей Михайличенко</div>
          <div className={styleNews.prof}>Главный тренер ф.к. Динамо</div>
          <div className={styleNews.text}>
            Сергей Корниленко станет играющим тренером «Крыльев советов»
          </div>
        </div>
        <div className={styleNews.man}>
          <div className={styleNews.imgFoto}>
            <img src={foto5} alt=""  className={styleNews.icon}/>
            <img src={foto6} alt="" />
          </div>
          <div className={styleNews.name}>Алексей Михайличенко</div>
          <div className={styleNews.prof}>Главный тренер ф.к. Динамо</div>
          <div className={styleNews.text}>
            Сергей Корниленко станет играющим тренером «Крыльев советов»
          </div>
        </div>
      </div>
    </div>
  );
};
export default News;
