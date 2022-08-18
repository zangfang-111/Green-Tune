import { useRef } from 'react';
import { Popover, ArrowContainer } from 'react-tiny-popover'

const ArrowContainerWrapper = ({
  position,
  childRect,
  popoverRect,
  children,
}) => (
  <ArrowContainer
    position={position}
    childRect={childRect}
    popoverRect={popoverRect}
    arrowColor={'blue'}
    arrowSize={10}
    arrowStyle={{ opacity: 0.7 }}
    className='popover-arrow-container'
    arrowClassName='popover-arrow'
  >
    {children}
  </ArrowContainer>
);

function GtPopover({ isOpen, children, Container, setIsOpen }) {
  const clickMeButtonRef = useRef();

  return (
    <Popover
      isOpen={isOpen}
      positions='bottom'
      containerStyle={{
        top: '80px',
        left: '6px',
      }}
      ref={clickMeButtonRef}
      onClickOutside={() => setIsOpen(false)}
      content={prop => (
        <ArrowContainerWrapper {...prop}>
          <Container />
        </ArrowContainerWrapper>
      )}
    >
      {children}
    </Popover>
  );
}

export default GtPopover;
