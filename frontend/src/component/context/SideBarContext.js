import { createContext, useState } from "react";

export const SideBarContext = createContext();
export const SideBarProvider=({children})=>{
    const [isOpened,setIsOpened] = useState(false);

    return(
        <SideBarContext.Provider value={{isOpened,setIsOpened}}>
            {children}
        </SideBarContext.Provider>
    )
}
