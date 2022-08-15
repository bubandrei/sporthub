import React from "react";
import foto9 from "../../assets/image/9.png";
import style from "./backfoto.module.css";

const BackFoto = () =>
{
    return (
        <div>
            <div className={ style.home_bg_img }>
                <img src={ foto9 } className={ style.imgBack } alt="" />
            </div>
        </div>
    )
};
export default BackFoto;
