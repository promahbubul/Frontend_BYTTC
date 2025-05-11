import {  useState } from "react";
import { Form  } from "../../components/Register";
import usePublicAxios from "../../../hooks/usePublicAxios";


const Regisger = () => {
  const [gender, setGender] = useState("male");
  const [photo, setPhoto] = useState(null);
  const [signature, setSignature] = useState(null);

  const publicAxios = usePublicAxios();
  //   const {student, setStudent} = useContext(StudentContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const nameBangla = form.nameBangla.value;
    const nameEnglish = form.nameEnglish.value;
    const fatherName = form.fatherName.value;
    const motherName = form.motherName.value;
    const bloogGroup = form.bloogGroup.value;
    const dateOfBirth = form.dateOfBirth.value;
    const birthRegistrationNumber = form.birthRegistrationNumber.value;
    const nid = form.nid.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const guardianPhone = form.guardianPhone.value;
    const course = form.course.value;
    const permanentVillage = form.permanentVillage.value;
    const permanentPostoffice = form.permanentPostoffice.value;
    const permanentPolicestation = form.permanentPolicestation.value;
    const permanentPostcode = form.permanentPostcode.value;
    const permanentUpazila = form.permanentUpazila.value;
    const permanenDistrict = form.permanenDistrict.value;
    const village = form.village.value;
    const postOffice = form.postOffice.value;
    const policeStation = form.policeStation.value;
    const postCode = form.postCode.value;
    const upazila = form.upazila.value;
    const district = form.district.value;

    const student = {
      nameBangla,
      nameEnglish,
      gender,
      fatherName,
      motherName,
      bloogGroup,
      dateOfBirth,
      birthRegistrationNumber,
      nid,
      email,
      phone,
      guardianPhone,
      course,
      village,
      postOffice,
      policeStation,
      postCode,
      upazila,
      district,
      permanentVillage,
      permanentPostoffice,
      permanentPolicestation,
      permanentPostcode,
      permanentUpazila,
      permanenDistrict,
      photo,
      signature,
    };

    
    publicAxios.post("/students", student).then((res) => {
      window.location.replace(res.data.url);
    });
  };

  return (
    <div className="">
      <Form
        gender={gender}
        setGender={setGender}
        handleSubmit={handleSubmit}
        setPhoto={setPhoto}
        setSignature={setSignature}
      />
    </div>
  );
};
export default Regisger;
