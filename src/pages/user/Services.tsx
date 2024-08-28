import { FaRegClock } from "react-icons/fa";
import { useGetServicesQuery } from "../../redux/services/servicesApi";
import { TServices } from "../../Types";
import SectionTitle from "../../component/shared/SectionTitle";

const Services = () => {
    const {data:service,isLoading}=useGetServicesQuery(undefined)

    if (isLoading ) {
      return(
        <div className="min-h-screen flex justify-center items-center">
           <p>loading..</p>
        </div>
      );
    }
   const serviceData :TServices=service?.data
  return (
    <div className="min-h-screen pt-36 pb-28 px-5">
{/* <SectionTitle title="All Services"></SectionTitle> */}
        {/* card */}
      <div className="grid grid-cols-4 gap-8">

        {service?.data?.map(({image,price,name,description,duration,_id}:Partial<TServices>)=>{
        return(
            <div className="card card-compact bg-base-100 shadow-xl" key={_id}>
          <figure>
            <img
              src={image}
              alt="Shoes"
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

export default Services;
