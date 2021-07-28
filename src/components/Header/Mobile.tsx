import { useState, useEffect } from 'react';

import { HeaderTypes } from './types';
import classNames from 'classnames';
import Programing from "../../Assets/programing";

import logo from '../../Assets/logo.png';

const MobileHeader = ({ className = "fs__header", animate = false }: HeaderTypes) => {
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

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        setTransition(true);
      }, 1200);
      setTimeout(() => {
        setSplit(true);
      }, 400);
    }
  }, [animate])
  
  return (
    <div className={className}>
      <div className={titleClasses}>
        <img className={logoClasses} src={logo}/>
        <div className={textClasses}>Primeros</div>
        <div className={textClasses}>Pasos</div>
        <div className={itClasses}>IT</div>
      </div>
      <div className={headerCTAclasses}>Trabajos</div>
      <div className={welcomeClasses}>Encontra un lugar para realizar tus primeros pasos en el increible mundo IT!</div>
      <div className={iconClasses}>
        <Programing height="180" width="300"/>
      </div>
    </div>
  )
};

export default MobileHeader;
