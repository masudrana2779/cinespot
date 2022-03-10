import { initialStateObject } from "../../../../redux/reducers/initialArrayState";
import { InitialStateObjectType } from "../../../../types/InitialArrayStateType";
import {
  bannerDispatchType,
  BANNER_FAILURE,
  BANNER_REQUEST,
  BANNER_SUCCESS,
} from "../actionType";

export const bannerReducer = (
  state: InitialStateObjectType = initialStateObject,
  action: bannerDispatchType
): InitialStateObjectType => {
  switch (action.type) {
    case BANNER_REQUEST:
      return { ...state, loading: true };
    case BANNER_SUCCESS:
      return { loading: false, data: action.payload, error: "" };
    case BANNER_FAILURE:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};
