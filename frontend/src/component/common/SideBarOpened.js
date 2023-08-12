import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ShareIcon from "@mui/icons-material/Share";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const SideBarOpened = ({changeState ,isOpened}) => {
  console.log(isOpened);

  return (
    // <div className={`h-[450px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg flex flex-col self-center mr-5 justify-center ${isOpened ? "transition-all duration-1000 ease-out w-[270px]" : " "}`}>
      <div className="w-[90%] ml-4">
        <div className="pt-4 pb-4 cursor-pointer w-full flex flex-row justify-between ">
          <div className={`font-rubik text-2xl self-end ${"transition-all duration-1000 ease-in"}`}>Dashboard</div>
          <MenuIcon fontSize="large" className="self-start" onClick={changeState}/>
        </div>
        <div className="flex flex-col mt-10">
          <div className="mt-2 border outline-none rounded-lg bg-primary w-full h-[40px] flex flex-row items-center cursor-pointer">
            <ManageAccountsIcon fontSize="medium" className="text-white ml-5" />
            <div className="font-rubik text-white text-base ml-3">Profile</div>
          </div>
          <div className="mt-2 border outline-none rounded-lg bg-primary w-full h-[40px] flex flex-row items-center cursor-pointer">
            <AddIcon fontSize="medium" className="text-white ml-5" />
            <div className="font-rubik text-white text-base ml-3">Upload</div>
          </div>
          <div className="mt-2 border outline-none rounded-lg bg-primary w-full h-[40px] flex flex-row items-center cursor-pointer">
            <InsertDriveFileIcon
              fontSize="medium"
              className="text-white ml-5"
            />
            <div className="font-rubik text-white text-base ml-3">
              Show 
            </div>
          </div>
          <div className="mt-2 border outline-none rounded-lg bg-primary w-full h-[40px] flex flex-row items-center cursor-pointer">
            <ShareIcon fontSize="medium" className="text-white ml-5" />
            <div className="font-rubik text-white text-base ml-3">Share</div>
          </div>
        </div>
        <div className="flex flex-row mt-[60px]">
          <PersonIcon
            fontSize="large"
            className="border rounded-lg text-white bg-primary"
          />
          <div className={`flex flex-col ml-3 ${isOpened ? "transition-all opacity-0" : ""}`}>
            <div className="font-rubik text-xs">Hi there,</div>
            <div className="font-rubik text-xs">Mahir</div>
          </div>
        </div>
      </div>
    // </div>
  );
};


export default SideBarOpened