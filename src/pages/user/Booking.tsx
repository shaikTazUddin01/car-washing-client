import  { useEffect, useState } from "react";
import {
  useCreateBookingMutation,
  useMyBookingQuery,
} from "../../redux/bookingSlot/bookingSlotApi";
import THForm from "../../component/form/THForm";
import THInput from "../../component/form/THInput";
import { Col, Row, Tooltip } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { TResponse } from "../../Types";
import { useCreateOrderMutation } from "../../redux/order/orderApi";
import Swal from "sweetalert2";
import { useAppSelector } from "../../redux/hooks/hooks";
import { useMyAccountInFoQuery } from "../../redux/auth/authApi";
import THInputAuthFill from "../../component/form/THInputAuthFill";
import SectionTitle from "../../component/shared/SectionTitle";

const Booking = () => {
  const { data: mybooking, isLoading } = useMyBookingQuery(undefined);
  const [createOrder] = useCreateOrderMutation();
  const [selectedCart, setSelectedCart] = useState(null);
const user=useAppSelector(state=>state?.auth?.user)
console.log(user);
const {data:userInfo}=useMyAccountInFoQuery(user?.AuthId)
  // useEffect(() => {
   
  // }, [selectedCart]);
  const selectedItem=mybooking?.data?.find((item:any)=>item?._id==selectedCart)
  console.log(selectedItem);

  const [formData, setFormData] = useState({
    date: '',
    time: '',
  });
  
  useEffect(() => {
    if (!selectedCart) {
      Swal.fire({
        title: "Attention Please!",
        icon: "warning",
        text: "Before payment select a service Please",
        // showConfirmButton: false,
        // timer: 1500
        
      });
    }
    if (selectedItem) {
      setFormData({
        date: selectedItem?.slot?.date || '',
        time: `${selectedItem?.slot?.startTime} to ${selectedItem?.slot?.endTime}` || '',
      });
    }
    
  }, [selectedCart, selectedItem]);
  
// console.log("time---?",formData);
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <p>loading...</p>
      </div>
    );
  }
 
  // handle order
  const submit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("loading..");
    const orderInFo = {
      customer: {
        customerName: data?.name,
        customerEmail: data.email,
        customerPhone: selectedItem?.customer?.phone,
        customerAddress: data?.address,
      },
      customerEmail: selectedItem?.customer?.email,
      service: selectedItem?.service?._id,
      slot: selectedItem?.slot?._id,
      paymentAmount: selectedItem?.service?.price,
    };

    // console.log(orderInFo);
    try {
      const res = (await createOrder(orderInFo)) as TResponse<any>;
      // console.log(res.data.data.payment_url);

      if (res?.data) {
        window.location.href = res.data.data.payment_url;
        // toast.success("success", {
        //   id: toastId,
        //   duration: 1500,
        // });
      } else {
        toast.error(res?.error?.data?.message, {
            id: toastId,
          duration: 1500,
        });
      }
    } catch (error) {
      toast.error("something is wrong please try again", {
        id: toastId,
        duration: 1500,
      });
    }
  };
  return (
    <div className="pt-32 pb-20 px-20">
      <SectionTitle title="My All Bookings"></SectionTitle>
      <div className="flex justify-between items-start gap-10 ">
      {/* left side */}
      <div className="flex flex-col gap-8 w-[50%]">
        {mybooking?.data?.map((item: any) => {
          return (
            <div
              key={item?._id}
              onClick={() => setSelectedCart(item?._id)}
              className={`border shadow-xl flex p-5 rounded-xl gap-5 ${
                selectedCart === item?._id
                  ? "bg-[#0a002b] shadow-2xl shadow-blue-300 text-white"
                  : ""
              }`}
            >
              <div>
                <img
                  src={item?.service?.image}
                  alt=""
                  className="h-28 w-auto rounded-xl"
                />
              </div>
              <div>
                <h1 className="text-xl font-medium">
                  Service Name : {item?.service?.name}
                </h1>
                <p>Date : {item?.slot?.date}</p>
                <p>
                  Slot Time : {item?.slot?.startTime} to {item?.slot?.endTime}
                </p>
                <p>Amount : {item?.service?.price}৳ </p>
                {/* <button className="btn btn-neutral btn-sm">Select Now</button> */}
              </div>
            </div>
          );
        })}
      </div>
      {/* right side */}
      <div className="bg-gray-200 p-5 w-2/5 rounded-2xl">
        <THForm onSubmit={submit}>
          <h1 className="text-center text-xl font-medium mb-4 mt-2 font-unbounded">
            Payment Now
          </h1>
          <THInput
            type="text"
            label="Name"
            name="name"
            defaultFieldValue={userInfo?.data?.name}
          ></THInput>
          <THInput
            type="text"
            label="Email"
            name="email"
            defaultFieldValue={userInfo?.data?.email}
          ></THInput>
          <THInput
            type="text"
            label="Address"
            name="address"
            defaultFieldValue={userInfo?.data?.address}
          ></THInput>
           <THInputAuthFill
            type="text"
            label="Date"
            name="date"
            disabled={!selectedCart}
            defaultFieldValue={formData.date}
          />
          {/* console.log(formData); */}
          <THInputAuthFill
            type="text"
            label="Time"
            name="time"
            disabled={!selectedCart}
            defaultFieldValue={formData.time}
          />
          {selectedCart ? (
            <button className="w-full btn btn-neutral btn-md" type="submit">
              Pay Now
            </button>
          ) : (
            <span className="tooltip tooltip-top w-full" data-tip="Pleact select a service first">
              <button className="w-full btn btn-disabled btn-md" type="button">
                Pay Now
              </button>
            </span>
          )}
        </THForm>
      </div>
      {/* <Toaster/> */}
    </div>
    </div>
  );
};

export default Booking;
