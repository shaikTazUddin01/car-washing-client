import { Table, TableColumnsType } from "antd";
// import { useGetAvaliableSlotQuery } from "../../../redux/slot/slotApi";
import SectionTitle from "../../../component/shared/SectionTitle";
import { useMyBookingQuery } from "../../../redux/bookingSlot/bookingSlotApi";


interface DataType {
    key: React.Key;
    name: string;
    date: string; 
    startTime: string;
    endTime: string;
}
const PastBooking = () => {
    // get all my booking
  const { data: myBooking, isFetching } = useMyBookingQuery(undefined);
// current date
const todayDate=new Date();

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


   
  ];


// Filter the data to show only past bookings
const data = myBooking?.data?.filter((item: any) => {
    const bookingDate = new Date(item?.slot?.date + 'T' + item?.slot?.startTime);
   
    return bookingDate < todayDate;
  }).map((item: any) => ({
    key: item._id,
    name: item?.service?.name,
    date: item?.slot?.date,
    startTime: item?.slot?.startTime,
    endTime: item?.slot?.endTime,
  }));

//   const data = slotData?.data?.map((item: any) => ({
//     key: item._id,
//     name: item?.service?.name,
//     date: item?.slot?.date,
//     startTime: item?.slot?.startTime,
//     endTime: item?.slot?.endTime,
   
//   }));

  return (
    <div>
      <div>
        <SectionTitle title="Show All Past Booking"></SectionTitle>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        //   onChange={onChange}
        scroll={{ x: 300 }}
        loading={isFetching}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};



export default PastBooking;