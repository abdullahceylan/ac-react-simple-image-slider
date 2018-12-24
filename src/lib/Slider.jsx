import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';
import {
  ArrowLeft,
  ArrowRight,
  ElementWrapper,
  SlideImage,
  SliderFooter,
  Dot,
} from './Slider.styles';

const SliderContext = React.createContext();

const useSliderContext = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error(
      `Slider compound components cannot be rendered outside the Slider component`
    );
  }
  return context;
}

const buildImages = (data, currentIndex) => {
  if (Array.isArray(data) && data.length > 0) {
    return data.map((slide, index) => <SlideImage className="slideImage" isActive={currentIndex === index} key={index} src={slide.src} alt={slide.title} />);
  }
  return null;
};

const Slider = ({
  slides,
  initialIndex,
  infinite,
  autoPlay,
  duration,
  showArrows,
  showDots,
  ...rest
}) => {
  // Declare a new variable to count slides
  const slideCount = slides ? slides.length : 0;

  // Check if there is any slide
  if (!slideCount) {
    return <div>No slides</div>;
  }

  // Declare a new state variable, which we'll call "currentIndex"
  const [currentIndex, setIndex] = useState(initialIndex);

  // Set autoplay
  useEffect(
    () => {
      if (autoPlay) {
        setInterval(() => {
          nextSlide();
        }, duration * 1000);
      }
    },
    [slides]
  );

  // Next slide callback
  const nextSlide = () => {
    setIndex(oldIndex => (oldIndex === slideCount - 1 ? 0 : oldIndex + 1));
  };

  // Previous slide callback
  const prevSlide = () => {
    setIndex(oldIndex =>
      currentIndex > 0 ? oldIndex - 1 : infinite ? slideCount - 1 : 0
    );
  };

  return (
    <SliderContext.Provider
      value={{
        currentIndex,
        slideCount,
        slides,
        autoPlay,
        nav: {
          showDots,
          showArrows,
          onNext: nextSlide,
          onPrev: prevSlide,
          setIndex
        }
      }}
    >
      {rest.children}
    </SliderContext.Provider>
  );
};

Slider.LeftArrow = ({ children }) => {
  const { nav } = useSliderContext();
  return nav.showArrows ? (
    <ArrowLeft onClick={nav.onPrev}>{children}</ArrowLeft>
  ) : null
};

Slider.RightArrow = ({ children }) => {
  const { nav } = useSliderContext();
  return nav.showArrows ? (
    <ArrowRight onClick={nav.onNext}>{children}</ArrowRight>
  ) : null
};

Slider.Content = () => {
  const { currentIndex, autoPlay, duration, slideCount, slides } = useSliderContext();
  return slideCount ? (
    <ElementWrapper isAutoPlay={autoPlay} duration={(duration)}>{buildImages(slides, currentIndex)}</ElementWrapper>
  ) : null
}

Slider.Dots = () => {
  const { nav, slideCount, currentIndex } = useSliderContext();
  return nav.showDots ? (
    <SliderFooter>
      {range(slideCount).map(item => (
        <Dot
          key={item}
          selected={item === currentIndex}
          onClick={() => nav.setIndex(item)}
        />
      ))}
    </SliderFooter>
  ) : null
}

Slider.propTypes = {
  initialIndex: PropTypes.number,
  slides: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  showArrows: PropTypes.bool,
  showDots: PropTypes.bool,
  infinite: PropTypes.bool,
  autoPlay: PropTypes.bool,
  duration: PropTypes.number,
};

Slider.defaultProps = {
  initialIndex: 0,
  data: null,
  showArrows: true,
  showDots: true,
  infinite: false,
  autoPlay: true,
  duration: 3,
};

export default Slider;
