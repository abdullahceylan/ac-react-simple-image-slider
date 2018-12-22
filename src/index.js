import React from 'react';
import { render } from 'react-dom';
import ImageSlider from './lib';

const App = () => (
  <>
    <div
      style={{
        position: 'absolute',
        zIndex: '2',
        color: '#fff',
        textAlign: 'center',
        width: '100%'
      }}
    >
      <h1>AC Simple React Slider</h1>
    </div>
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <ImageSlider>
        <img key='1' src='/assets/slide1.jpg' alt='Slide 1' />
        <img key='2' src='/assets/slide2.jpg' alt='Slide 2' />
        <img key='3' src='/assets/slide3.jpg' alt='Slide 3' />
      </ImageSlider>
    </div>
  </>
);

render(<App />, document.getElementById('root'));
