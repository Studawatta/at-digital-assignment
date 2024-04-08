// eslint-disable-next-line react/prop-types
const Button = ({ text }) => {
  return (
    <div className="flex cursor-pointer items-start rounded-[4px] bg-[#F28D35] px-5 py-3 font-[Inter] text-sm font-bold uppercase tracking-tight text-white">
      {text}
    </div>
  );
};

export default Button;
