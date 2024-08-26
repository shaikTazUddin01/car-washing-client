import { useGetAvaliableSlotQuery } from "../../redux/slot/slotApi";


const BookingSlot = () => {
  const { data: slot, isLoading: sLoading } =
    useGetAvaliableSlotQuery(undefined);
  if (sLoading) {
    return <p>loading</p>;
  }
  console.log(slot);
  return (
    <div>
      <h1>booking slot</h1>
    </div>
  );
};

export default BookingSlot;
