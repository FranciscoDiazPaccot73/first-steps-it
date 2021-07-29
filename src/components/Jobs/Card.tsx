import { CardType } from "./types";
import { FiChevronRight } from 'react-icons/fi';

import { getCorporateName } from '../../utils/jobs';

const Card = ({ job, className = "fs__jobs-card", isMobile }: CardType) => {
  const { link, title, corporate, location } = job;
  const Wrapper = isMobile ? 'a' : 'div';
  const anchorProps = {
    href: link,
    target: '_blank',
    rel: 'noreferrer noopener',
  };
  const wrapperProps = isMobile ? anchorProps : {};

  return (
    <Wrapper className={className} {...wrapperProps}>
      <div className={`${className}-background`}>
        {isMobile ? <span>{location}</span> : null}
        <div className={`${className}-logo`}/>
        <div className={`${className}-information`}>
          <div className={`${className}-corporate`}>
            {getCorporateName(corporate)}
          </div>
          <div className={`${className}-info`}>{title}</div>
        </div>
        {!isMobile ? (
          <>
            <div className={`${className}-location`}>Ubicacion: <div>{location}</div></div>
            <a className={`${className}-cta`} {...anchorProps}>POSTULATE</a>
          </>
        ) : (
          <div className={`${className}-chevron`}>
            <FiChevronRight color="#189396" />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default Card;
