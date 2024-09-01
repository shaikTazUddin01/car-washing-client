import { FaRegClock } from "react-icons/fa";
import { useGetServicesQuery } from "../../redux/services/servicesApi";
import { TServices } from "../../Types";
import SectionTitle from "../shared/SectionTitle";

const FeatureService = () => {
  const {data:service,isLoading}=useGetServicesQuery(undefined)

  if (isLoading) {
      return <p>loading...</p>
  }
//  const serviceData : TServices=service?.data
  return (
    <div className=" my-10 md:my-20">
      <div>
        <SectionTitle title="Our Feature Services" />
      </div>
      {/* services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {service?.data?.slice(0,8)?.map(({image,price,name,description,duration,_id}:Partial<TServices>)=>{
        return(
          <div className="card card-compact bg-base-100 shadow-xl" key={_id}>
          <figure>
            <img
              src={image}
              alt="image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="flex justify-between">
              <h1 className="text-[17px] font-medium">Price : {price} ৳</h1>
              <h1 className="text-[17px] font-medium flex gap-2 items-center"><FaRegClock />
               {duration} Min</h1>
            </div>
            <p className="mt-1">{description?.slice(0,100)}...</p>
            <div className="card-actions justify-end">
              <a href={`/serviceDetails/${_id}`}>
              <button className="btn btn-neutral btn-sm w-full">Details</button>
              </a>
            </div>
          </div>
        </div>
        )
        })}
      
      </div>
    </div>
  );
};

export default FeatureService;
