import OtpVerification from "../component/auth/OtpVerification"

const OtpVerificationPage=()=>{
    console.log("hello")
    return(
        <OtpVerification/>
    )
}

export default OtpVerificationPage

// const SideBar = () => {
//   return (
//     <div className="h-[450px] w-[300px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg flex flex-col self-center mr-5 justify-center items-center">
//       <div className="w-[80%]">
//         <div className="pt-4 pb-4 cursor-pointer w-full flex flex-row justify-between">
//           <div className="font-rubik text-2xl self-end">Dashboard</div>
//           <MenuIcon fontSize="large" className="self-start" />
//         </div>
//         <div className="flex flex-col mt-10">
//           <div className="mt-2 border outline-none rounded-lg bg-primary w-full h-[40px] flex flex-row items-center cursor-pointer ">
//             <ManageAccountsIcon fontSize="medium" className="text-white ml-5" />
//             <div className="font-rubik text-white text-base ml-3">Profile</div>
//           </div>
//           <div className="mt-2 border outline-none rounded-lg bg-primary w-full h-[40px] flex flex-row items-center cursor-pointer">
//             <AddIcon fontSize="medium" className="text-white ml-5" />
//             <div className="font-rubik text-white text-base ml-3">Upload</div>
//           </div>
//           <div className="mt-2 border outline-none rounded-lg bg-primary w-full h-[40px] flex flex-row items-center cursor-pointer">
//             <InsertDriveFileIcon
//               fontSize="medium"
//               className="text-white ml-5"
//             />
//             <div className="font-rubik text-white text-base ml-3">
//               Show Docs
//             </div>
//           </div>
//           <div className="mt-2 border outline-none rounded-lg bg-primary w-full h-[40px] flex flex-row items-center cursor-pointer">
//             <ShareIcon fontSize="medium" className="text-white ml-5" />
//             <div className="font-rubik text-white text-base ml-3">Share</div>
//           </div>
//         </div>
//         <div className="flex flex-row mt-[60px]">
//             <PersonIcon fontSize="large" className="border rounded-lg text-white bg-primary"/>
//           <div className="flex flex-col ml-3">
//             <div className="font-rubik text-xs">Hi there,</div>
//             <div className="font-rubik text-xs">Mahir</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };