import { Table } from "antd";
import type { TableColumnsType } from "antd";

import SectionTitle from "../../../../component/shared/SectionTitle";

import { useGetBookingQuery } from "../../../../redux/bookingSlot/bookingSlotApi";

interface DataType {
  key: React.Key;
  name: string;
  price: number;
  address: string;
}

const UserBooking = () => {

const {data:booking,isLoading,isFetching}=useGetBookingQuery(undefined)
  //   const [deleteService] = useDeleteServicesMutation();
  console.log(booking);
  if (isLoading) {
    return <p>loading...</p>;
  }
  

  const columns: TableColumnsType<DataType> = [
    
   
    {
      title: "User Name",
      dataIndex: "name",
      
    },
   
    {
      title: "User Email",
      dataIndex: "email",
      
    },
    {
      title: "User Phone",
      dataIndex: "phone",
    },
    {
      title: "Service Name",
      dataIndex: "sName",
    },
    {
      title: "Service Cost",
      dataIndex: "sCost",
    },
    {
      title: "Booking Date",
      dataIndex: "bDate",
    },
    {
      title: "Booking Slot",
      dataIndex: "bSlot",
    },
   
    
  ];

  const data = booking?.data?.map((item: any) => ({
    key: item._id,
    name:item?.customer?.name,
    email:item?.customer?.email,
    phone:item?.customer?.phone,
    sName:item?.service?.name,
    sCost:`${item?.service?.price} ৳ `,
    bDate:item?.slot?.date,
    bSlot:`${item?.slot?.startTime} to ${item?.slot?.endTime}`,

  }));

  return (
    <div className="min-h-screen">
      <SectionTitle title="All Booking"></SectionTitle>
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


export default UserBooking;