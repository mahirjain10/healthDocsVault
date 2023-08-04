import { useState } from "react";
import Form from "../form/Form";
import FormInfoText from "../form/FormInfoText";
import Input from "../form/Input";
import Title from "../form/Title";
import Button from '../form/Button'
const OtpVerification = () => {
  const [input, setInput] = useState(new Array(4).fill(" "));
  return (
    <Form className="h-[350px] w-[600px]">
      <div className="absolute">
      <Title>Enter 4 Digits Code</Title>
      <FormInfoText className="w-[325px]">
        Enter the 4 digits code that you received on your email.
      </FormInfoText>
      <div className="w-[325px] mt-5 ">
      <div className="flex flex-row justify-between">
        {input.map((input) => {
          return <Input className="w-[54px] h-[54px] rounded-lg text-center text-primary text-xl"/>;
        })}
      </div>
      <Button>Continue</Button>
      </div>
        </div>
    </Form>
  );
};

export default OtpVerification;
