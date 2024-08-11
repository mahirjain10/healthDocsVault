import CloseIcon from '@mui/icons-material/Close';
const PreviewImageModal=({modalOpen,setModalOpen,imageURL})=>{
    const image=JSON.parse(localStorage.getItem("files"))
    console.log(imageURL)
    return(
        <div className={`w-[500px] h-[500px] absolute left-[30%] z-20 bg-white overflow-scroll rounded-lg ${modalOpen ? "opacity-100" : "hidden"}`}>
            <CloseIcon sx={{color:"white",fontSize:"25px"}} className="absolute right-2 top-2 border rounded-full bg-[#FF0000] cursor-pointer" onClick={()=>{setModalOpen(false)}}/> 
            <div className="flex flex-row justify-center items-center mt-10 mb-10">
            <img src={imageURL.url} className="h-[80%] w-[80%]" alt="preview"/>
            </div>
        </div>
    )
}

export default PreviewImageModal