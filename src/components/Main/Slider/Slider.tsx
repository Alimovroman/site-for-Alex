import slide1 from '../../../assets/images/slide1.png'
import slide2 from '../../../assets/images/slide2.png'
import slide3 from '../../../assets/images/slide3.png'
import { useEffect, useState } from "react"
import classes from './Slider.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const slides = [slide1, slide2, slide3]

const SliderComponent: React.FC = () => {
  const [count, setCount] = useState(0)
  const [slide, setSlide] = useState(slides[count])

  let settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: false
  }

  return (
    <div id='home'>
      <Slider {...settings}>
        {slides.map(slide => (
          <div>
            <img src={slide} alt='slide' className={classes.slide} />
          </div>
        ))}
      </Slider>
      <p className={classes.sloganForPage}>
      УКРАШЕНИЯ<br/> <span className={classes.wordInSlogan}>ДЛЯ НЕГО<br/> И ДЛЯ НЕЁ</span>
      </p>
      <p className={classes.textForPage}>
        ЕСТВЕСТВЕННОСТЬ И СОВРЕМЕННОСТЬ,<br />
        ЭЛЕГАНТНОСТЬ И ЛАКОНИЧНОСТЬ.
      </p>
    </div>
  )
}

export default SliderComponent