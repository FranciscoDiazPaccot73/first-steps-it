import ReactGA from 'react-ga';

export const trackView = (path) => ReactGA.pageview(path);

export const trackEvent = (category, action, label) => ReactGA.event({ category, action, label });
