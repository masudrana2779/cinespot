import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import LefSiteBarComponent from "../LeftSiteBar/LeftSiteBar.Component";
import { DivBlock } from "../styledComponents/Typography.Styled";
import BannerComponent from "./Banner.Component";
import { getBanners } from "./redux/action";

const Banner = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBanners());
  }, [dispatch]);

  const { data, loading, error } = useSelector(
    (state: RootStore) => state.bannerReducer
  );
  console.log(data[0]);

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
