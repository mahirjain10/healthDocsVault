const Input = ({ children, className ,...rest}) => {
  return (
    <input
      className={`mt-5 border-2 border-solid outline-none font-rubik  ${className}`}
        {...rest}
    />
  );
};

export default Input;

//