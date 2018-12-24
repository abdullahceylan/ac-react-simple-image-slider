import React from 'react';
import { render } from 'react-dom';
import Slider from '../BuildSlider';

const imageData = [
  {
    src: 'https://placeimg.com/640/480/any',
    title: 'Slide 1'
  },
  {
    src: 'https://placeimg.com/640/480/any',
    title: 'Slide 2'
  }
];

test("The slider shouldn't have any slide", () => {
  const container = document.createElement('div');
  render(<Slider />, container);
  expect(container.innerHTML).toMatch('No slides');
});

test('The slider should have rendered with at least 1 slide', () => {
  const container = document.createElement('div');
  render(<Slider data={imageData} />, container);

  const slides = container.querySelectorAll('.slideImage');
  expect(slides.length).toBeGreaterThan(0);
});

test('Images should have a title (alternative text)', () => {
  const container = document.createElement('div');
  render(<Slider data={imageData} />, container);

  const slides = container.querySelectorAll('.slideImage');
  slides.forEach(slide => expect(slide.alt).not.toBe(''));
});

test("Images shouldn't have a title (alternative text)", () => {
  const container = document.createElement('div');
  const imagesWithEmptyTitle = imageData.map(image => ({
    ...image,
    title: ''
  }));

  render(<Slider data={imagesWithEmptyTitle} />, container);

  const slides = container.querySelectorAll('.slideImage');
  slides.forEach(slide => expect(slide.alt).toBe(''));
});

test('Arrow navigations and indicators (dots) should be displayed', () => {
  const container = document.createElement('div');
  render(<Slider data={imageData} showArrows showDots />, container);

  const leftArrowSelector = container.querySelector(
    'div[data-qa-node="ArrowLeft"]'
  );
  const rightArrowSelector = container.querySelector(
    'div[data-qa-node="ArrowRight"]'
  );
  const dotsSelector = container.querySelector('div[data-qa-node="Dot"]');

  expect(leftArrowSelector).not.toBeNull();
  expect(rightArrowSelector).not.toBeNull();
  expect(dotsSelector).not.toBeNull();
});

test("Arrow navigations and indicators (dots) shouldn't be displayed", () => {
  const container = document.createElement('div');
  render(
    <Slider data={imageData} showArrows={false} showDots={false} />,
    container
  );

  const leftArrowSelector = container.querySelector(
    'div[data-qa-node="ArrowLeft"]'
  );
  const rightArrowSelector = container.querySelector(
    'div[data-qa-node="ArrowRight"]'
  );
  const dotsSelector = container.querySelector('div[data-qa-node="Dot"]');

  expect(leftArrowSelector).toBeNull();
  expect(rightArrowSelector).toBeNull();
  expect(dotsSelector).toBeNull();
});

test('Dots count should match with the exact number of the images count', () => {
  const container = document.createElement('div');
  render(<Slider data={imageData} showDots={true} />, container);

  const dotsSelector = container.querySelectorAll('div[data-qa-node="Dot"]');
  expect(dotsSelector.length).toBe(imageData.length);
});
