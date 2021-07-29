import { useContext, useState, useEffect } from "react";

import MobileHeader from "./Mobile";

import { PageContext } from '../../context/index';
import { showJobs } from '../../context/actions';

import './lib/styles.scss';

const Header = () => {
  const { dispatch, state: { isMobile, shouldAnimateHome } } = useContext(PageContext);
  const [animate, setAnimateState] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (shouldAnimateHome) {
      setTimeout(() => {
        setAnimateState(true);
      }, 500);
      setTimeout(() => {
        showJobs(dispatch, true);
      }, 2000);
    }
  }, []);

  const onScrollAction = () => {
    const initSticky = isMobile ? 12 : 70;
    if (window.pageYOffset > initSticky) {
      !isSticky && setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }
  
  window.onscroll = () => onScrollAction();

  const headerProps = {
    shouldAnimateHome,
    animate,
    isSticky,
    isMobile,
  };

  return <MobileHeader {...headerProps}/>
};

export default Header;
