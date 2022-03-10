import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAlbum } from "../../interfaces/IAlbum";
import { RootStore } from "../../redux/store";
import Banner from "../Banner/Banner";
import NewArrivalComponent from "../NewArrival/NewArrival.Component";
import { getNewArrivals } from "../NewArrival/redux/action";

const HomeComponent = () => {
  const { data, loading, error } = useSelector(
    (state: RootStore) => state.newArrivalReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewArrivals());
  }, [dispatch]);

  return (
    <>
      <Banner />
      {data &&
        data.length > 0 &&
        data.map((item: IAlbum, i: number) => (
          <NewArrivalComponent item={item} key={i} />
        ))}
    </>
  );
};

export default HomeComponent;
