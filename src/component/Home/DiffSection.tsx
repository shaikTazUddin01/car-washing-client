import { useEffect } from "react";
import cleanCar from "../../assets/clean-car.png";
import durtyCar from "../../assets/durty-car.png";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../shared/SectionTitle";
const DiffSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="pt-10">
      <SectionTitle title="Wash Your Car"></SectionTitle>
      <div
      className="w-full"
      data-aos="fade-right"
      // data-aos-anchor="#example-anchor"
      data-aos-offset="200"
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
      <div className="flex justify-center md:-mt-10 ">
        <a href="/services">
      <button className="btn btn-neutral px-8 font-unbounded">Book Service</button>
        </a>
      </div>
    </div>
    </div>
  );
};

export default DiffSection;
