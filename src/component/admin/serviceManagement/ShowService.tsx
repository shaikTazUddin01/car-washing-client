import {  Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetServicesQuery } from "../../../redux/services/servicesApi";

interface DataType {
  key: React.Key;
  name: string;
  price: number;
  address: string;
}

const ShowService = () => {
  const { data: services, isLoading ,isFetching} = useGetServicesQuery(undefined);

  if (isLoading) {
    return <p>loading...</p>;
  }

//   console.log(services.data);

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
            <button className="btn btn-error btn-sm">Delete</button>
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
