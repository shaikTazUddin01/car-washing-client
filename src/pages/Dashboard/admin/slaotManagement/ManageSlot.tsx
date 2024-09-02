import {  Table, TableColumnsType } from "antd";
import {
  useGetAvaliableSlotQuery,
  
} from "../../../../redux/slot/slotApi";
import SectionTitle from "../../../../component/shared/SectionTitle";

import UpdateSlotStatus from "../../../../component/admin/slotManagement/UpdateSlotStatus";

interface DataType {
  key: React.Key;
  name: string;
  price: number;
  address: string;
}
const ManageSlot = () => {
  const { data: slotData, isFetching } = useGetAvaliableSlotQuery(undefined);

  // update slot status

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
        return (
          <p
            className={`font-medium capitalize ${
              item?.isBooked === "available" ? "text-blue-500" : ""
            } ${item?.isBooked === "booked" ? "text-green-500" : ""} ${
              item?.isBooked == "canceled" ? "text-red-500" : ""
            }`}
          >
            {item?.isBooked}
          </p>
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
            {item?.isBooked === "booked" ? (
              <button className="btn btn-disabled btn-sm ">Update Status</button>
            ) : (
              <UpdateSlotStatus item={item} />
            )}
            {/* <button className="btn btn-error btn-sm">Delete</button> */}
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
        scroll={{ x: 300 }}

        loading={isFetching}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default ManageSlot;
