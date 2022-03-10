import { IAlbum } from "../../../interfaces/IAlbum";

export const NEWARRIVAL_REQUEST = "NEWARRIVAL_REQUEST";
export const NEWARRIVAL_SUCCESS = "NEWARRIVAL_SUCCESS";
export const NEWARRIVAL_FAILURE = "NEWARRIVAL_FAILURE";

export interface newArrivalRequest {
  type: typeof NEWARRIVAL_REQUEST;
}

export interface newArrivalSuccess {
  type: typeof NEWARRIVAL_SUCCESS;
  payload: IAlbum[];
}

export interface newArrivalFailure {
  type: typeof NEWARRIVAL_FAILURE;
  payload: any;
}

export type newArrivalDispatchType = newArrivalRequest | newArrivalSuccess | newArrivalFailure;
