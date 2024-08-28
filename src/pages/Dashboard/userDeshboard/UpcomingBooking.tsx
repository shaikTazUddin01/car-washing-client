import { Table, TableColumnsType } from "antd";
import SectionTitle from "../../../component/shared/SectionTitle";
import { useMyBookingQuery } from "../../../redux/bookingSlot/bookingSlotApi";
import { useEffect, useState } from "react";
import Countdown from "./CountDown";

const UpcomingBooking = () => {
  // get all my booking
  const { data: myBooking, isFetching } = useMyBookingQuery(undefined);
  // current date


  const todayDate = new Date();






  const upcomingBooking = myBooking?.data?.filter((item: any) => {
    const bookingDate = new Date(
      item?.slot?.date + "T" + item?.slot?.startTime
    );

    return bookingDate > todayDate;
  });

  return (
    <div>
      <div>
        <SectionTitle title="Show All Upcoming Booking"></SectionTitle>
      </div>
      <div className="flex flex-wrap">
        {upcomingBooking?.map((booking) => {
          return (
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{booking?.service?.name}</h2>
                <h1>Date : {booking?.slot?.date}</h1>
                <h1>Service Time : {`${booking?.slot?.startTime} to ${booking?.slot?.endTime}`}</h1>
                <div className="card-actions ">
                <Countdown  date={booking?.slot?.date} startTime={booking?.slot?.startTime} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingBooking;
