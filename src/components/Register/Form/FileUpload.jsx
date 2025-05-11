import axios from "axios";
import { useState } from "react";

const FileUpload = ({ setImage, className, colSpan, required, ledend }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setLoading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    axios
      .post(
        `https://api.imgbb.com/1/upload?key=918613f4ce8f567723f80cb3e079b7cc`,
        formData
      )
      .then((res) => {
        
        setFile(res.data.data.url);
        setImage(res.data.data.url);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };
  
  return (
    <div className={`w-full  ${colSpan}`}>
      <legend className="fieldset-legend flex text-xs text-left  justify-start ">
        {ledend}{" "}
        {required && (
          <span className="text-2xl font-bold text-red-500 leading-0">*</span>
        )}
      </legend>
      {loading ? (
        <h1>Loading...</h1>
      ) : file ? (
        <div
          onClick={() => {
            setFile(null);
            handleChange
          }}
          className="border-4 rounded-md max-w-max  border-success"
        >
          <img src={file} alt="" className={`rounded-sm ${className}`} />
        </div>
      ) : (
        <div>
          <input
            required={required}
            onChange={handleChange}
            type="file"
            className="file-input w-full file-input-success"
          />
        </div>
      )}
    </div>
  );
};
export default FileUpload;
