import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import {
  useDeleteServicesMutation,
  useGetServicesQuery,
} from "../../../redux/services/servicesApi";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { TResponse } from "../../../Types";

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
      text: "You won't be able to revert this!",
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
      title: "Service Name",
      dataIndex: "name",
    },
    {
      title: "Service Cast",
      dataIndex: "price",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Service Duration",
      dataIndex: "duration",
    },
    {
      title: "Action",
      render: (item) => {
        // console.log(item);
        return (
          <div className="flex gap-5">
            <button className="btn btn-success btn-sm">Edit</button>
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
    name: item?.name,
    price: item?.price,
    duration: item?.duration,
  }));

  return (
    <Table
      columns={columns}
      dataSource={data}
      //   onChange={onChange}
      loading={isFetching}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default ShowService;
