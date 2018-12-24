import React from 'react';
import PropTypes from 'prop-types';
import { SliderWrapper, SliderContent } from './Slider.styles';
import Slider from './Slider';

const BuildSlider = ({
  children,
  data,
  width,
  height,
  leftArrowComponent,
  rightArrowComponent,
  ...props
}) => (
  <SliderWrapper height={height} width={width}>
    <SliderContent isDots={props.showDots}>
      <Slider slides={data} {...props}>
        <Slider.LeftArrow>{leftArrowComponent}</Slider.LeftArrow>
        <Slider.Content />
        <Slider.RightArrow>{rightArrowComponent}</Slider.RightArrow>
        <Slider.Dots />
      </Slider>
    </SliderContent>
  </SliderWrapper>
);

BuildSlider.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  showDots: PropTypes.bool,
  leftArrowComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  rightArrowComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

BuildSlider.defaultProps = {
  width: '100%',
  height: '100%',
  data: null,
  showDots: true,
  leftArrowComponent: '<',
  rightArrowComponent: '>',
};

export default BuildSlider;
