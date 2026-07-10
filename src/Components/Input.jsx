const Input = ({ label = "", className }) => {
  return (
    <div
      className={`${className ? className : ""} ${label ? label : ""} flex flex-col gap-2`}
    >
      <label htmlFor="" className="text-[#041B0E] font-sans text-[16px]">
        {label}
      </label>
      <input
        type="text"
        className="xl:w-[537px] md:w-full w-[358px] border-[#F1F5F1] py-4 rounded-lg bg-[#F1F5F1]"
      />
    </div>
  );
};

export default Input;
