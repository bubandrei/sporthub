import React from "react";
import styleContent from "./content.module.css";
import foto1 from "../../assets/image/2.png";
import foto2 from "../../assets/image/3.png";

const Content = () => {
  return (
    <section className={styleContent._container}>
      <div className={styleContent.firstArticle}>
        <p className={styleContent.header}>Последнее</p>
        <div className={styleContent.contentFoto}>
          <img src={foto1} alt="" className={styleContent.articleFoto} />
        </div>
        <p className={styleContent.dateContent}><span className={styleContent.date}>Сегодня |</span>
          <span className={styleContent.dateFill}>#болельщикам</span>
        </p>
        <p className={styleContent.titleContent}>
          Японцы лидируют в медальном зачете летней универсиады, белорусы –
          25-е. Почему так?
        </p>
        <p className={styleContent.fillContent}>
          И если для «горняков», которые неделей ранее разгромно уступили в
          Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск —
          формальность, то от «жёлто-синих»...
        </p>
      </div>
      <div className={styleContent.firstArticle}>
        <p className={styleContent.header}>Последнее</p>
        <div className={styleContent.contentFoto}>
          <img src={foto2} alt="" className={styleContent.articleFoto} />
        </div>
        <p className={styleContent.dateContent}><span className={styleContent.date}>09.07.19 |</span>
          <span className={styleContent.dateFill}>#любительский_спорт</span>
        </p>
        <p className={styleContent.titleContent}>
          Японцы лидируют в медальном зачете летней универсиады, белорусы –
          25-е. Почему так?
        </p>
        <p className={styleContent.fillContent}>
          И если для «горняков», которые неделей ранее разгромно уступили в
          Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск —
          формальность, то от «жёлто-синих»...
        </p>
      </div>
    </section>
  );
};

export default Content;
