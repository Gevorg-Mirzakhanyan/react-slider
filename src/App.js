
import './App.css';
import Slider from './components/Slider/Slider';
import img1 from './assets/image/carImg.jpg';
import img2 from './assets/image/carImg2.webp';
import img3 from './assets/image/carImg3.jpg';
import img4 from './assets/image/carImg4.jpg';


const images = [
  img1,
  img2,
  img3,
  img4
]

function App() {
  return (
    <div className="App">
      <Slider images={images} />
    </div>
  );
}

export default App;
