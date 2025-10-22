const Button = ({ classname, text }: { classname: string; text: string }) => {
  return (
    <button
      className={` transition-all ease-in-out duration-300 hover:bg-gradient-to-r hover:from-[#a46edb] hover:to-[#cca2fe]  hover:text-white  ${classname}`}
    >
      {text}
    </button>
  );
};

export default Button;
