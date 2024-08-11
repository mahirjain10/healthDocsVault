import { useContext } from "react";
import MainNav from "../common/MainNav";
import RecordOverview from "../common/RecordOverview";
import { SideBarContext } from "../context/SideBarContext";

const ShowRecord = () => {
  const {isOpened}= useContext(SideBarContext);
  console.log("is opened from show records",isOpened);
  return (
    <>
      <MainNav title="All Records" />
      {/* <div className="h-full w-full flex flex-row flex-wrap"> */}
      <div className={` w-full h-full grid grid-rows-4 gap-4 ${isOpened ? `grid-cols-3` : 'grid-cols-4'}`}>
        <RecordOverview/>
        <RecordOverview/>
        <RecordOverview/>
        <RecordOverview/>
        <RecordOverview/>
        <RecordOverview/>
        {/* <RecordOverview/>
        <RecordOverview/>
        <RecordOverview/>
        <RecordOverview/>
        <RecordOverview/>
        <RecordOverview/>        <RecordOverview/>
        <RecordOverview/> */}
      </div>
    </>
  );
};

export default ShowRecord;
