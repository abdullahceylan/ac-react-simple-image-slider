# ac-react-simple-image-slider

> A simple image slider built with React, styled-components and hooks

[![NPM](https://img.shields.io/npm/v/ac-react-simple-image-slider.svg)](https://www.npmjs.com/package/ac-react-simple-image-slider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save ac-react-simple-image-slider
```

or

```bash
yarn install --save ac-react-simple-image-slider
```

## Method 1: children node

```jsx
import React from 'react'
import ImageSlider from 'ac-react-simple-image-slider'

const Example = () => (
  <ImageSlider
    height="640px"
    width="480px"
  >
    <img key="1" src="https://placeimg.com/640/480/any" alt="Slide 1" />
    <img key="1" src="https://placeimg.com/640/480/any" alt="Slide 2" />
    <img key="1" src="https://placeimg.com/640/480/any" alt="Slide 3" />
  </ImageSlider>
);
```
**Note:** `key` attribute is required and must be **unique**.

## Method 2: JSON data

```jsx
import React from 'react'
import ImageSlider from 'ac-react-simple-image-slider'

const imageData = [
  {
    src: 'https://placeimg.com/640/480/any',
    title: 'Image 1',
  },
  {
    src: 'https://placeimg.com/640/480/any',
    title: 'Image 2',
  },
];

const Example = () => (
  <ImageSlider
    height="640px"
    width="480px"
    data={imageData}
  />
);
```

### Props

Name             | Type       | Default                   | Description
-----------------|------------|---------------------------|--------------
initialIndex        | `number`   | `0`                    | The index of the initial slide image. `0` points to first slide image.
height        | `string`   | `100%`                    | Custom slider height. e.g.: `640px`
width        | `string`   | `100%`                    | Custom slider width. e.g.: `480px`
data        | `arrayOfObject`   | `[]`                    | (optional) Slider images array. If you have provide an images array data, the children data will be ignored.
showArrows        | `bool`   | `true`                    | Whether the navigation arrows will display or not
showDots        | `bool`   | `true`                    | Whether the dots will display bottom of the slider or not
autoPlay        | `bool`   | `true`                    | (optional) Whether the slideshow should start automatically
duration        | `number`   | `3`                    | (optional) How long wait (seconds) before the next transition starts. It also uses by animation duration
infinite        | `bool`   | `false`            | (optional) Whether the transition should loop throughout
leftArrowComponent        | `string`   | `<`                    | Custom left arrow
rightArrowComponent       | `string`   | `>`                    | Custom right arrow

## Todo
* [x] Tests 
* [ ] Add following props:


Name             | Type       | Default                   | Description
-----------------|------------|---------------------------|--------------
dotComponent        | `node`   | `null`                    | Custom component for the dots

## License

MIT © [abdullahceylan](https://github.com/abdullahceylan)
