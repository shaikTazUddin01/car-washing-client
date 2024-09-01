import { useEffect } from "react";
import cleanCar from "../../assets/clean-car.png";
import durtyCar from "../../assets/durty-car.png";
import AOS from "aos";
import "aos/dist/aos.css";
const DiffSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="mt-10 w-full"
      data-aos="fade-right"
      // data-aos-anchor="#example-anchor"
      data-aos-offset="50"
      data-aos-duration="5000"
    >
      <div className="diff aspect-[16/7] w-full">
        <div className="diff-item-1">
          <img src={cleanCar} alt="" className="h-auto" />
        </div>
        <div className="diff-item-2">
          <img src={durtyCar} alt="" className="h-auto" />
        </div>
        <div className="diff-resizer "></div>
      </div>
    </div>
  );
};

export default DiffSection;
