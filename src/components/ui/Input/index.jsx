const Input = ({
  ledend,
  name,
  placeholder,
  type,
  className,
  capitalize,
  required,
  defaultValue,
}) => {
  return (
    <fieldset className={`fieldset  ${className}`}>
      <legend className="fieldset-legend flex justify-center items-center ">
        {ledend}{" "}
        {required && (
          <span className="text-2xl font-bold text-red-500 leading-0">*</span>
        )}
      </legend>
      <input
        defaultValue={defaultValue && defaultValue}
        required={required}
        type={type ? type : "text"}
        name={name}
        className={`input w-full  bg-white text-slate-900 focus:outline-green-500 placeholder:text-green-950 ${
          capitalize && "uppercase"
        }`}
        placeholder={placeholder}
      />
    </fieldset>
  );
};
export default Input;
