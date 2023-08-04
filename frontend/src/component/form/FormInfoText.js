const FormInfoText = ({children,className,...rest}) => {
  return (
    <div className={`font-rubik font-thin mt-7 text-center ${className}`} {...rest}>
        {children}
    </div>
  );
};

export default FormInfoText;

// w-[600px]