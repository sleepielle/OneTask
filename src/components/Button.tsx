const Button = ({ classname, text }: { classname: string; text: string }) => {
  return (
    <button
      className={` transition ease-in-out duration-300 hover:bg-gradient-to-r hover:from-[#a46edb] hover:to-[#cca2fe] hover:border-white hover:border hover:text-white/70 ${classname}`}
    >
      {text}
    </button>
  );
};

export default Button;
