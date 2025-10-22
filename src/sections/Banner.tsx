export const Banner = () => {
  return (
    <div
      className="py-3 text-center 
  bg-[linear-gradient(270deg,rgb(252,214,255),rgb(41,216,255),rgb(255,253,128),rgb(248,154,191),rgb(252,214,255))]
  bg-[length:200%_200%] bg-[position:0%_50%]
  hover:bg-[position:100%_50%] 
  transition-[background-position] duration-1000 ease-in-out hover:text-white hover:font-bold
"
    >
      <div className="container">
        <span className="font-medium">
          Introducing a complete redesigned interface -{" "}
        </span>
        <a href="#" className="underline underline-offset-4 font-medium">
          <span>Explore the demo</span>
        </a>
      </div>
    </div>
  );
};
