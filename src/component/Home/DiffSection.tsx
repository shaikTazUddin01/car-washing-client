import { useEffect } from "react";
import cleanCar from "../../assets/clean-car.png";
import drityCar from "../../assets/durty-car.png";
import bg1 from "../../assets/main-banner-1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../shared/SectionTitle";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
const DiffSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="pt-10 w-full ">
      <SectionTitle title="Wash Your Car"></SectionTitle>

      <div
        className="w-full  mb-5 px-5 bg-cover"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-duration="1000"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="max-w-7xl mx-auto">
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={cleanCar}
                srcSet={cleanCar}
                alt="Image one"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={drityCar}
                srcSet={drityCar}
                alt="Image two"
              />
            }
            style={{ objectPosition: "left" }}
          />
        </div>
      </div>
      <div
        className="flex justify-center  "
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1000"
      >
        <a href="/services">
          <button className="btn btn-neutral px-8 font-unbounded">
            Book Service
          </button>
        </a>
      </div>
    </div>
  );
};

export default DiffSection;
