const TextArea = ({ ledend, required, placeholder,  name }) => {
  return (
    <div className="w-full ">
      <legend className="fieldset-legend flex  items-center font-semibold text-sm ">
        {ledend}{" "}
        {required && (
          <span className="text-2xl font-bold text-red-500 leading-0">*</span>
        )}
      </legend>
      <textarea
        type="text"
        name={name}
        placeholder={placeholder}
        className={`textarea bg-white text-slate-900 textarea-lg textarea-success w-full h-5 `}
      ></textarea>
    </div>
  );
};
export default TextArea;
