import { useParams } from "react-router-dom";
import { useGetSingleServicesQuery } from "../../redux/services/servicesApi";

import BookingSlot from "../../component/serviceDetails/BookingSlot";
import SectionTitle from "../../component/shared/SectionTitle";

const ServiceDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleServicesQuery(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>loading..</p>
      </div>
    );
  }

  const { image, name, description, price, duration } = data?.data;

  // console.log(serviceDetails);
  return (
    <div className="min-h-screen pb-20 pt-28 px-10  ">
      <SectionTitle title="Service Details"></SectionTitle>
      <div className="grid grid-cols-2 items-center gap-10 bg-gray-200 p-10 rounded-2xl">
        <div>
          <img src={image} alt="" className="rounded-2xl shadow-2xl" />
        </div>
        <div>
          <div className="flex flex-col justify-between">
            <h1 className="text-xl font-semibold">Service Name : {name}</h1>
            <h1 className="text-xl font-semibold flex items-center gap-2">
              Duration : {duration} min
            </h1>
          </div>
          <div className="mt-10">
            {description}
          </div>
          <div className="flex items-center pt-10 justify-between">
            <h1 className=" text-xl font-medium">Price: ${price}</h1>
            <BookingSlot service={data?.data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
