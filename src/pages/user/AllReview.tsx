
import ReviewCard from "../../component/AllReview/ReviewCard";
import SectionTitle from "../../component/shared/SectionTitle";
import { useGetReviewQuery } from "../../redux/review/reviewApi";


const AllReview = () => {
    const { data: allReviews, isLoading } = useGetReviewQuery(undefined);

  if (isLoading) {
    return (
        <div className="min-h-screen">
             <p>Loading...</p>
        </div>
    );
  }

  const Reviews = allReviews?.data;
    return (
        <div className="min-h-screen py-20 bg-gray-100 px-10">
            <div className="mt-10">
            <SectionTitle title="All Client Reviews"/>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* card-1 */}

            {Reviews?.map((item: any) => {
              return <ReviewCard item={item} />;
            })}
            </div>
        </div>
    );
};

export default AllReview;