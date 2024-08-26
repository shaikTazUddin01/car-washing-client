import { useEffect } from "react";
import DiffSection from "../../component/Home/DiffSection";
import FeatureService from "../../component/Home/FeatureService";
import HeroSection from "../../component/Home/HeroSection";
import Review from "../../component/Home/Review";



const Home = () => {
    
  return (
    <div>
      {/* hero section */}
      <HeroSection />
      {/* home content */}
      <div className="px-5">
        {/* feature services */}
        <FeatureService />
        {/* diff section */}
        <DiffSection />
        {/* review */}
        <Review />
      </div>
    </div>
  );
};

export default Home;
