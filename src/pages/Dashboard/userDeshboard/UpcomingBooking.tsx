import { Table, TableColumnsType } from "antd";
import SectionTitle from "../../../component/shared/SectionTitle";
import { useMyBookingQuery } from "../../../redux/bookingSlot/bookingSlotApi";
import { useEffect, useState } from "react";
import Countdown from "./Countdown";

const UpcomingBooking = () => {
  // get all my booking
  const { data: myBooking, isFetching } = useMyBookingQuery(undefined);
  // current date

  console.log(myBooking?.data);

  const todayDate = new Date();

  const upcomingBooking = myBooking?.data?.filter((item: any) => {
    const bookingDate = new Date(
      item?.slot?.date + "T" + item?.slot?.startTime
    );

    return bookingDate > todayDate;
  });

  return (
    <div className="pb-10">
      <div>
        <SectionTitle title="Show All Upcoming Booking"></SectionTitle>
      </div>
      {upcomingBooking?.length ? (
        <div className="grid grid-cols-3 gap-8">
          {upcomingBooking?.map((booking: any) => {
            return (
              <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                  <img src={booking?.service?.image} alt="images" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{booking?.service?.name}</h2>
                  <h1>Date : {booking?.slot?.date}</h1>
                  <h1>
                    Service Time :{" "}
                    {`${booking?.slot?.startTime} to ${booking?.slot?.endTime}`}
                  </h1>
                  <div className="card-actions ">
                    <Countdown
                      date={booking?.slot?.date}
                      startTime={booking?.slot?.startTime}
                      title="Remaning Time"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-xl font-medium text-center">
          Currently You do not booking any service..!
        </p>
      )}
    </div>
  );
};

export default UpcomingBooking;
