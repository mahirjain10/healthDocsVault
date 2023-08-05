import Button from "../form/Button";
const Main = () => {
  return (
    <div className="w-full h-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex flex-row p-5 align-center">
        <div className="bg-white rounded-lg font-rubik shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-6 text-center text-lg cursor-pointer">
          &#60;
        </div>
        <div className="font-rubik pl-5 text-lg">Medical Records</div>
      </div>
      <div className="flex flex-col w-full h-full justify-center">
        <img src={require('../../assets/animatedPresc.png')} alt="animated_presc" width="200px" height="200px" className="self-center"/>
        <div className="font-rubik text-2xl self-center mt-5">Add a medical record.</div>
        <div className="font-rubik font-thin self-center mt-5">A detailed health history helps a doctor diagnose you better.</div>
        <Button className="w-[200px] self-center mt-5">Add a record</Button>
      </div>
    </div>
  );
};

export default Main;
