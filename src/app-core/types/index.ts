export interface IAction {
  type: string;
  payload: object;
}
export interface IReducerAction {
  type: string;
  data: any;
}

export type DispatchFunction = (action: IAction) => IAction;

export type PromiseFunction = (params?: any) => Promise<object>;

export type AsyncLoaderFunction = (payload?: any) => () => Promise<object>;

export interface IAsyncReducerData {
  isBusy: boolean;
  loadError: boolean;
  isStale: boolean;
  loadErrorDetails?: any;
  payload: any;
}

export interface ITranslations<T> {
  [index: string]: T;
}
