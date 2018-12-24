import React from 'react';
import Slider from 'ac-react-simple-image-slider';

const imageData = [
  {
    src: '/assets/slide1.jpg',
    title: 'Slide 1'
  },
  {
    src: '/assets/slide2.jpg',
    title: 'Slide 2'
  },
  {
    src: '/assets/slide3.jpg',
    title: 'Slide 3'
  }
];

const App = () => (
  <React.Fragment>
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
      <Slider data={imageData} />
    </div>
  </React.Fragment>
);

export default App;
