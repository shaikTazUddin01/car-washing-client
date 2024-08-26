import banner from "../../assets/main-banner-2.png";
import car from "../../assets/car.png";
import line from "../../assets/line-1.png";
import "./heroSection.css";

const HeroSection = () => {



  return (
    <div
      className=" bg-cover bg-center "
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="px-10 pb-32 pt-40">
        {/* first part */}
        <div className="flex text-white items-center gap-5 md:gap-10 justify-center lg:justify-normal">
          <h1 className="text-[30px] md:text-[80px] lg:text-[105px] font-unbounded font-semibold  relative flex items-center gap-2">
            Speedy
            <span className="relative inline-block z-0">
              <span className="z-10 text-[30px] md:text-[80px] lg:text-[130px] shine-text font-caveat font-bold ">
                {" "}
                Shine
              </span>
              {/* line */}
              <img
                src={line}
                alt=""
                className="absolute -top-2 md:top-12 lg:top-[102px] -z-10  h-20 shine-line left-3"
              />
            </span>
          </h1>
          {/* moving car */}
          <div className="car_moving">
            <img src={car} alt="" className="w-auto h-auto " />
          </div>
        </div>
        {/* second part */}
        <div className="flex text-white items-center lg:-mt-7 justify-center lg:justify-normal md:flex-col lg:flex-row">
          <p className=" text-3xl lg:text-2xl font-medium hidden md:inline md:w-[70%] lg:w-[30%] md:text-center lg:text-left">
            {" "}
            If You went a sparking clean vehicle then out wash is right
            for you
          </p>
          <p className="text-[40px] md:text-[80px] lg:text-[100px] font-unbounded font-semibold ">
            for your car
          </p>
        </div>
        {/* <div className="flex justify-center">
            <button className="btn btn-warning">Book Service</button>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
