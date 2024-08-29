import { Select, Table, TableColumnsType } from "antd";
import {
  useGetAvaliableSlotQuery,
  useUpdateslotMutation,
} from "../../../../redux/slot/slotApi";
import SectionTitle from "../../../../component/shared/SectionTitle";
import Swal from "sweetalert2";
import { TResponse } from "../../../../Types";
import { toast } from "sonner";

interface DataType {
  key: React.Key;
  name: string;
  price: number;
  address: string;
}
const ManageSlot = () => {
  const { data: slotData, isFetching } = useGetAvaliableSlotQuery(undefined);
  const [updateSlotStatus] = useUpdateslotMutation();
  // update slot status
  const handleChange = (value: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to update status",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const toastId = toast.loading("loading..");
        const splitValue = value.split(" ");
        //  ------>
        const statusInFo = {
          id: splitValue[0],
          isBooked: splitValue[1],
        };
        //  update query call
        const res = (await updateSlotStatus(statusInFo)) as TResponse<any>;
        console.log(res);
        if (res?.data) {
          toast.success("status updated", {
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
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
    },
    {
      title: "Status",
      // dataIndex: "isBooked",
      render: (item) => {
        // console.log("item-->",item);
        return item === "booked" ? (
          <p className="text-green-500 font-medium capitalize">
            {item?.isBooked}
          </p>
        ) : (
          <Select
            defaultValue={item?.isBooked}
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: `${item?.key} available`, label: "Available" },
              // { value: 'booked', label: 'Booked' },
              { value: `${item?.key} canceled`, label: "Canceled" },
            ]}
          />
        );
      },
    },

    {
      title: "Action",
      render: (item) => {
        // console.log(item);
        return (
          <div className="flex gap-5">
            {/* <UpdateServices item={item} /> */}
            <button className="btn btn-error btn-sm">Delete</button>
          </div>
        );
      },
      width: "10%",
    },
  ];

  const data = slotData?.data?.map((item: any) => ({
    key: item._id,
    name: item?.service?.name,
    date: item?.date,
    startTime: item?.startTime,
    endTime: item?.endTime,
    isBooked: item?.isBooked,
  }));

  return (
    <div>
      <div>
        <SectionTitle title="Manage Slots"></SectionTitle>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        //   onChange={onChange}
        loading={isFetching}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default ManageSlot;
