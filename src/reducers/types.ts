import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

export type counterStateType = {
  drawer: boolean;
};

export type GetState = () => counterStateType;

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<counterStateType, Action<string>>;