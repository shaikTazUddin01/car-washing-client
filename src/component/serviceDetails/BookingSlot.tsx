import { useEffect, useState } from "react";
import { useGetAvaliableSlotQuery } from "../../redux/slot/slotApi";
import { Button, Modal } from "antd";
import SectionTitle from "../shared/SectionTitle";
import THForm from "../form/THForm";
import THInput from "../form/THInput";
import THSelect from "../form/THSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetServicesQuery } from "../../redux/services/servicesApi";
import { TResponse, TServices } from "../../Types";
import THSelectWithWatch from "../form/THSelectWithWatch";
import { useCreateBookingMutation } from "../../redux/bookingSlot/bookingSlotApi";
import { toast } from "sonner";

const BookingSlot = () => {
  const [serviceId, setServiceId] = useState(undefined);
  const [slotDate, setSlotDate] = useState(undefined);

  // get services
  const { data: services, isLoading: serviceLoading } =
    useGetServicesQuery(undefined);

  // get slot matched by serviceId
  const { data: slot, refetch: dateRefetch } = useGetAvaliableSlotQuery(
    { serviceId: serviceId },
    { skip: !serviceId }
  );
  // console.log('object-->',slotDate);
  // get slot matched by date
  const { data: slotByTime, refetch } = useGetAvaliableSlotQuery(
    { date: slotDate, serviceId: serviceId },
    {
      skip: !slot,
    }
  );
  // booking slot
  const [bookingSlot] = useCreateBookingMutation();
  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (serviceId) {
      dateRefetch();
    }
    if (slotDate) {
      refetch();
    }
  }, [serviceId, slotDate, refetch,dateRefetch]);

  if (serviceLoading) {
    return <p>loading</p>;
  }

  // service option
  const serviceOptions = services.data.map((item: TServices) => ({
    key: item?._id,
    label: item.name,
    value: item._id,
  }));

  // date schedul
  const uniqueDates: string[] = Array.from(
    new Set(slot?.data?.map((item: any) => item?.date))
  );
  // console.log(uniqueDates);
  const slotDateOptions = uniqueDates?.map((date: string) => ({
    key: date,
    label: date,
    value: date,
  }));
  // console.log(slotDateOptions);
  // time schedul
  const slotTimeOptions = slotByTime?.data?.map((item: any) => ({
    key: item?._id,
    label: `Start Time : ${item?.startTime} to End Time : ${item?.endTime}`,
    value: item._id,
    disabled: item?.isBooked === "booked",
  }));

  // handle modal open
  const showModal = () => {
    setIsModalOpen(true);
  };
  // handle modal close
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // handle submit
  const submit: SubmitHandler<FieldValues> = async (data) => {
    const bookingServiceInfo = {
      service: data?.service,
      slot: data?.slot,
    };
    const toastId = toast.loading("loading..");
    try {
      const res = (await bookingSlot(bookingServiceInfo)) as TResponse<any>;
      if (res?.data) {
        toast.success("slot booking", {
          id: toastId,
          duration: 1500,
        });
        handleCancel()
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
  // console.log(slot);
  // console.log(slotByTime);
  return (
    <div>
      <button className="btn btn-success btn-sm" onClick={showModal}>
        Book Service
      </button>
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
        <div className="pt-10">
          <SectionTitle title="Booking a slot" />
          <div className="bg-[#c0bfbf] rounded-xl p-5">
            <THForm onSubmit={submit}>
              <THSelectWithWatch
                name="service"
                label="Service"
                options={serviceOptions}
                onValueChange={setServiceId}
              />
              <THSelectWithWatch
                name="slotDate"
                label="Slot Date"
                options={slotDateOptions}
                onValueChange={setSlotDate}
                disabled={!serviceId}
              />
              <THSelect
                name="slot"
                label="Slot Schedule"
                options={slotTimeOptions}
                disabled={!slotDate}
              ></THSelect>

              <Button className="w-full mt-3" htmlType="submit" type="primary">
                Booking
              </Button>
            </THForm>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BookingSlot;
