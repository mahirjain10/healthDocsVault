import MoreVertIcon from "@mui/icons-material/MoreVert";
const RecordOverview = () => {
  return (
    // outer most div
    <div className="h-[120px] w-[320px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col flex-1 max-w-full items-center justify-center">
      {/* innermost div  */}
      {/* dividing innermost div into 2 parts . One for date and one more other info */}
      <div className="flex flex-row items-center w-[300px]">
        {/* date's part starts */}
        <div className="flex flex-col">
          <div className="bg-primary w-[60px] h-[70px] flex flex-col items-center justify-center rounded-lg">
            <div className="text-white w-fit font-rubik">27</div>
            <div className="text-white w-fit font-rubik">FEB</div>
          </div>
          <div className="bg-[#0ebe7f1a] rounded-md text-center flex flex-col items-center mt-2 w-[60px]">
            <div className="text-primary w-fit font-rubik bg-">NEW</div>
          </div>
        </div>
        {/* date's part ends */}
        {/* remaining info part starts */}
        <div className="flex flex-col ml-5 w-full">
          <div className="text-black font-medium font-rubik w-fit ">
            Records added by you
          </div>
          <div className="text-primary font-rubik font-light text-sm mt-[3px] w-fit">
            Records for John Doe
          </div>
          <div className="text font-rubik font-light text-sm mt-2 w-fit">
            1 Prescription
          </div>
        </div>
        {/* remaining info part ends */}
        <div className="h-full">
        <MoreVertIcon className="justify-self-start" />
        </div>
      </div>
      {/* remaining info's part ends */}
    </div>
  );
};

export default RecordOverview;
