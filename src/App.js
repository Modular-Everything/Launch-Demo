import Carousel from './Carousel/Carousel';
import './App.css';
import ImgOne from './images/1.jpeg'
import ImgTwo from './images/2.jpeg'
import ImgThree from './images/3.jpeg'
import ImgFour from './images/4.jpeg'
import ImgFive from './images/5.jpeg'
import ImgSix from './images/6.jpeg'
import ImgSeven from './images/7.jpeg'
import ImgEight from './images/8.jpeg'

// 

function App() {
  const slidesA = [
    ImgOne,
    ImgTwo,
    ImgThree,
    ImgFour,
    ImgFive,
  ];

  const slidesB = [
    ImgEight,
    ImgSix,
  ];

  const slidesC = [
    ImgSeven,
    ImgEight,
    ImgSix,
  ]

  return (
    <div className="App">
      <div>
        <Carousel slides={slidesA} />
        <p>Default settings - looped, no pagination or navigation</p>
      </div>

      <div>
        <Carousel slides={slidesB} pagination navigation />
        <p>Pagination and navigation</p>
      </div>

      <div>
        <Carousel slides={slidesC} navigation loop={false} className="customCarousel" />
        <p>No pagination, navigation and looping disabled. Includes simple custom navigation.</p>
      </div>

    </div>
  );
}

export default App;
