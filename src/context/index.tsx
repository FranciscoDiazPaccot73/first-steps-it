import React, { useMemo, useReducer, createContext } from 'react';

import { reducer, init } from './reducers';

interface AppContextInterface {
  state: any,
  dispatch: any,
};

const contextDefaultValues = {
  state: {},
  dispatch: () => {},
};

export const PageContext = createContext<AppContextInterface>(contextDefaultValues);

const PageProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {}, init);

  const contextValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );

  return <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>;
};

export default PageProvider;
