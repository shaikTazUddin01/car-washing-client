import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleServicesQuery } from "../../redux/services/servicesApi";

import BookingSlot from "../../component/serviceDetails/BookingSlot";


const ServiceDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleServicesQuery(id);
  

  if (isLoading ) {
    return <p>loading..</p>;
  }

  const { _id, image, name, description, price, duration } = data?.data;

  // console.log(serviceDetails);
  return (
    <div className="min-h-screen pb-20 pt-36 px-10 grid grid-cols-2 items-center gap-10">
      <div>
        <img src={image} alt="" className="rounded-2xl" />
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold">Name : {name}</h1>
          <h1 className="text-xl font-semibold">Dutation : {duration}</h1>
        </div>
        <div className="mt-10">
            {description}
            <h1 className="pt-10 text-xl font-medium">Price: ${price}</h1>
        </div>
      <div>
        <BookingSlot/>
      </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
