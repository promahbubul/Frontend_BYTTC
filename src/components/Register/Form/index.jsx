// import { useState } from "react";
import { useEffect, useState } from "react";
import usePublicAxios from "../../../../hooks/usePublicAxios";
import { Input } from "../../ui";
import TextArea from "../../ui/TextArea";
import PresentAddress from "./PresentAddress";
import PermanentAddress from "./PermanentAddress";
import SelectOption from "../../ui/SelectOption";
import FileUpload from "./FileUpload";

const Form = ({ handleSubmit, gender, setGender, setPhoto, setSignature }) => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(0);

  const publicAxios = usePublicAxios();

  useEffect(() => {
    publicAxios
      .get("/courses")
      .then((result) => setCourses(result?.data?.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="px-10 pb-10 min-h-[calc(100vh-248px)]">
      <form onSubmit={handleSubmit} className="">
        <div className="flex flex-row gap-4 items-center justify-end mb-10">
          <h3 className="text-green-500 font-bold text-xl">
            Select Course: <span className="text-error ">*</span>{" "}
          </h3>
          <select
            required={true}
            onChange={(e) =>
              setSelectedCourse(
                courses.find((course) => course._id === e.target.value)
              )
            }
            name="course"
            className="select course"
          >
            <option selected disabled={true}>
              Select your course
            </option>
            {courses.map((course) => (
              <option value={course?._id} key={course?._id}>
                {course?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-12 gap-3 items-center">
          <Input
            name={"nameBangla"}
            className={"col-span-6"}
            ledend={"Full Name (Bangla): "}
            placeholder={"Enter your name in Bangla"}
            required={true}
          />
          <Input
            name={"nameEnglish"}
            className={"col-span-6"}
            ledend={"Ful Name (English): "}
            placeholder={"Enter your you name in English"}
            capitalize={true}
            required={true}
          />
          <fieldset className="fieldset col-span-8">
            <legend className="fieldset-legend">{"Gender: "}</legend>
            <div className="flex flex-row items-center gap-5">
              <label
                onClick={() => setGender("male")}
                htmlFor="male"
                className="flex flex-row"
              >
                Male
                <input
                  type="checkbox"
                  checked={gender === "male" ? true : false}
                  id="male"
                  className="checkbox checkbox-primary ml-3"
                />
              </label>
              <label
                onClick={() => setGender("female")}
                htmlFor="female"
                className="flex flex-row "
              >
                Female
                <input
                  type="checkbox"
                  id="female"
                  checked={gender === "female" ? true : false}
                  className="checkbox checkbox-primary ml-3"
                />
              </label>
            </div>
          </fieldset>
          <div className="col-span-4">
            <SelectOption
              name={"bloogGroup"}
              label={"select your blood group"}
              ledend={"Blood Group"}
              options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
            />
          </div>
          <Input
            required={true}
            name={"fatherName"}
            className={"col-span-6"}
            ledend={"Father Name (English): "}
            placeholder={"Enter your you name in English"}
            capitalize={true}
          />
          <Input
            required={true}
            name={"motherName"}
            className={"col-span-6"}
            ledend={"Mother Name (English): "}
            placeholder={"Enter your you name in English"}
            capitalize={true}
          />
          <Input
            required={true}
            name={"dateOfBirth"}
            className={"col-span-2"}
            ledend={"Date of Birth: "}
            placeholder={"Enter your date of birth"}
            type={"date"}
          />
          <Input
            name={"birthRegistrationNumber"}
            className={"col-span-6"}
            ledend={"Birth registration number: "}
            placeholder={"Enter your birth registration number"}
            type={"number"}
          />
          <Input
            name={"nid"}
            className={"col-span-4"}
            ledend={"NID Number: "}
            placeholder={"Enter your NID number"}
            type={"number"}
          />
          <PresentAddress />
          <PermanentAddress />
          <div className="mt-2 col-span-12"></div>
          <Input
            name={"email"}
            className={"col-span-4"}
            ledend={"Email: "}
            placeholder={"Enter your email"}
            type={"email"}
          />
          <Input
            name={"phone"}
            className={"col-span-4"}
            ledend={"Phone: "}
            placeholder={"Enter your phone"}
            type={"number"}
            required={true}
          />
          <Input
            name={"guardianPhone"}
            className={"col-span-4"}
            ledend={"Father / Mother Phone: "}
            placeholder={"Enter guardian phone number"}
          />

          <div className="col-span-12 text-base">
            <p className="">
              <span className="bg-red-500 px-1">Note:</span>{" "}
              <span className="border-b border-b-red-500">Photo</span> will be
              <span className="text-red-500"> 300 X 300 px</span> and{" "}
              <span className="border-b border-b-red-500">Signature</span> will
              be <span className="text-red-500">80 X 120 px</span>
            </p>
          </div>
          <div className="col-span-12 space-y-3">
            <FileUpload
              required={true}
              setImage={setPhoto}
              ledend={"Upload Photo"}
              colSpan={"col-span-6"}
              className={"h-50 w-40 "}
            />
            <FileUpload
              required={true}
              setImage={setSignature}
              ledend={"Upload Signature"}
              className={"h-16 w-80"}
              colSpan={"col-span-6"}
            />
          </div>
        </div>

        <div className="py-10">
          <p className="text-center font-extrabold text-green-500 text-5xl">
            {" "}
            Tk: {selectedCourse ? selectedCourse?.price : "0000"}
          </p>
        </div>
        <button type="submit" className="btn btn-lg btn-success w-full mt-5">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
