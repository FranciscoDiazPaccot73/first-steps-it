import { useEffect, useContext } from 'react';

import { PageContext } from './context/index';
import { setIsMobile, setJobsdata } from './context/actions';

import Api from './Api';
import Routes from './Routes';

import './styles.scss';

const App = () => {
  const { dispatch, state: { isMobile } } = useContext(PageContext);

  useEffect(() => {
     (async function anyNameFunction() {
      const jobs = await Api.list();
      setJobsdata(dispatch, jobs);
    })();
   window.scrollTo(0,0);
   window.addEventListener("resize", () => {
    const screenSize = document.documentElement.clientWidth;
    if (screenSize <= 830) {
      !isMobile && setIsMobile(dispatch, true);
    } else {
      isMobile && setIsMobile(dispatch, false);
    }
   });
   setIsMobile(dispatch, document.documentElement.clientWidth <= 830);
  }, []);

  return (
    <Routes/>
  )
};

export default App;
