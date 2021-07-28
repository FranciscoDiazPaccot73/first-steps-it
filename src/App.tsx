import { useEffect, useContext } from 'react';

import { PageContext } from './context/index';
import { setProducts } from './context/actions';

import Routes from './Routes';

import './styles.scss';

const App = () => {
  const { dispatch, state: { isMobile } } = useContext(PageContext);

  useEffect(() => {
    /*
     (async function anyNameFunction() {
      await loadContent();
    })();
    */
   window.scrollTo(0,0);
   window.addEventListener("resize", () => {
    const screenSize = document.documentElement.clientWidth;
    if (screenSize <= 970) {
      !isMobile && setProducts(dispatch, true);
    } else {
      isMobile && setProducts(dispatch, false);
    }
   });
   setProducts(dispatch, document.documentElement.clientWidth <= 970);
  }, []);

  return (
    <Routes/>
  )
};

export default App;
