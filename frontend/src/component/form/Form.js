const Form=({children,className,...rest})=>{
    return(
        <main className="p-0 m-0 flex flex-col justify-center items-center  h-screen overflow-hidden">
            <div className={`flex items-center flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${className}`}>
                {children}
            </div>
        </main>
    )
}

export default Form

// w -[680px] h-[600px] 