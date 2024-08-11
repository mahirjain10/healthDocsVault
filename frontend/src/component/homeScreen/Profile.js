import Input from "../form/Input";
import MainNav from "../common/MainNav"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DatePicker } from "@mui/x-date-pickers";
const Profile=()=>{
    return (
         <>
        <MainNav title="Profile"/>
        <div className="bg-primary flex flex-col items-center rounded-b-lg">
        <div className="font-rubik text-white mt-3">Set up your profile</div>
        <div className="font-rubik font-thin text-white mt-1">Update your profile to connect to your doctor with better impression</div>
        <AccountCircleIcon  sx={{ fontSize: 100 }}className="text-white mt-1 mb-3"/>
        </div>
        <div className="flex flex-row">
        <div className="flex flex-col mt-3 ml-5 w-[50%]">
            <div className="font-rubik ml-3">Personal Information</div>
            <div className="flex flex-col relative">
                <div className="font-rubik text-primary text-[10px] relative top-10 left-5">Name</div>
                <Input className="w-[50%] rounded-lg h-14 font-thin pl-5 pt-3" placeholder="Jack Ryan"></Input>
            </div>
            <div className="flex flex-col relative">
                <div className="font-rubik text-primary text-[10px] relative top-10 left-5">Email</div>
                <Input className="w-[50%] rounded-lg h-14 font-thin pl-5 pt-3" placeholder="jackryan@gmail.com"></Input>
            </div>
            <div className="flex flex-col relative">
                <div className="font-rubik text-primary text-[10px] relative top-10 left-5">Age</div>
                <Input className="w-[50%] rounded-lg h-14 font-thin pl-5 pt-3" placeholder="0"  type="number" min="18" max="100"></Input>
            </div>
        </div>
        <div className="flex flex-col w-[50%]">
        <div className="flex flex-row justify-between mt-[60px]">
                <div className="flex flex-row">
                    <input type="radio" name="gender" value="male" className="cursor-pointer"></input>
                    <label className="font-rubik text-primary pl-2">Male</label>
                </div>
                <div className="flex flex-row">
                    <input type="radio" name="gender" value="female" className="cursor-pointer"></input>
                    <label className="font-rubik text-primary pl-2">Female</label>
                </div>
                <div className="flex flex-row">
                    <input type="radio" name="gender" value="transgender" className="cursor-pointer"></input>
                    <label className="font-rubik text-primary pl-2">Transgender</label>
                </div>
                <div className="flex flex-row">
                    <input type="radio" name="gender" value="nonBinary" className="cursor-pointer"></input>
                    <label className="font-rubik text-primary pl-2">Non-binary</label>
                </div>
                <div className="flex flex-row">
                    <input type="radio" name="gender" value="doWantToSpecify" className="cursor-pointer"></input>
                    <label className="font-rubik text-primary pl-2">Do not want to specify</label>
                </div>
            </div>
        </div>
        </div>
    </>
    )
}

export default Profile

// name,email,DOB,Age (optional),gender