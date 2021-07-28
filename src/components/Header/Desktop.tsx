import { useContext } from "react";

import { HeaderTypes } from './types';
import Programing from "../../Assets/programing";

const DesktopHeader = ({ className = "fs__header" }: HeaderTypes) => {
  return (
    <div className={`${className}-container`}>
      <div className={className}>Primeros Pasos IT</div>
      <div className={`${className}-icon`}>
        <Programing height="180" width="400"/>
      </div>
    </div>
  )
};

export default DesktopHeader;
