import { IBanner } from "../../../interfaces/IBanner";
export const BANNER_REQUEST = "BANNER_REQUEST";
export const BANNER_SUCCESS = "BANNER_SUCCESS";
export const BANNER_FAILURE = "BANNER_FAILURE";

export interface bannerRequest {
  type: typeof BANNER_REQUEST;
}

export interface bannerSuccess {
  type: typeof BANNER_SUCCESS;
  payload: IBanner[];
}

export interface bannerFailure {
  type: typeof BANNER_FAILURE;
  payload: any;
}

export type bannerDispatchType = bannerRequest | bannerSuccess | bannerFailure;
