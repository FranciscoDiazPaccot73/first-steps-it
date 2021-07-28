export const types = {
  SET_IS_MOBILE: "SET_IS_MOBILE",
};

export const init = (config: any) => {
  return {
    ...config,
    shouldAnimateHome: true,
  };
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case types.SET_IS_MOBILE: {
      return {...state, isMobile: action.value}
    }
    default:
      return null;
  }
};
