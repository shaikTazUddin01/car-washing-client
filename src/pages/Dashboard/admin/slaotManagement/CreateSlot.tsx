import { Button, Col, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import SectionTitle from "../../../../component/shared/SectionTitle";
import THForm from "../../../../component/form/THForm";
import THSelect from "../../../../component/form/THSelect";
import { useGetServicesQuery } from "../../../../redux/services/servicesApi";
import { TResponse, TServices } from "../../../../Types";
import THTimepicker from "../../../../component/form/THTimePicker";
import moment from "moment";
import { useCreateSlotMutation } from "../../../../redux/slot/slotApi";
import { toast } from "sonner";
import THDatePicker from "../../../../component/form/THDatePicker";

const CreateSlot = () => {
 
  // get services
  const { data: service, isLoading: serviceLoading } =
    useGetServicesQuery(undefined);
    // create slot mutation
  const [createSlot] = useCreateSlotMutation();

  if (serviceLoading) {
    return <p>loading..</p>;
  }
// service option
  const serviceOptions = service.data.map((item: TServices) => ({
    label: item.name,
    value: item._id,
  }));
  // handle submit
  const submit: SubmitHandler<FieldValues> = async (data) => {
    //get slot info 
    const slotData = {
      ...data,
      date: moment(new Date(data.date)).format("YYYY-MM-DD"),
      startTime: moment(new Date(data.startTime)).format("HH:mm"),
      endTime: moment(new Date(data.endTime)).format("HH:mm"),
    };

    const toastId = toast.loading("loading..");
    try {
      const res = await createSlot(slotData) as TResponse<any>;
      if (res?.data) {
        toast.success("new slot created", {
          id: toastId,
          duration: 1500,
        });
        
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
    <>
      <Row align={"middle"} justify={"center"}>
      <Col lg={{ span: 10 }} md={{ span: 10 }} sm={{ span: 22 }}>
          <div className="py-8">
            <SectionTitle title="Create Slot" />
            <div className="bg-[#c0bfbf] rounded-xl p-5">
              <THForm onSubmit={submit}>
                <THSelect
                  name="service"
                  label="Service Name"
                  options={serviceOptions}
                ></THSelect>
                <THDatePicker name="date" label="Date" />
                <THTimepicker
                  name="startTime"
                  label="Start Time"
                ></THTimepicker>
                <THTimepicker name="endTime" label="End Time"></THTimepicker>
                <Button
                  className="w-full mt-3"
                  htmlType="submit"
                  type="primary"
                >
                  Create Service
                </Button>
              </THForm>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CreateSlot;
