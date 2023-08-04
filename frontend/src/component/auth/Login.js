import Form from "../form/Form";
import ThirdPartySignUp from "../form/ThirdPartySignUp";
import Input from "../form/Input";
import Button from "../form/Button";
import Title from "../form/Title";
import FormInfoText from "../form/FormInfoText";
const Login = () => {
  return (
    <Form className="w-[680px] h-[600px]">
      <div
        className="bg-gradient-to-l from-cyan-100 via-cyan-200 to-cyan-300 h-[250px]
       w-[250px] rounded-tr-full rounded-br-full absolute top-8 left-[425px] blur-[90px] z-[-1]"
      ></div>
      <Title>Welcome Back</Title>
      <FormInfoText className="w-[600px]">
        Create your HealthDocsVault account and take control of your well-being.
        Access your health records, connect with medical professionals, and
        embark on a path to better health today!
      </FormInfoText>
      <div className="w-[375px] flex flex-col h-[400px] items-center">
        <ThirdPartySignUp />
        <div className="flex flex-col h-full w-full mt-5 items-center">
          <Input placeholder="Email" className="w-full h-[40px] rounded-lg pl-5 font-thin"/>
          <Input placeholder="Password" className="w-full h-[40px] rounded-lg pl-5 font-thin"/>
          <Button>Sign Up</Button>
          <div className="font-rubik mt-3 text-primary cursor-pointer font-normal">
            Forgot Password
          </div>
          <div className="font-rubik mt-10 text-primary cursor-pointer">
            Dont have an account? Join us
          </div>
          <div className="bg-gradient-to-l from-green-100 via-green-200 to-green-300 h-[250px] w-[250px] rounded-tr-full rounded-br-full absolute bottom-[70px] right-[380px] blur-[90px] z-[-1]"></div>
        </div>
      </div>
    </Form>
  );
};

export default Login;

// dhd