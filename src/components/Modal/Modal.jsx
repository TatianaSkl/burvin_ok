import { useEffect } from 'react';
import { Overlay, Wrapper, IconClose, ButtonClose } from './Modal.styled';
import { Fotos, Video } from 'components';

export const Modal = ({ type, props, onClose }) => {
  let content;
  switch (type) {
    case 'video':
      content = <Video {...props} />;
      break;
    case 'fotos':
      content = <Fotos {...props} />;
      break;
    default:
      content = null;
  }

  useEffect(() => {
    const handleClick = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleClick);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleClick);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const onOverlayClickClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={onOverlayClickClose}>
      <Wrapper onClick={e => e.stopPropagation()}>
        <ButtonClose onClick={onClose}>
          <IconClose />
        </ButtonClose>
        {content}
      </Wrapper>
    </Overlay>
  );
};
