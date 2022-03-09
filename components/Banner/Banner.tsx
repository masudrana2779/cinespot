import React from "react";
import LefSiteBarComponent from "../LeftSiteBar/LeftSiteBar.Component";
import { DivBlock } from "../styledComponents/Typography.Styled";
import BannerComponent from "./Banner.Component";

const Banner = () => {
  return (
    <>
      <DivBlock>
        <DivBlock>
          <div className="row">
            <div className="col-md-2 col-sm-2 col-12">
              <LefSiteBarComponent />
            </div>
            <div className="col-md-10 col-sm-2 col-12">
              <BannerComponent />
            </div>
          </div>
        </DivBlock>
      </DivBlock>
    </>
  );
};
export default Banner;
