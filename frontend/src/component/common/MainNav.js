const MainNav=({title})=>{
    return (
        <div className="flex flex-row p-5 align-center">
        <div className="bg-white rounded-lg font-rubik shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-6 text-center text-lg cursor-pointer">
          &#60;
        </div>
        <div className="font-rubik pl-5 text-lg">{title}</div>
      </div>
    )
}

export default MainNav