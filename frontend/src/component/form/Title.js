const Title=({children,className,...rest})=>{
    return (
        <div className={`font-rubik font-normal text-2xl text-center mt-4 ${className}`} {...rest}>
        {children}
      </div>
    )
}

export default Title