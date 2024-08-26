
import THForm from "../../component/form/THForm";
import THInput from "../../component/form/THInput";
import { Col } from "antd";
import bgImg from "../../assets/main-banner-1.png";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { toast, Toaster } from "sonner";
import { useSignupApiMutation } from "../../redux/auth/authApi";
import { TResponse } from "../../Types";








const SignUp = () => {
  
const [userSignup]=useSignupApiMutation()
 

  // const location = useLocation();

  // console.log(login);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("loading..");
    // console.log(data);
    try {
     
      console.log(data);
      const res=await userSignup(data) as TResponse<any>
      console.log(res);
      if (res?.data) {
        toast.success("Sign Up  success", {
          id: toastId,
          duration: 1500,
        });
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
    <div
      className="flex justify-center items-center min-h-screen bg-cover"
      style={{ backgroundImage: `URL(${bgImg})` }}
    >
      <Col
        xs={{ span: 20 }}
        sm={{ span: 16 }}
        md={{ span: 12 }}
        lg={{ span: 9 }}
        xxl={{ span: 5 }}
        className="bg-[#ffffff88] rounded-md font-semibold border-primaryColor border-2 my-10 "
      >
        <THForm onSubmit={onSubmit}>
          <h1 className="text-2xl text-center uppercase font-semibold">
            SignUp
          </h1>
          {/* <Divider className=''></Divider> */}
          <THInput name="name" type="text" label="Name"></THInput>
          
          <THInput name="email" type="email" label="Email"></THInput>
          <THInput
            name="phone"
            type="text"
            label="Phone Number"
          ></THInput>

          <THInput name="address" type="text" label="Address"></THInput>
          <THInput name="password" type="text" label="Set Password"></THInput>
          <button className="btn btn-neutral btn-md w-full mt-4 text-lg">
            SignUp
          </button>
          <p className="text-center">
            Already i have an account.!
            <span className="text-[#0e07e6]">
              <a href="/login"> login</a>
            </span>
          </p>
        </THForm>
      </Col>
      <Toaster></Toaster>
    </div>
  );
};

export default SignUp;
