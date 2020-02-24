import React, { useEffect } from "react";
import { IReducerAction } from "../types";

export enum AsyncAction {
  RESET = "RESET",
  SET_WAITING = "SET_WAITING",
  SET_DATA = "SET_DATA",
  SET_ERROR = "SET_ERROR"
}
export const waitingAction = () => ({
  data: {},
  type: AsyncAction.SET_WAITING
});
export const dataUpdateAction = (result: object) => ({
  data: result,
  type: AsyncAction.SET_DATA
});
export const errorAction = (error: object) => ({
  data: error,
  type: AsyncAction.SET_ERROR
});
export const resetAction = () => ({
  data: {},
  type: AsyncAction.RESET
});

export interface IReducer {
  errorMessage?: object | null;
  isBusy: boolean;
  isError: boolean;
  isStale: boolean;
  result: any;
}

const initialState: IReducer = {
  errorMessage: null,
  isBusy: false,
  isError: false,
  isStale: false,
  result: null
};

const asyncStateReducer = (state: IReducer = initialState, action: IReducerAction) => {
  switch (action.type) {
    case AsyncAction.SET_WAITING:
      return { ...state, isBusy: true, isStale: true, errorMessage: null };
    case AsyncAction.SET_DATA:
      return { ...state, isBusy: false, isStale: false, errorMessage: null, result: action.data };
    case AsyncAction.SET_ERROR:
      return { ...state, isBusy: false, isError: true, errorMessage: action.data.message };
    case AsyncAction.RESET:
      return { ...state, isBusy: false, isStale: false, isError: false, errorMessage: null };
    default:
      return state;
  }
};

// useAsync is a utility that can simplify running async calls
// returns IAsyncCallResult

type TransformerFrunction = (input: object | any[]) => object | any[];
type LoaderFunction = () => Promise<any>;
interface IAsyncCallResult extends IReducer {
  makeCall: (loader: LoaderFunction) => Promise<any>;
  reset: () => void;
}
export const useAsyncCall = (xformer?: TransformerFrunction): IAsyncCallResult => {
  const [{ isBusy, isError, isStale, errorMessage, result }, dispatch] = React.useReducer(
    asyncStateReducer,
    initialState
  );
  const cancelled = React.useRef(false);
  const cancel = () => (cancelled.current = true);

  useEffect(() => {
    return () => {
      cancel();
    };
  }, []);

  const makeCall = async (loader: LoaderFunction) => {
    dispatch(waitingAction());
    try {
      const pload: any = await loader();
      const transformedPayload = xformer ? xformer(pload) : pload;
      if (!cancelled.current) {
        dispatch(dataUpdateAction(transformedPayload));
        return Promise.resolve(transformedPayload);
      }
    } catch (e) {
      !cancelled.current && dispatch(errorAction(e));
      throw e;
    }
  };

  const reset = () => dispatch(resetAction());

  return { isBusy, isStale, isError, errorMessage, result, reset, makeCall };
};
