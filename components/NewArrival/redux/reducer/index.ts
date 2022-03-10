import { initialStateObject } from "../../../../redux/reducers/initialArrayState";
import { InitialStateObjectType } from "../../../../types/InitialArrayStateType";
import {
  newArrivalDispatchType,
  NEWARRIVAL_FAILURE,
  NEWARRIVAL_REQUEST,
  NEWARRIVAL_SUCCESS,
} from "../actionType";

export const newArrivalReducer = (
  state: InitialStateObjectType = initialStateObject,
  action: newArrivalDispatchType
): InitialStateObjectType => {
  switch (action.type) {
    case NEWARRIVAL_REQUEST:
      return { ...state, loading: true };
    case NEWARRIVAL_SUCCESS:
      return { loading: false, data: action.payload, error: "" };
    case NEWARRIVAL_FAILURE:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};
