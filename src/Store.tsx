import React, { createContext, useReducer } from 'react';
import { IStore, IAction } from '@/types/store';

const defaultState: IStore = {
};

const Context = createContext({
  state: defaultState,
  dispatch: (() => ({})) as React.Dispatch<IAction>
});

const reducer = (state: IStore, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
}

const Provider: React.FC = props => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      { props.children }
    </Context.Provider>
  )
}

export { 
  Context, 
  Provider,
};
