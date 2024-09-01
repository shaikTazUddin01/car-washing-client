import { Rate } from "antd";
import "./Review.css";
import SubmitReview from "./SubmitReview";
import { useGetReviewQuery } from "../../redux/review/reviewApi";
import ReviewCard from "./ReviewCard";
import { TReview } from "../../Types";
import SectionTitle from "../shared/SectionTitle";


const ReviewSection = () => {
  const { data: allReviews, isLoading } = useGetReviewQuery(undefined);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  const Reviews = allReviews?.data;
  const aveReviews =
    Reviews?.reduce((acc: number, review:TReview) => acc
    + review?.rating, 0) /
    Reviews?.length || 0;

  

  return (
    <div>
      <div className="py-12 mt-20 bg-gray-100">
       <SectionTitle title="OverAll Rating"/>
        {/* review section */}
        <div className="grid  grid-cols-1 lg:grid-cols-5 gap-10 justify-center items-center align-middle pt-5">
          {/* left side */}
          <div className="w-full lg:col-span-2 lg:border-[#696969] lg:border-r-2">
            <h1 className="text-[170px] font-semibold text-center ">{aveReviews}</h1>
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
          {/* right side */}
          <div className=" w-full px-5 lg:pr-5 space-y-5 lg:col-span-3">
            {/* card-1 */}

            {Reviews?.slice(0, 2)?.map((item: any) => {
              return <ReviewCard item={item} />;
            })}
            <div className="text-center">
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
    </div>
  );
};

export default ReviewSection;
