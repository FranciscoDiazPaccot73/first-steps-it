import { useContext } from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';

import { PageContext } from '../../context/index';
import { CONFIG } from '../../utils/constants';
import { trackEvent } from '../../utils/tracks';

import './lib/styles.scss';

const Footer = () => {
  const { state: { showJobs, isMobile } } = useContext(PageContext);
  const { FOOTER } = CONFIG;
  const anchorProps = {
    href: 'https://franciscodiazpaccot.com',
    target: '_blank',
    rel: 'noreferrer noopener',
    onClick: () => trackEvent(FOOTER, "DEV_PAGE", isMobile ? "MOBILE" : "DESKTOP"),
  };

  return (
    <>
      {showJobs ? (
        <div className="fs__footer">
          <div className="fs__footer-copyright">
            <AiOutlineCopyright /><span>Copyright {new Date().getFullYear()}. Todos los derechos reservados.</span>
          </div>
          <div className="fs__footer-dev">
            Powered by <a {...anchorProps}>Francisco Diaz Paccot</a>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Footer;
