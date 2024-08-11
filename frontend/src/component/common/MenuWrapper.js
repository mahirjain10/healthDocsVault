const MenuWrapper=({children,isOpened})=>{
    return (
        <div
          key={1}
          className={`flex flex-row mt-1 bg-primary rounded-lg items-center relative ${
            isOpened
              ? "w-full"
              : "transition-all duration-[2000ms] ease-in w-[35px]"
          }`}
        ></div>
    )
}