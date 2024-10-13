import { FaRegClock } from "react-icons/fa";
import { useGetServicesQuery } from "../../redux/services/servicesApi";
import { TServices } from "../../Types";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Select } from "antd";

const Services = () => {
  const [searchItem, setSearchItem] = useState("");
  console.log(searchItem);
  const [sortByPrice, setsortByPrice] = useState("");
  const [filterByPrice, setfilterByPrice] = useState("");
  const { data: service, isLoading } = useGetServicesQuery({
    searchItem,
    sortByPrice,
    filterByPrice,
  });
  const { register, handleSubmit } = useForm();
  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>loading..</p>
      </div>
    );
  }
  // const serviceData: TServices = service?.data;
  // search
  const handleSearch: SubmitHandler<FieldValues> = (data) => {
    console.log("--->>",data);
    setSearchItem(data?.searchItem);
  };
  const handleSearchs: SubmitHandler<FieldValues> = (data) => {
    console.log("--->>",data);
    setSearchItem(data?.searchItems);
  };
  // sort
  const handleChange = (value: string) => {
    setsortByPrice(value);
  };
  // filter
  const handlefilter = (value: string) => {
    setfilterByPrice(value);
  };
  return (
    <div className="min-h-screen pt-28 pb-28 px-5 max-w-[1440px] mx-auto">
      {/* --- */}
      <div className="w-full p-5 bg-black mb-10 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 items-center align-middle lg:justify-around gap-2">
          {/* filter */}
          <div className="w-full md:col-span-3 lg:col-span-2 flex items-center gap-2">
            <h1 className="text-white w-[40%] md:w-auto">Filter by price</h1>

            <Select
              placeholder="default"
              className="w-[60%] md:w-[150px]"
              onChange={handlefilter}
              options={[
                { value: "100 - 500", label: "100৳ - 500৳" },
                { value: "500 - 2000", label: "500৳ - 2000৳" },
                { value: "2000 - 5000", label: "2000৳ - 5000৳" },
                { value: "5000 - 10000", label: "5000৳ - 10000৳" },
              ]}
            />
          </div>
          {/* search option */}
          <div className="w-full md:col-span-3 lg:col-span-4 hidden lg:inline">
            <form
              action=""
              className="flex justify-center gap-2"
              onClick={handleSubmit(handleSearch)}
            >
              <div className="form-control w-[70%]">
                <input
                  type="text"
                  placeholder="Search Here..."
                  className="input input-bordered border-primaryColor"
                  {...register("searchItem")}
                />
              </div>
              <button type="submit" className="btn btn-neutral px-5">
                Search
              </button>
            </form>
          </div>
          {/* sort by price */}
          <div className="w-full md:col-span-3 lg:col-span-2 flex items-center gap-2 md:justify-end">
            <h1 className="text-white w-[40%] md:w-auto">Sort By Price </h1>

            <Select
              placeholder="default"
              // style={{ width: 120 }}
              className="w-[60%] md:w-[150px]"
              onChange={handleChange}
              options={[
                { value: "asc", label: "Low To High" },
                { value: "dsc", label: "Hight To Low" },
              ]}
            />
          </div>
          {/* search option */}
          <div className="w-full col-span-6 lg:hidden">
            <form
              action=""
              className="flex justify-center gap-2"
              onClick={handleSubmit(handleSearchs)}
            >
              <div className="form-control w-[80%]">
                <input
                  type="text"
                  placeholder="Search Here..."
                  className="input input-bordered border-primaryColor"
                  {...register("searchItems")}
                />
              </div>
              <button type="submit" className="btn btn-neutral px-5 w-[20%]">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      {service?.data?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service?.data?.map(
            ({
              image,
              price,
              name,
              description,
              duration,
              _id,
            }: Partial<TServices>) => {
              return (
                <div
                  className="card card-compact bg-base-100 shadow-xl"
                  key={_id}
                >
                  <figure>
                    <img src={image} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex justify-between">
                      <h1 className="text-[17px] font-medium">
                        Price : {price} ৳
                      </h1>
                      <h1 className="text-[17px] font-medium flex gap-2 items-center">
                        <FaRegClock />
                        {duration} Min
                      </h1>
                    </div>
                    <p className="mt-1">{description?.slice(0, 100)}...</p>
                    <div className="card-actions justify-end">
                      <a href={`/serviceDetails/${_id}`}>
                        <button className="btn btn-neutral btn-sm w-full">
                          Details
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      ) : (
        <p className="text-center text-xl">No Data Found..!</p>
      )}
    </div>
  );
};

export default Services;
