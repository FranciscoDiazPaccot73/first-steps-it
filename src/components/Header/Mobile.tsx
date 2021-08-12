import { useState, useEffect } from 'react';

import { HeaderTypes } from './types';
import classNames from 'classnames';
import Programing from "../../Assets/programing";

import logo from '../../Assets/logo.png';

import { CONSTANTS, CONFIG } from '../../utils/constants';
import { trackEvent } from '../../utils/tracks';

const MobileHeader = ({ className = "fs__header", animate = false, isSticky, isMobile }: HeaderTypes) => {
  const [startTransition, setTransition] = useState(false);
  const [startSplitText, setSplit] = useState(false);
  const { HEADER } = CONFIG;

  const titleClasses = classNames(`${className}-title`, {
    [`${className}-title--final`]: startTransition,
  });
  const textClasses = classNames(`${className}-text`, {
    [`${className}-text--initial`]: animate,
    [`${className}-text--final`]: startSplitText,
  });
  const iconClasses = classNames(`${className}-icon`, {
    [`${className}-icon--visible`]: startTransition,
  });
  /* const itClasses = classNames(`${className}-text-it`, {
    [`${className}-text-it--size`]: startTransition,
  }); */
  const logoClasses = classNames(`${className}-logo`, {
    [`${className}-logo--small`]: startTransition,
  });
  const welcomeClasses = classNames(`${className}-welcome`,{
    [`${className}-welcome-visible`]: startTransition,
  });
  const headerCTAclasses = classNames(`${className}-cta`, {
    [`${className}-cta--visible`]: startTransition,
  });
  const stickyHeader = classNames("fs__sticky", {
    "fs__sticky-visible": isSticky,
  });
  const backgroundClasses = classNames("fs__background", {
    "fs__background--hidden": startTransition,
  });

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        setTransition(true);
      }, 1200);
      setTimeout(() => {
        setSplit(true);
      }, 400);
    }
  }, [animate]);

  const anchorProps = {
    href: `mailto:${CONSTANTS.EMAIL}`,
    onClick: () => trackEvent(HEADER, "CONTACT", isMobile ? "MOBILE" : "DESKTOP"),
  };

  const renderHeaderTop = () => (
    <>
      <div className={titleClasses}>
        <img className={logoClasses} src={logo}/>
        {!startTransition ? <div className={textClasses}>WE'RE</div> : null}
        {!startTransition ? <div className={textClasses}>HIRING</div> : null}
        {!startTransition ? <div className={textClasses}>Jr.</div> : null}
      </div>
      <a className={headerCTAclasses} {...anchorProps}>Contacto</a>
    </>
  );
  
  return (
    <>
      {startTransition ? (
        <div className={stickyHeader}>
          <div className={titleClasses} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img className={logoClasses} src={logo}/>
          </div>
          <a className={headerCTAclasses} {...anchorProps}>Contacto</a>
        </div>
      ) : null}
      <div className={className}>
        {renderHeaderTop()}
        <div className={welcomeClasses}>¡Abrite camino en el mundo IT!</div>
        <div className={iconClasses}>
          <Programing height={isMobile ? "180" : "220"} width={isMobile ? "300" : "600"}/>
        </div>
      </div>
      {isMobile ? <div className={backgroundClasses} /> : null}
    </>
  )
};

export default MobileHeader;
