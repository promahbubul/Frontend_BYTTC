import { Input, TextArea } from "../../ui";

const PresentAddress = () => {
  return (
    <div className="col-span-6 bg-slate-700 shadow-md shadow-green-900 rounded-md mt-5 ">
      <h4 className="border-b-2 p-5 border-b-green-600 pb-1 font-bold text-xl text-green-400">
        Present Address
      </h4>
      <div className="p-5  space-y-3">
        <TextArea
          required={true}
          name={"village"}
          ledend={"Village: "}
          placeholder={"Enter your village here."}
        />
        <Input
          required={true}
          name={"postOffice"}
          className={"col-span-4"}
          ledend={"Post Office: "}
          placeholder={"Enter your post office"}
          type={"text"}
        />
        <Input
          required={true}
          name={"policeStation"}
          className={"col-span-4"}
          ledend={"Police Station: "}
          placeholder={"Enter your police station"}
          type={"text"}
        />
        <Input
          required={true}
          name={"postCode"}
          className={"col-span-4"}
          ledend={"Post Code: "}
          placeholder={"Enter your post code"}
          type={"number"}
        />
        <Input
          required={true}
          name={"upazila"}
          className={"col-span-4"}
          ledend={"Upazila: "}
          placeholder={"Enter your upazila"}
          type={"text"}
        />
        <Input
          required={true}
          name={"district"}
          className={"col-span-4"}
          ledend={"District: "}
          placeholder={"Enter your district"}
          type={"text"}
        />
      </div>
    </div>
  );
};
export default PresentAddress;
