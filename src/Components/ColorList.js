import React from "react";
import rgbToHex from "../Utility/utills";
const ColorList = ({ rgb, weight, textWhite }) => {
    const hexColor = rgbToHex(...rgb);
    return (
        <div
            className={`list  col-6 col-sm-4 col-md-3 col-lg-2 ${textWhite}`}
            style={{ backgroundColor: hexColor }}
        >
            <span className="percent-color d-block mt-2 ">{weight}%</span>
            <span className="hex-color d-block fw">{hexColor}</span>
        </div>
    );
};

export default ColorList;
