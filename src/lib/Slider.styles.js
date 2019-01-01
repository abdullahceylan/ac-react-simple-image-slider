import styled, { css, keyframes } from 'styled-components';
import { ifProp, prop } from 'styled-tools';

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${prop('width', '500px')};
  height: ${prop('height', '500px')};
`;

export const SliderContent = styled.div`
  height: ${ifProp('isDots', 'calc(100% - 30px)', '100%')};
  width: 100%;
  position: relative;
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const ElementWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const SlideImage = styled.img`
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: none;
  ${ifProp(
    { isActive: true },
    css`
      display: block;
      opacity: 1;
      animation: ${fadeIn} 3s;
    `
  )}
`;

export const SliderFooter = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 30px;
  width: 30px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  & > img {
    height: 50%;
  }
`;

export const ArrowLeft = styled(Arrow)`
  left: 10px;
`;

export const ArrowRight = styled(Arrow)`
  right: 10px;
`;

export const Dot = styled.div`
  height: 9px;
  width: 5px;
  border-radius: 100%;
  background-color: gray;
  opacity: 0.6;
  cursor: pointer;

  ${ifProp(
    'selected',
    css`
      height: 5px;
      opacity: 1;
    `
  )}

  &:not(:last-child) {
    margin-right: 5px;
  }
`;
