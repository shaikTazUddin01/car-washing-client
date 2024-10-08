import { Rate } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ReviewCard = ({item}:{item:any}) => {
  useEffect(() => {
    AOS.init();
  }, []);
    return (
        <div className="flex flex-col lg:flex-row gap-2 justify-center items-center bg-white px-8 py-4 rounded-xl shadow-lg" key={item?._id} data-aos="fade-up" data-aos-duration="500" data-aos-offset="100">
        <div className="flex flex-col justify-center items-center">
          <img src={item?.user?.image} alt="" className="size-20  rounded-full" />
          {/* rating */}
          <div className="flex items-center flex-row justify-center gap-2 ">
            <h1 className="font-semibold text-xl">{item?.rating}/5</h1>
            <div className="space-x-0">
              <Rate
                disabled
                allowHalf
                defaultValue={item?.rating}
                className="flex"
              />
            </div>
          </div>
        </div>
        {/* text area */}
        <div className="text-center lg:text-left">
          <h1 className="text-xl font-medium">{item?.user?.name}</h1>
          <p>
            {item?.comment?.slice(0,140)}
            <a href="/allReview">
            <span className="text-green-700 font-semibold"> More...</span>
            </a>
          </p>
        </div>
      </div>
    );
};

export default ReviewCard;