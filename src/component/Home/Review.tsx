import { Rate } from "antd";
import "./Review.css";
import SubmitReview from "./SubmitReview";
import { useGetReviewQuery } from "../../redux/review/reviewApi";
import ReviewCard from "./ReviewCard";
import { TReview } from "../../Types";
import SectionTitle from "../shared/SectionTitle";
import { useAppSelector } from "../../redux/hooks/hooks";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ReviewSection = () => {
  const { data: allReviews, isLoading } = useGetReviewQuery(undefined);
  const isUserExists=useAppSelector(state=>state.auth.user)
  

  useEffect(() => {
    AOS.init();
  }, []);


  if (isLoading) {
    return <p>Loading...</p>;
  }
  const Reviews = allReviews?.data;
  const aveReviews =
   Number( (Reviews?.reduce((acc: number, review: TReview) => acc + review?.rating, 0) /
      Reviews?.length || 0).toFixed(2));

  // console.log(allReviews);

  return (
    <div className="relative bg-gray-100">
      <div className="py-12 mt-20 max-w-[1440px] mx-auto">
        <SectionTitle title="OverAll Review" />
        {/* review section */}
        <div className="grid  grid-cols-1 lg:grid-cols-5 gap-10 justify-center items-center align-middle pt-5">
          {/* left side */}
          <div className="w-full lg:col-span-2 lg:border-[#696969] lg:border-r-2">
            <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100">
            <h1 className="text-[120px] md:text-[170px] font-semibold text-center " >
              {aveReviews}
            </h1>
            <div className="flex justify-center -mt-10 ">
              <div className="flex items-center justify-center gap-2">
                <h1 className="font-semibold text-xl border-r-2 border-black pr-2">
                  {Reviews?.length} Clients
                </h1>
                <Rate
                  disabled
                  allowHalf
                  defaultValue={aveReviews}
                  className="text-3xl"
                />
              </div>
            </div>
            </div>
          </div>
          {/* right side */}
          <div className=" w-full px-5 lg:px-8 lg:pr-10 space-y-5 lg:col-span-3">
            {/* card-1 */}

            {Reviews?.slice(0, 2)?.map((item: any) => {
              return <ReviewCard item={item} key={item?._id} />;
            })}
            <div className="text-center" data-aos="fade-up"  data-aos-offset="20">
              <a href="/allReview">
                <button className="btn btn-neutral btn-sm">
                  See All Review..
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* submit review */}
        <SubmitReview />
      </div>
      {
      !isUserExists &&
      <div className="h-full w-full bg-[#060606f8] absolute top-0 flex justify-center items-start">
        <a href="/login"> <button className="btn btn-white px-7 text-xl mt-10">Login</button></a>
      </div>}
    </div>
  );
};

export default ReviewSection;
