import { useGetServicesQuery } from "../../redux/services/servicesApi";
import { TServices } from "../../Types";

const Services = () => {
    const {data:service,isLoading}=useGetServicesQuery(undefined)

    if (isLoading) {
        return <p>loading...</p>
    }
   const serviceData :TServices=service?.data
  return (
    <div className="min-h-screen pt-36 px-5">

        {/* card */}
      <div className="grid grid-cols-4 gap-8">

        {service?.data?.map(({image,price,name,description,duration,_id}:Partial<TServices>)=>{
        return(
            <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <a href={`/serviceDetails/${_id}`}>
              <button className="btn btn-primary">Details</button>
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
