import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ShareIcon from "@mui/icons-material/Share";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
// const SideBar = () => {
//   return (
//     <div className="h-[450px] w-[70px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg flex flex-col items-center self-center mr-5">
//       <div className="pt-4 pb-4 cursor-pointer">
//         <MenuIcon fontSize="large" />
//       </div>
//       <div className="flex flex-col mt-10">
//         <div className="mt-2 border outline-none rounded-lg bg-primary w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
//         <ManageAccountsIcon fontSize="large" />
//         </div>
//         <div className="mt-2 border outline-none rounded-lg bg-primary w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
//         <AddIcon fontSize="large"/>
//         </div>
//         <div className="mt-2 border outline-none rounded-lg bg-primary w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
//         <InsertDriveFileIcon fontSize="large"/>
//         </div>
//         <div className="mt-2 border outline-none rounded-lg bg-primary w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
//         <ShareIcon fontSize="large"/>
//         </div>
//       </div>
//       <div className="flex flex-row justify-end mt-[60px]">
//         <PersonIcon fontSize="large" />
//       </div>
//     </div>
//   );
// };
const SideBar = () => {
    return (
      <div className="h-[450px] w-[350px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg flex flex-col self-center mr-5 justify-center items-center bg-slate-500">
        <div className="w-[90%] bg-orange-500">
        <div className="pt-4 pb-4 cursor-pointer w-full">
          <MenuIcon fontSize="large" />
        </div>
        <div className="flex flex-col mt-10">
          <div className="mt-2 border outline-none rounded-lg bg-primary w-full h-[50px] flex flex-row justify-center cursor-pointer">
          <ManageAccountsIcon fontSize="large" className="text-white" />
          <div className="font-rubik text-white text">Profile</div>
          </div>
          <div className="mt-2 border outline-none rounded-lg bg-primary w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
          <AddIcon fontSize="large"/>
          </div>
          <div className="mt-2 border outline-none rounded-lg bg-primary w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
          <InsertDriveFileIcon fontSize="large"/>
          </div>
          <div className="mt-2 border outline-none rounded-lg bg-primary w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
          <ShareIcon fontSize="large"/>
          </div>
        </div>
        <div className="flex flex-row mt-[60px]">
          <PersonIcon fontSize="large" />
        </div>
      </div>
        </div>
    );
  };

export default SideBar;
