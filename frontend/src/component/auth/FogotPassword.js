import Button from "../form/Button";
import Form from "../form/Form";
import FormInfoText from "../form/FormInfoText";
import Input from "../form/Input";
import Title from "../form/Title";
const ForgotPassword = () => {
  return (
    <Form className="h-[350px] w-[600px]">
      <div className="absolute">
      <Title>Forgot Password</Title>
      <FormInfoText className="w-[500px]">
        Enter your email for the verification proccesss, we will send 4 digits
        code to your email.
      </FormInfoText >
      <div className="w-[300px] mt-5">
      <Input placeholder="Email" className="w-full  h-[40px] rounded-lg pl-5 font-thin"/>
      <Button>Continue</Button>
      </div>
      </div>
    </Form>
  );
};

export default ForgotPassword;
