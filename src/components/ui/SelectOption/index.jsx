const SelectOption = ({ options = [], name, label, ledend, required }) => {
  return (
    <div>
      <legend className="fieldset-legend flex  text-xs mb-1 ">
        {ledend}{" "}
        {required && (
          <span className="text-2xl font-bold text-red-500 leading-0">*</span>
        )}
      </legend>
      <select name={name} className="select select-success w-full border-2">
        <option selected disabled={true}>
          {label}
        </option>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectOption