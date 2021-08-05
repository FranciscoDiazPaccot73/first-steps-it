import { useState } from "react";
import { CardType } from "./types";
import { FiChevronRight } from 'react-icons/fi';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"

import { getCorporateName, getCorporateLogo } from '../../utils/jobs';

const Card = ({ job, className = "fs__jobs-card", isMobile }: CardType) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const { link, title, corporate, location, requirement, allRequirement, benefits, description } = job;
  const Wrapper = isMobile ? 'a' : 'div';
  const anchorProps = {
    href: link,
    target: '_blank',
    rel: 'noreferrer noopener',
  };
  const wrapperProps = isMobile ? anchorProps : {};
  const REQUIREMENTS = 'Requisitos';
  const DESCRIPTION = 'Descipción';
  const BENEFITS = 'Beneficios';

  const renderContent = (id: string, content: string) => {
    if (id === REQUIREMENTS || id === BENEFITS) {
      const newContent = content.split('|');
      return (
        <div className={`${className}-requirements-content`}>
          {newContent.map(text => (
            <div key={text} className="list">{text}</div>
          ))}
        </div>
      );
    }

    return (
      <div className={`${className}-requirements-content`}>
        {content}
      </div>
    );
  };

  const renderInfo = (title: string, content: string) => (
    <div className={`${className}-requirements`}>
      <div className={`${className}-requirements-title`}>{`${title}:`}</div>
      {renderContent(title, content)}
    </div>
  );

  const handleClose = () => setIsOpen(false);

  const handleSeeMore = () => {
    setIsOpen(true);
  };

  const renderModal = () => (
    <Drawer
      isOpen={isOpen}
      placement={isMobile ? "right" : "top"}
      onClose={handleClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <div className="sidebar__header"><div className="sidebar__header-logo">{getCorporateLogo(corporate)}</div><span>{title}</span></div>
        </DrawerHeader>
        <DrawerBody>
          <div className="sidebar__content">
            {renderInfo(DESCRIPTION, description)}
            {renderInfo(REQUIREMENTS, allRequirement)}
            {benefits ? renderInfo(BENEFITS, benefits) : null}
          </div>
        </DrawerBody>

        <DrawerFooter>
        <div className="sidebar__action" onClick={handleClose}>
            <a className={`${className}-cta`} {...anchorProps}>APLICAR</a>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );

  return (
    <div style={{ position: "relative" }}>
    <div className={`${className}-background-see-more`} style={{zIndex: 100}} onClick={handleSeeMore}>Conocer más</div>
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
              <a className={`${className}-cta`} {...anchorProps}>APLICAR</a>
            </>
          ) : null}
        </div>
        {isMobile && requirement ? (
          <>
            <div className={`${className}-chevron`}>
              <FiChevronRight color="#281830" />
            </div>
            {renderInfo(REQUIREMENTS, requirement)}
          </>
        ) : (
          <div className={`${className}-job`}>
            {renderInfo(DESCRIPTION, description)}
            {renderInfo(REQUIREMENTS, requirement)}
          </div>
        )}
      </div>
      {renderModal()}
    </Wrapper>
    </div>
  );
}

export default Card;
