import { Table, TableColumnsType } from "antd";
import { useGetAvaliableSlotQuery } from "../../../../redux/slot/slotApi";

interface DataType {
  key: React.Key;
  name: string;
  price: number;
  address: string;
}
const ManageSlot = () => {
  const { data: slotData, isFetching } = useGetAvaliableSlotQuery(undefined);
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
      dataIndex: "isBooked",
      render: (item) => {
        return (
          <p
            className={`uppercase font-medium ${
              item == "available" ? "text-green-600 " : "text-blue-600"
            }`}
          >
            {item}
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
