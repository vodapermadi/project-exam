import React from "react";
import NavbarComponent from "../../../header/NavbarComponent";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import NavbarComponent2 from "../../../header/NavbarComponent2";

const Color = () => {
  const [color, setColor] = useColor({});

  console.log(color)

  return (
    <>
      {/* <NavbarComponent /> */}
      <NavbarComponent2/>
      <div className="d-flex justify-content-center items-center">
        <div className="row py-3 justify-content-center items-center my-3" style={{ backgroundColor : color.hex, borderRadius: "15px" }}>
          <div className="col-md-6">
            <div className="bgTask">
              <h2 className="text-center">
                Color Palette
              </h2>
            </div>
          </div>
          <div className="col-md-12">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p>
              <ColorPicker
                width={250}
                height={228}
                color={color}
                onChange={setColor}
                hideHSV
                dark
              />
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Color;
