import { types } from './reducers';

export const setIsMobile = (dispatch: any, value: boolean) => {
  dispatch({ type: types.SET_IS_MOBILE, value });
};

export const setJobsdata = (dispatch: any, jobs: any) => {
  dispatch({ type: types.SET_JOBS_DATA, jobs });
};

export const showJobs = (dispatch: any, show: boolean) => {
  dispatch({ type: types.SHOW_JOBS, show });
};
