import { useState, useEffect } from 'react';

import { HeaderTypes } from './types';
import classNames from 'classnames';
import Programing from "../../Assets/programing";

import logo from '../../Assets/logo.png';

const MobileHeader = ({ className = "fs__header", animate = false, isSticky, isMobile }: HeaderTypes) => {
  const [startTransition, setTransition] = useState(false);
  const [startSplitText, setSplit] = useState(false);

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
  const itClasses = classNames(`${className}-text-it`, {
    [`${className}-text-it--size`]: startTransition,
  });
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
    href: "mailto:info@hiringjr.com",
  };

  const renderHeaderTop = () => (
    <>
      <div className={titleClasses}>
        <img className={logoClasses} src={logo}/>
        <div className={textClasses}>WE'RE</div>
        <div className={textClasses}>HIRING</div>
        <div className={itClasses}>Jr.</div>
      </div>
      <a className={headerCTAclasses} {...anchorProps}>Contacto</a>
    </>
  );
  
  return (
    <>
      {startTransition ? (
        <div className={stickyHeader}>
          <div className={titleClasses}>
            <img className={logoClasses} src={logo}/>
            <div className={itClasses}>Jr.</div>
          </div>
          <a className={headerCTAclasses} {...anchorProps}>Contacto</a>
        </div>
      ) : null}
      <div className={className}>
        {renderHeaderTop()}
        <div className={welcomeClasses}>¡Encontrá un lugar para realizar tus primeros pasos en el mundo IT!</div>
        <div className={iconClasses}>
          <Programing height={isMobile ? "180" : "220"} width={isMobile ? "300" : "600"}/>
        </div>
      </div>
      {isMobile ? <div className={backgroundClasses} /> : null}
    </>
  )
};

export default MobileHeader;
