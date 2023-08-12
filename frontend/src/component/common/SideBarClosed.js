import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ShareIcon from "@mui/icons-material/Share";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useState } from "react";

const SideBarClosed=()=>{
    const [isOpened,setIsOpened]=useState(true);

return (
    // main div starts
    <div className={`h-fit shadow-[0_3px_10px_rgb(0,0,0,0.2)] self-center flex flex-col ${isOpened ? "transition-all duration-[1000ms] ease in w-[250px] items-center" : "transition-all duration-[2000ms] ease in w-[55px]"}`}>
        {/* header */}
        <div className={`flex flex-row h-[30px] w-[90%] mt-5 ${isOpened ? "justify-between" : "justify-center"}`}> 
        {isOpened && (<div className="font-rubik text-2xl">Dashboard</div>)}
        <MenuIcon fontSize="large" className="cursor-pointer" onClick={(e)=>{setIsOpened(prev=>! prev)}}></MenuIcon>
        </div>
        {/* header */}
        {/* menus starts */}
         {/* <div className="relative"> */}
        <div className={`flex flex-col  cursor-pointer h-[50%] mt-16 mb-16 justify-around ${isOpened ? "w-[90%]" : "w-full bg-orange-500 items-center" }`}>
        {/*menu 1*/}
        <div className={`flex flex-row mt-1 bg-primary rounded-lg items-center ${isOpened ? "w-full" : "transition-all duration-[1000ms] ease in w-[35px]" }`}>
            <ManageAccountsIcon sx={{fontSize:30}} className={`text-[#454545] hover:text-black mt-0.5 mb-0.5 ${isOpened ? "ml-3" : "ml-0.5 mr-0.5"}`}/>
            {isOpened && (<div className="font-rubik text-[#454545] ml-5">Manage Profile</div>)}
        </div>
        {/* menu 1 ends */}
        {/* menu 2 */}
        <div className={`flex flex-row mt-1 bg-primary rounded-lg items-center ${isOpened ? "w-full" : "transition-all duration-[1000ms] ease in w-[35px]" }`}>
            <AddIcon sx={{fontSize:30}} className={`text-[#454545] hover:text-black mt-0.5 mb-0.5 ${isOpened ? "ml-3" : "ml-0.5 mr-0.5"}`}/>
            { isOpened && <div className="font-rubik text-[#454545] ml-5">Upload Documents</div>}
        </div>
        {/* menu 2 ends */}
        {/* menu 3 */}
        <div className={`flex flex-row mt-1 bg-primary rounded-lg items-center ${isOpened ? "w-full" : "transition-all duration-[1000ms] ease in w-[35px]" }`}>
            <InsertDriveFileIcon sx={{fontSize:30}} className={`text-[#454545] hover:text-black mt-0.5 mb-0.5 ${isOpened ? "ml-3" : "ml-0.5 mr-0.5"}`}/>
            { isOpened && <div className="font-rubik text-[#454545] ml-5">Show Documents</div>}
        </div>
        {/* menu 3 ends */}
        {/* menu 4 */}
        <div className={`flex flex-row mt-1 bg-primary rounded-lg items-center ${isOpened ? "w-full" : "transition-all duration-[1000ms] ease in w-[35px]" }`}>
            <ShareIcon sx={{fontSize:30}} className={`text-[#454545] hover:text-black mt-0.5 mb-0.5 ${isOpened ? "ml-3" : "ml-0.5 mr-0.5"}`}/>
            { isOpened && <div className="font-rubik text-[#454545] ml-5">Share Documents</div>}
        </div>
        {/* menu 4 ends */}
        </div>
         {/* </div> */}
        {/* menus ends */}
        {/* footer */}
        <div className={`flex flex-row w-[90%] items-center mb-3 ${isOpened ? "" : "justify-center"}`}>
            <PersonIcon fontSize="large" className="bg-primary rounded-lg"></PersonIcon>
            { isOpened && <div className="flex flex-col ml-5">
                <div className="font-rubik text-xs">Hello,</div>
                <div className="font-rubik text-xs">Mahir Jain</div>
            </div>}
        </div>
        {/* footer */}
    </div>    
    //  main div end
    )
}

export default SideBarClosed