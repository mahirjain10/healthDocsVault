import MainNav from "../common/MainNav";
import Button from "../form/Button";
const AddToRecord = () => {
  return (
    <>
      <MainNav title="Medical Records" symbol="&#60;" />
      <div className="flex flex-col w-full h-full justify-center">
        <img
          src={require("../../assets/animatedPresc.png")}
          alt="animated_presc"
          width="200px"
          height="200px"
          className="self-center"
        />
        <div className="font-rubik text-2xl self-center mt-5">
          Add a medical record.
        </div>
        <div className="font-rubik font-thin self-center mt-5">
          A detailed health history helps a doctor diagnose you better.
        </div>
        <Button className="w-[22%] self-center mt-5">Add a record</Button>
      </div>
    </>
  );
};

export default AddToRecord;
