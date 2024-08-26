
import THForm from "../../component/form/THForm";
import THInput from "../../component/form/THInput";
import { Col } from "antd";
import bgImg from "../../assets/main-banner-1.png";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { toast, Toaster } from "sonner";








const Login = () => {
  
  // const location = useLocation();

  // console.log(login);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // const toastId = toast.loading("loading..");
    console.log(data);
    // try {
     
    //   // console.log(data);
    //   // console.log(res);

    // //   if (res?.data) {
    // //     toast.success("Sign Up  success", {
    // //       id: toastId,
    // //       duration: 1500,
    // //     });
    //     navigate("/login");
    //   } else if ("error" in res && isFetchBaseQueryError(res.error)) {
    //     const errorData = (res.error as FetchBaseQueryError).data;
    //     if (isErrorResponse(errorData)) {
    //       toast.error(errorData.message, {
    //         id: toastId,
    //         duration: 1500,
    //       });
    //     }
    //   }
    // } catch (error) {
    //   toast.error("something is wrong please try again", {
    //     id: toastId,
    //     duration: 1500,
    //   });
    // }
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
            Login
          </h1>
          {/* <Divider className=''></Divider> */}
         
          
          <THInput name="email" type="email" label="Email"></THInput>
          
         
          <THInput name="password" type="text" label="Password"></THInput>
          <button className="btn btn-neutral btn-md w-full mt-4 text-lg">
            Login
          </button>
          <p className="text-center">
         i don't have an account.!
            <span className="text-[#0e07e6]">
              <a href="/signup"> SignUp</a>
            </span>
          </p>
        </THForm>
      </Col>
      <Toaster></Toaster>
    </div>
  );
};

export default Login;