import { useContext, useState, useEffect } from "react";

import MobileHeader from "./Mobile";
import DesktopHeader from "./Desktop";

import { PageContext } from '../../context/index';

import './lib/styles.scss';

const Header = () => {
  const { state: { isMobile, shouldAnimateHome } } = useContext(PageContext);
  const [animate, setAnimateState] = useState(false);

  useEffect(() => {
    if (shouldAnimateHome) {
      setTimeout(() => {
        setAnimateState(true);
      }, 300);
    }
  }, [])

  const headerProps = {
    shouldAnimateHome,
    animate,
  };

  return <>{isMobile ? <MobileHeader {...headerProps} /> : <DesktopHeader {...headerProps} />}</>
};

export default Header;
