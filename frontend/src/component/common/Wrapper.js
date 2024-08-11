import Header from "./Header"

const Wrapper=({children})=>{
    return(
        <div className="flex flex-col item-strech h-screen overflow-hidden">
            <Header/>
            {children}
        </div>
    )
}

export default Wrapper