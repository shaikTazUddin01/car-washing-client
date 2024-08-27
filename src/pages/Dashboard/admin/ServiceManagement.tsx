
import CreateService from "../../../component/admin/serviceManagement/CreateService";

const ServiceManagement = () => {
  return (
    <div>
      <div className="bg-black h-20 w-full rounded-xl flex items-center justify-center gap-10 ">
        <h1 className="text-white text-2xl font-medium font-unbounded">Add Service</h1>
        <CreateService/>
      </div>
    </div>
  );
};

export default ServiceManagement;
