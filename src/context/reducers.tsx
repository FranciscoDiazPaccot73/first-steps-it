export const types = {
  SET_IS_MOBILE: "SET_IS_MOBILE",
  SET_JOBS_DATA: "SET_JOB_DATA",
  SHOW_JOBS: "SHOW_JOBS",
};

export const init = (config: any) => {
  return {
    ...config,
    shouldAnimateHome: true,
    showJobs: false,
  };
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case types.SET_IS_MOBILE: {
      return {...state, isMobile: action.value}
    }
    case types.SET_JOBS_DATA: {
      return {...state, jobs: action.jobs}
    }
    case types.SHOW_JOBS: {
      return {...state, showJobs: action.show}
    }
    default:
      return null;
  }
};
