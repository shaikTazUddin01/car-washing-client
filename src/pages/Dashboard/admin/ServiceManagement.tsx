import CreateService from "../../../component/admin/serviceManagement/CreateService";
import ShowService from "../../../component/admin/serviceManagement/ShowService";
import SectionTitle from "../../../component/shared/SectionTitle";

const ServiceManagement = () => {
  return (
    <div>
      <div className="bg-[#0a002b] h-20 w-full rounded-xl flex items-center justify-center gap-10 ">
        <h1 className="text-white text-2xl font-medium font-unbounded">
          Add Service
        </h1>
        {/* create services */}
        <CreateService />
      </div>
      {/* show services */}
      <div className="mt-10">
        <SectionTitle title="All Services" /> 
        <ShowService />
      </div>
    </div>
  );
};

export default ServiceManagement;
