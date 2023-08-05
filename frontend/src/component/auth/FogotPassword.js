import { useState } from "react";
import Button from "../form/Button";
import Form from "../form/Form";
import FormInfoText from "../form/FormInfoText";
import Input from "../form/Input";
import Title from "../form/Title";
const ForgotPassword = (props) => {
  const [clicked, setClicked] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const click = () => {
    setClicked(true);
    setFlipped(true); // Toggle the 'flipped' state when the "Continue" button is clicked
  };

  console.log("clicked : ", clicked);
  console.log("flipped : ", flipped);
  return (
    <Form className={`h-[350px] w-[600px] ${flipped ? "rotate-y-180" : ""}`}>
      <Title>Forgot Password</Title>
      <FormInfoText className="w-[500px]">
        Enter your email for the verification proccesss, we will send 4 digits
        code to your email.
      </FormInfoText >
      <div className="w-[300px] mt-5">
      <Input placeholder="Email" className="w-full  h-[40px] rounded-lg pl-5 font-thin"/>
      <Button onClick={click} className="mt-8">Continue</Button>
      </div>
    </Form>
  );
};

export default ForgotPassword;
