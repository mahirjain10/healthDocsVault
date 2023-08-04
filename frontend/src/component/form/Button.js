const Button = ({children,className,...rest}) => {
  return (
    <button className={`font-rubik w-full bg-primary mt-12 h-[50px] rounded-lg text-xl text-white font-normal ${className}`} {...rest}>
      {children}
    </button>
  );
};


export default Button