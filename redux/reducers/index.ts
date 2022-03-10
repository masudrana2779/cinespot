import { combineReducers } from "redux";
import { bannerReducer } from "../../components/Banner/redux/reducer";
import { newArrivalReducer } from "../../components/NewArrival/redux/reducer";

export default combineReducers({ bannerReducer,newArrivalReducer });
