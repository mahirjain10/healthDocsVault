const Screen = ({direction,flexDirection,mt,marginDirection,heading,content,src}) => {
  return (
    <div className={`mt-[${mt}] flex ${flexDirection}`}>
      <div className={`w-[160px] h-[320px] ${(direction==="left" ? "rounded-tr-full rounded-br-full" : "rounded-tl-full rounded-bl-full")} bg-primary absolute ${direction}-0 z-[-1] mt-[120px]`}></div>
      <img
        src={src}
        alt="image_1"
        className={`rounded-full w-[350px] h-[350px] ${marginDirection} mt-3 z-1 float-${direction}`}
      />
      <div className="flex flex-col ml-5">
        <div className="font-rubik text-3xl font-medium text-center pt-12">
          {heading}
        </div>
        <div className="font-rubik font-light pt-12 flex justify-center text-base">
          <div className="w-[1050px]">
          {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
