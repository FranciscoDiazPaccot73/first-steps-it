import { CardType } from "./types";
import { FiChevronRight } from 'react-icons/fi';

import { getCorporateName, getCorporateLogo } from '../../utils/jobs';

const Card = ({ job, className = "fs__jobs-card", isMobile }: CardType) => {
  const { link, title, corporate, location, shortDescription, description } = job;
  const Wrapper = isMobile ? 'a' : 'div';
  const anchorProps = {
    href: link,
    target: '_blank',
    rel: 'noreferrer noopener',
  };
  const wrapperProps = isMobile ? anchorProps : {};
  const REQUIREMENTS = 'Requisitos';
  const DESCRIPTION = 'Descipción';

  const renderInfo = (title: string, content: string) => (
    <div className={`${className}-requirements`}>
      <div className={`${className}-requirements-title`}>{`${title}:`}</div>
      <div className={`${className}-requirements-content`}>
        {content}
      </div>
    </div>
  );

  return (
    <Wrapper className={className} {...wrapperProps}>
      <div className={`${className}-background`}>
          {isMobile ? <span>{location}</span> : null}
          <div className={`${className}-background-head`}>
            <div className={`${className}-logo`}>{getCorporateLogo(corporate)}</div>
            <div className={`${className}-information`}>
              <div className={`${className}-corporate`}>
                {getCorporateName(corporate)}
              </div>
              <div className={`${className}-info`}>{title}</div>
            </div>
          {!isMobile ? (
            <>
              <div className={`${className}-location`}>Ubicación: <div>{location}</div></div>
              <a className={`${className}-cta`} {...anchorProps}>POSTULATE</a>
            </>
          ) : null}
        </div>
        {isMobile && shortDescription ? (
          <>
            <div className={`${className}-chevron`}>
              <FiChevronRight color="#281830" />
            </div>
            {renderInfo(REQUIREMENTS, shortDescription)}
          </>
        ) : (
          <div className={`${className}-job`}>
            {renderInfo(DESCRIPTION, description)}
            {renderInfo(REQUIREMENTS, shortDescription)}
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default Card;
