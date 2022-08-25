import React from "react";
import styleContent from "./content2.module.css";
import foto2 from "../../assets/image/3.png";
import foto4 from "../../assets/image/4.png";

const Content2 = () =>
{
  return (
    <>
      <section className={ styleContent._container }>
        <div className={ styleContent.firstArticle }>
          <p className={ styleContent.header }></p>
          <div className={ styleContent.contentFoto }>
            <img src={ foto2 } alt="" className={ styleContent.articleFoto } />
          </div>
          <div className={styleContent.mobileContainer}>
            <p className={ styleContent.dateContent }>
              <span className={ styleContent.date }>Сегодня |</span>
              <span className={ styleContent.dateFill }>#болельщикам</span>
            </p>
            <p className={ styleContent.titleContent }>
              Японцы лидируют в медальном зачете летней универсиады, белорусы –
              25-е. Почему так?
            </p>
            <p className={ styleContent.fillContent }>
              И если для «горняков», которые неделей ранее разгромно уступили в
              Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск —
              формальность, то от «жёлто-синих»...
            </p>
          </div>

        </div>
        <div className={ styleContent.firstArticle }>
          <p className={ styleContent.header }></p>
          <div className={ styleContent.contentFotoBalck }>
            <img src={ foto4 } alt="" className={ styleContent.articleFoto } />
          </div>
          <div className={ styleContent.blackBack }>
            <div>
              <p className={ styleContent.dateContent }>
                <span className={ styleContent.date2 }>09.07.19 |</span>
                <span className={ styleContent.dateFill2 }>
                  #Профессиональный_спорт
                </span>
              </p>
              <p className={ styleContent.titleContent2 }>
                Японцы лидируют в медальном зачете летней универсиады, белорусы –
                25-е. Почему так?
              </p>
              <p className={ styleContent.fillContent2 }>
                И если для «горняков», которые неделей ранее разгромно уступили в
                Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск —
                формальность, то от «жёлто-синих»...
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Content2;
