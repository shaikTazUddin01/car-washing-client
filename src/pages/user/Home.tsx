import DiffSection from "../../component/Home/DiffSection";
import FeatureService from "../../component/Home/FeatureService";
import HeroSection from "../../component/Home/HeroSection";
// import Review from "../../component/Home/Review";
import ReviewSection from "../../component/Home/Review";
import ScrollToTop from "../../component/Home/ScrollToTop";


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(()=>{
      AOS.init()
    },[])
  return (
    <div>
      {/* hero section */}
      <HeroSection />
      {/* home content */}
      <div className="px-5">
        {/* feature services */}
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100">
        <FeatureService />
        </div>
        {/* diff section */}
        <DiffSection />
      </div>
        {/* review */}
        <ReviewSection />
        <ScrollToTop/>
    </div>
  );
};

export default Home;
