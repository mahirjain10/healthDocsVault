import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ShareIcon from "@mui/icons-material/Share";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useContext, useState } from "react";
import {SideBarContext} from '../context/SideBarContext';

const SideBar = () => {
  // const [isOpened, setIsOpened] = useState(false)
  // console.log("context : ",SideBarContext)
  const {isOpened, setIsOpened} = useContext(SideBarContext)
  return (
    // main div starts
    <div
      className={`h-fit rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col self-center mr-3 bg-violet-500 ${
        isOpened
          ? "transition-all duration-[2000ms] ease-in w-[300px]"
          : "transition-all duration-[2000ms] ease-in w-[55px]"
      }`}
    >
      {/* header */}
      <div
        className={`flex flex-row h-[30px] w-[90%] mt-5 ${
          isOpened
            ? "justify-between overflow-hidden mx-3"
            : "transition-all duration-[2000ms] ease-in px-2"
        }`}
      >
        {isOpened && <div className="font-rubik text-2xl">Dashboard</div>}
        <MenuIcon
          fontSize="large"
          className={`cursor-pointer ${isOpened ? "" : "transition-all duration-800 delay-500"}`}
          onClick={(e) => {
            setIsOpened((prev) => !prev);
          }}
        ></MenuIcon>
      </div>
      {/* header */}
      {/* menus starts */}
      {/* <div className=" bg-violet-500"> */}
      <div
        className={`flex flex-col cursor-pointer h-[50%] mt-16 mb-16 justify-around relative ${
          isOpened
            ? "w-[90%] fixed top-0 left-0 bottom-0 overflow-hidden mx-3"
            : "w-full px-2"
        }`}
      >
        {/*menu 1*/}
        <div
          key={1}
          className={`flex flex-row mt-1 bg-primary rounded-lg items-center ${
            isOpened
              ? "transition-all duration-[2000ms] ease-in w-full"
              : "transition-all duration-[2000ms] ease-in w-[35px]"
          }`}
        >
          <ManageAccountsIcon
            sx={{ fontSize: 30 }}
            className={`text-[#454545] hover:text-black mt-0.5 mb-0.5 ${
              isOpened ? "ml-3" : "ml-0.5 mr-0.5"
            }`}
          />
            <div
              className={`font-rubik text-[#454545] ml-5 text-clip overflow-hidden whitespace-nowrap`}
            >
              Manage Your Profile
            </div>
        </div>
        {/* menu 1 ends */}
        {/* menu 2 */}
        <div
          key={2}
          className={`flex flex-row mt-1 bg-primary rounded-lg items-center ${
            isOpened
              ? "ransition-all duration-[2000ms] ease-in w-full"
              : "transition-all duration-[2000ms] delay-500 ease-in w-[35px]"
          }`}
        >
          <AddIcon
            key={3}
            sx={{ fontSize: 30 }}
            className={`text-[#454545] hover:text-black mt-0.5 mb-0.5 ${
              isOpened ? "ml-3" : "ml-0.5 mr-0.5"
            }`}
          />
            <div
              key={4}
              className={`font-rubik text-[#454545]   ml-5 text-clip overflow-hidden whitespace-nowrap`}
            >
              Upload Health Records
            </div>
        </div>
        {/* menu 2 ends */}
        {/* menu 3 */}
        <div
          className={`flex flex-row mt-1 bg-primary rounded-lg items-center ${
            isOpened
              ? "transition-all duration-[2000ms] ease-in w-full"
              : "transition-all duration-[2000ms] delay-500 ease-in w-[35px]"
          }`}
        >
          <InsertDriveFileIcon
            sx={{ fontSize: 30 }}
            className={`text-[#454545] hover:text-black mt-0.5 mb-0.5 ${
              isOpened ? "ml-3" : "ml-0.5 mr-0.5"
            }`}
          />
            <div
              className={`font-rubik text-[#454545] ml-5 text-clip overflow-hidden whitespace-nowrap`}
            >
              Show Health Records
            </div>
        </div>
        {/* menu 3 ends */}
        {/* menu 4 */}
        <div
          className={`flex flex-row mt-1 bg-primary rounded-lg items-center ${
            isOpened
              ? "transition-all duration-[1000ms] ease-in w-full"
              : "transition-all duration-[2000ms] delay-500 ease-in w-[35px]"
          }`}
        >
          <ShareIcon
            sx={{ fontSize: 30 }}
            className={`text-[#454545] hover:text-black mt-0.5 mb-0.5 ${
              isOpened ? "ml-3" : "ml-0.5 mr-0.5"
            }`}
          />
            <div
              className={`font-rubik text-[#454545]  ml-5 text-clip overflow-hidden whitespace-nowrap`}
            >
              Share Health Records
            </div>

        </div>
        {/* menu 4 ends */}
      </div>
      {/* </div> */}
      {/* menus ends */}
      {/* footer */}
      <div
        className={`flex flex-row w-[90%] items-center mb-3 ${
          isOpened ? "mx-3" : "px-2"
        }`}
      >
        <PersonIcon
          fontSize="large"
          className="bg-primary rounded-lg"
        ></PersonIcon>
        {isOpened && (
          <div className="flex flex-col ml-5 overflow-hidden">
            <div className="font-rubik text-xs">Hello,</div>
            <div className="font-rubik text-xs text-clip overflow-hidden whitespace-nowrap">
              Mahir Jain
            </div>
          </div>
        )}
      </div>
      {/* footer */}
    </div>
    //  main div end
  );
};

export default SideBar;
