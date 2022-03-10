import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import baseUrl from "../../../../redux/apis/baseUrl";
import {
  newArrivalDispatchType,
  NEWARRIVAL_FAILURE,
  NEWARRIVAL_REQUEST,
  NEWARRIVAL_SUCCESS,
} from "../actionType";

export const getNewArrivals =
  () => async (dispatch: Dispatch<newArrivalDispatchType>) => {
    dispatch({ type: NEWARRIVAL_REQUEST });
    await baseUrl
      .post(`/content/all`)
      .then((response: AxiosResponse<any>) =>
        dispatch({
          type: NEWARRIVAL_SUCCESS,
          payload: response.data.Items,
        })
      )
      .catch((err: any) => dispatch({ type: NEWARRIVAL_FAILURE, payload: err }));
  };
