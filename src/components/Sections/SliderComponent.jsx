import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../../data.json';

function SliderComponent() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1922,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const sliderData = [...data['section-slider'], ...data['section-slider']];

  return (
    <section id="slider">
      <div className="w-[98vw] py-2 mx-auto">
        <Slider {...settings} className="flex  justify-center items-end">
          {sliderData.map((logo, index) => (
            <div key={index} className="container flex items-center">
              <div
                className="flex justify-center items-center"
                style={{ height: '5rem' }}
              >
                <img
                  height={64}
                  src={logo.url}
                  alt={logo.alt}
                  className="shadow-only-painted px-12"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SliderComponent;
