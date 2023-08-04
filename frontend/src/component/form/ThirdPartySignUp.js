const ThirdPartySignUp=()=>{
    return(
        <div className="flex flex-row justify-between mt-6 w-full">
            <div className="h-12 w-[140px] rounded-md  flex items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
              <img
                src={require("../../assets/icons/search.png")}
                alt="google-icon"
                className="h-5 w-5"
              />
              <div className="pl-2 font-rubik font-light">Google</div>
            </div>
            <div className="h-12 w-[140px] rounded-md flex items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
              <img
                src={require("../../assets/icons/facebook.png")}
                alt="google-icon"
                className="h-5 w-5"
              />
              <div className="pl-2 font-rubik font-light">Facebook</div>
            </div>
          </div>
    )
}

export default ThirdPartySignUp