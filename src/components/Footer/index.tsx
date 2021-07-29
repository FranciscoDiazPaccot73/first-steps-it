import { useContext } from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';

import { PageContext } from '../../context/index';

import './lib/styles.scss';

const Footer = () => {
  const { state: { showJobs } } = useContext(PageContext);

  return (
    <>
      {showJobs ? (
        <div className="fs__footer">
          <div className="fs__footer-copyright">
            <AiOutlineCopyright /><span>Copyright {new Date().getFullYear()}. Todos los derechos reservados.</span>
          </div>
          <div className="fs__footer-dev">
            Powered by <a>Francisco Diaz Paccot</a>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Footer;
