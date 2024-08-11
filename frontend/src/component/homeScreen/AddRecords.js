import MainNav from "../common/MainNav";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import PreviewImageModal from "../common/PreviewImageModal";
import { useState, useEffect } from "react";
import Dexie from 'dexie'
import { useLiveQuery } from "dexie-react-hooks";

const AddRecords = () => {
  const [files, setFiles] = useState(
    JSON.parse(localStorage.getItem("files")) || []
  );
  const [modalOpen,setModalOpen]=useState(false);
  const [imageURL,setImageURL]=useState("");
  
  const handleChange=(e)=>{
    console.log(e.target.files)
    const files = e.target.files;

    Array.from(files).forEach((key,file) => {
      // Perform an action on each file
      setFiles([...files,file.name])
      // You can do further processing with each file here
    });
    console.log("files",files)
  }
  let key=0;
  return (
    <>
      <MainNav title="Add Records" />
      <PreviewImageModal modalOpen={modalOpen} setModalOpen={setModalOpen} imageURL={imageURL}/>
      <div className="flex flex-row ml-5 z-10">
        {files.map(({  file }) => {
          key++;
          console.log("setting key : ", key);
          return (
            <div
              className="w-[120px] h-[140px] bg-light-green ml-2 rounded-lg flex flex-col justify-center items-center relative cursor-pointer"
              key={key} 
              // onClick={()=>{onImageClick(key)}}
            >
              <CloseIcon
                sx={{ color: "white", fontSize: "15px" }}
                className="absolute top-[-3px] right-[-4px] bg-[#FF0000] rounded-full"
                onClick={() => {
                  // removeFile(key);
                }}
              />
              <img src={file} alt="file" className="w-[100px] h-[120px]" />
            </div>
          );
        })}
        <label
          className="w-[100px] h-[140px] bg-light-green flex flex-col justify-center items-center cursor-pointer ml-2"
          htmlFor="file-upload"
        >
          <AddIcon className="text-primary" sx={{ fontSize: "50px" }} />
          <input
            type="file"
            id="file-upload"
            accept="file"
            className="bg-orange-500 hidden"
            multiple
            onChange={handleChange}
          />
          <div className="font-rubik text-sm text-primary font-light">
            Add more
          </div>
          <div className="font-rubik text-sm text-primary font-light">
            images
          </div>
        </label>
      </div>
    </>
  );
};

export default AddRecords;

// add string to local stroage
// add cross mark on image
// view image in bigger size
