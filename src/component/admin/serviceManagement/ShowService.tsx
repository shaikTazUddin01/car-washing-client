import { Table } from "antd";
import type { TableColumnsType } from "antd";
import {
  useDeleteServicesMutation,
  useGetServicesQuery,
} from "../../../redux/services/servicesApi";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { TResponse } from "../../../Types";
import UpdateServices from "./UpdateServices";

interface DataType {
  key: React.Key;
  name: string;
  price: number;
  address: string;
}

const ShowService = () => {
  const {
    data: services,
    isLoading,
    isFetching,
  } = useGetServicesQuery(undefined);
  const [deleteService] = useDeleteServicesMutation();
  if (isLoading) {
    return <p>loading...</p>;
  }
// handle delete
  const handleDelete =  (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You went to Delete this service",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async(result) => {
      if (result.isConfirmed) {
        const toastId = toast.loading("loading...");
        const res = await deleteService(id) as TResponse<any>;
        // console.log(res);
        if (res?.data) {
          toast.warning("Delete SuccessFully", {
            id: toastId,
            duration: 1500,
          });
        } else {
          toast.error(res?.error?.data?.message, {
            id: toastId,
            duration: 1500,
          });
        }
      }
    });
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Service Image",
      dataIndex: "image",
      render:(item)=>{
        return(
          <div>
            <img src={item} alt="" className="h-14 rounded-xl"/>
          </div>
        )
      }

    },
    {
      title: "Service Name",
      dataIndex: "name",
    },
    {
      title: "Service Cast",
      dataIndex: "price",
      // defaultSortOrder: "ascend",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Service Duration",
      dataIndex: "duration",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Action",
      render: (item) => {
        // console.log(item);
        return (
          <div className="flex gap-5">
            <UpdateServices item={item}/>
            <button
              className="btn btn-error btn-sm"
              onClick={() => handleDelete(item?.key)}
            >
              Delete
            </button>
          </div>
        );
      },
      width: "10%",
    },
  ];

  const data = services?.data?.map((item: any) => ({
    key: item._id,
    image:item?.image,
    name: item?.name,
    price: item?.price,
    duration: item?.duration,
  }));

  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ x: 300 }}
     
      //   onChange={onChange}
      loading={isFetching}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default ShowService;
