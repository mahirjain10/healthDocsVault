import Button from "../form/Button"
import Form from "../form/Form"
import FormInfoText from "../form/FormInfoText"
import Input from "../form/Input"
import Title from "../form/Title"

const ResetPassword=()=>{
    return (
        <Form className="h-[350px] w-[600px]">
            <Title>Reset Password</Title>
            <FormInfoText>Set the new password for your account so you can login and access all the features.</FormInfoText>
            <div className="flex flex-col w-[300px]">
            <Input className="w-full  h-[40px] rounded-lg pl-5 font-thin" placeholder="New Password"/>
            <Input className="w-full  h-[40px] rounded-lg pl-5 font-thin" placeholder="Re-enter Password"/>
            <Button className="mt-5">Update Password</Button>
            </div>
        </Form>
    )
}

export default ResetPassword