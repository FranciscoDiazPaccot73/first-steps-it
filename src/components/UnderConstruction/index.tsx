import { useContext, useEffect } from 'react';
import UnderConstruction from '../../Assets/underConstruction';

import { PageContext } from '../../context/index';

import { CONSTANTS } from '../../utils/constants';
import { trackView } from '../../utils/tracks';

import './lib/styles.scss';

const ConstructionMain = () => {
  const { state: { isMobile } } = useContext(PageContext);
  
  useEffect(() => {
    trackView("/under-construction");
  }, []);

  return (
    <div className="fs__under-construction" >      
      <UnderConstruction height={isMobile ? "180px" : "300px"} width={isMobile ? "300px" : "500px"} />
      <div className="fs__under-construction-text" > Estamos terminando de construirnos. En breve estaremos disponibles.</div>
      <div className="fs__under-construction-contact" > Podes contactarnos a <a href={`mailto:${CONSTANTS.EMAIL}`}><strong>{CONSTANTS.EMAIL}</strong></a> </div>
    </div>
  )
};

export default ConstructionMain;
