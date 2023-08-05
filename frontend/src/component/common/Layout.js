const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="p-2 rounded-lg h-[96%] w-[99%] flex flex-row overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Layout;


// you need to overflow hidden in order to have scroll bar to scroll the document uploaded