import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import baseUrl from "../../../../redux/apis/baseUrl";
import {
  bannerDispatchType,
  BANNER_FAILURE,
  BANNER_REQUEST,
  BANNER_SUCCESS,
} from "../actionType";

export const getBanners =
  () => async (dispatch: Dispatch<bannerDispatchType>) => {
    dispatch({ type: BANNER_REQUEST });
    await baseUrl
      .post(`/content/featured`)
      .then((response: AxiosResponse<any>) =>
        dispatch({
          type: BANNER_SUCCESS,
          payload: response.data.Items,
        })
      )
      .catch((err: any) => dispatch({ type: BANNER_FAILURE, payload: err }));
  };
