import React from "react";
import {
  useCreateBookingMutation,
  useMyBookingQuery,
} from "../../redux/bookingSlot/bookingSlotApi";
import THForm from "../../component/form/THForm";
import THInput from "../../component/form/THInput";
import { Col, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { TResponse } from "../../Types";
import { useCreateOrderMutation } from "../../redux/order/orderApi";

const Booking = () => {
  const { data: mybooking, isLoading } = useMyBookingQuery(undefined);
  const [createOrder] = useCreateOrderMutation();
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <p>loading...</p>
      </div>
    );
  }
//   console.log(mybooking);
  const customer = mybooking?.data[0]?.customer;
  const slot = mybooking?.data[0]?.slot;
  const service = mybooking?.data[0]?.service;
//   console.log(service);

  //   handle order
  const submit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("loading..");
    const orderInFo = {
      customer: {
        customerName:customer?.name,
        customerEmail:customer?.email,
        customerPhone:customer?.phone,
        customerAddress:customer?.address
      },
      customerEmail: customer?.email,
      service: service?._id,
      slot: slot?._id,
      paymentAmount: service?.price,
    };

    // console.log(orderInFo);
    try {
      const res = await createOrder(orderInFo) as TResponse<any>;
      console.log(res.data.data.payment_url);

      if (res?.data) {
        window.location.href=res.data.data.payment_url
        // toast.success("success", {
        //   id: toastId,
        //   duration: 1500,
        // });
      } else {
        toast.error(res?.error?.data?.message, {
        //   id: toastId,
          duration: 1500,
        });
      }
    } catch (error) {
      toast.error("something is wrong please try again", {
        // id: toastId,
        duration: 1500,
      });
    }
  };
  return (
    <div className="min-h-screen flex justify-between gap-10 pt-36 pb-20 px-20">
      {/* left side */}
      <div className="bg-gray-100 w-[60%] p-10">
        <div>
          <div className="flex justify-between text-xl font-medium">
            <h1>Service Name : {service?.name}</h1>
            <h1>Service Duration: {service?.duration}</h1>
          </div>
          <div className="flex justify-between text-xl font-medium pt-5">
            <h1>Slot Date : {slot?.date}</h1>
            <h1>Service time: {`${slot?.startTime} to ${slot?.endTime}`}</h1>
          </div>
          <div className="flex justify-between text-xl font-medium pt-5">
            <h1>Price : $ {service?.price}</h1>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="bg-gray-100 p-5 w-2/5">
        <THForm onSubmit={submit}>
          <h1 className="text-center text-xl font-medium mb-4">Payment Now</h1>
          <THInput
            type="text"
            label="Name"
            name="name"
            defaultFieldValue={customer?.name}
          ></THInput>
          <THInput
            type="text"
            label="Email"
            name="email"
            defaultFieldValue={customer?.email}
          ></THInput>
          <THInput
            type="text"
            label="Date"
            name="date"
            defaultFieldValue={slot?.date}
          ></THInput>
          <THInput
            type="text"
            label="Time"
            name="time"
            defaultFieldValue={`${slot?.startTime} to ${slot?.endTime}`}
          ></THInput>
          <button className="w-full btn btn-neutral btn-md" type="submit">
            Pay Now
          </button>
        </THForm>
      </div>
    </div>
  );
};

export default Booking;
