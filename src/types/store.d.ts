export interface IStore {}

export type IAction = {
  type: string;
  payload: any;
}