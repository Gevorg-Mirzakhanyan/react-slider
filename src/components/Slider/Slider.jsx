
import { useState } from 'react';
import leftArrow from '../../assets/image/left-arrow.png';
import rightArrow from '../../assets/image/right-arrow.png';
import './Slider.scss'
function Slider({images}) {
    
    const [current, setCurrent] = useState(0)
    const currentImageStyle = {
        backgroundImage: `url(${images[current]})`,
        height: '100vh',
        width: '80%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      };

    const imgLeftClick = ()=> {
        setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    }

    const imgRightClick = () => {
        setCurrent((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }         

   return(
        <div className='sliderContainer'>
            <div className='imageSlider' style={currentImageStyle}>
                <img onClick={imgRightClick} className='arrow leftArrow' src={leftArrow} alt='' />
                <img onClick={imgLeftClick} className='arrow rightArrow' src={rightArrow} alt='' />
            </div>
            <div className='imgBox'>
               {images.map((image, index) => (
                    <img 
                        key={index}
                        className={`imgBox ${current === index ? 'active' : ''}`}
                        src={image}
                        onClick={() => setCurrent(index)}
                        alt=''
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider;