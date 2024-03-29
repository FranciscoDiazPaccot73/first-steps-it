import { useEffect, useContext } from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import ReactGA from 'react-ga';

import { PageContext } from './context/index';
import { setIsMobile, setJobsdata } from './context/actions';

import Api from './Api';
import Routes from './Routes';

import { CONFIG } from './utils/constants';

import './styles.scss';

const App = () => {
  const { dispatch, state: { isMobile } } = useContext(PageContext);

  useEffect(() => {
    ReactGA.initialize(CONFIG.GA);

     (async function anyNameFunction() {
      const jobs = await Api.list();
      setJobsdata(dispatch, jobs);
    })();
   window.scrollTo(0,0);
   window.addEventListener("resize", () => {
    const screenSize = document.documentElement.clientWidth;
    if (screenSize <= 880) {
      !isMobile && setIsMobile(dispatch, true);
    } else {
      isMobile && setIsMobile(dispatch, false);
    }
   });
   setIsMobile(dispatch, document.documentElement.clientWidth <= 880);
  }, []);

  return (
    <ChakraProvider>
      <Routes/>
    </ChakraProvider>
  )
};

export default App;
