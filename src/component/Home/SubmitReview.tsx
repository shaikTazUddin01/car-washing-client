
import { Rate } from 'antd';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useCreateReviewMutation } from '../../redux/review/reviewApi';
import { toast } from 'sonner';
import { TResponse } from '../../Types';

const SubmitReview = () => {
    const [createReview]=useCreateReviewMutation()
    const { register,handleSubmit,setValue,reset } = useForm();

  const submit: SubmitHandler<FieldValues> = async(data) => {
    const toastId = toast.loading("loading..");
    
    try {
     
      
      const res=await createReview(data) as TResponse<any>
      console.log(res);
      if (res?.data) {
        toast.success("Thank you for given your feedback", {
          id: toastId,
          duration: 1500,
        });
        reset()
        // navigate("/login");
      } else{
        toast.error(res?.error?.data?.message,{
            id:toastId,
            duration:1500
        })
      }
    } catch (error) {
      toast.error("something is wrong please try again", {
        id: toastId,
        duration: 1500,
      });
    }
  };
    return (
        <div className=''>
            {/* throw review section */}
      <div className="pt-10 lg:pt-20 w-full">
        <h1 className="text-2xl lg:text-3xl font-unbounded text-center">
          Share Your Thoughts...
        </h1>
        <form action="" className="w-full " onSubmit={handleSubmit(submit)}>
          <div className="w-full text-center mt-5">
            <textarea
              {...register("comment")}
              rows={5}
              className="w-[90%] lg:w-[70%] rounded-md p-5 border border-[#9c9c9c]"
              placeholder="Write Yor Review..."
            ></textarea>
          </div>
          <div className="w-full text-center mt-2">
            <h1 className="font-semibold text-xl">Your orverall rating</h1>
            <Rate className='text-3xl space-x-2' allowHalf onChange={(value)=>setValue("rating",value)} />
          </div>
          <div className="mx-auto text-center pt-2 lg:pt-5">
            <button className="btn btn-neutral btn-sm px-5 text-lg">Submit</button>
          </div>
        </form>
      </div>
        </div>
    );
};

export default SubmitReview;