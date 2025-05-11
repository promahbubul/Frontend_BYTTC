import { View } from "@react-pdf/renderer";
import styles from "./styles";
import Section from "./Section";

const GeneralInformation = ({ student }) => {



  return (
    <View style={styles.generanInformationContainer}>
      <View style={styles.courseContainer}>
        {/* <p className=""></p> */}
        <Section sectionName={"‡Kv‡m©i bvg"} title={student?.course?.name} />
        <Section
          sectionName={"‡iwR‡÷kb"}
          width={{ width: 180 }}
          background={true}
          title={student?.registrationNumber}
        />
      </View>
      <Section
        sectionName={"cÖv_xi bvg evsjvq"}
        title={student?.nameBangla}
        // fontFamily={true}
      />
      <Section
        sectionName={"cÖv_x©i bvg Bs‡iwR‡Z"}
        title={student?.nameEnglish}
        textTransform={"uppercase"}
      />
      <Section
        textTransform={"capitalize"}
        sectionName={"wj½"}
        title={student?.gender}
      />
      <Section
        sectionName={"gvZvi bvg "}
        title={student?.fatherName}
        textTransform={"uppercase"}
      />
      <Section
        sectionName={"wcZvi bvg"}
        title={student?.motherName}
        textTransform={"uppercase"}
      />
      <Section sectionName={"Rb¥ ZvwiL"} title={student?.dateOfBirth} />
      <Section
        sectionName={"Rb¥ wbeÜb bv¤^vi"}
        title={student?.birthRegistrationNumber}
      />
      <Section sectionName={"RvZxq cwiPq ce©"} title={student?.nid} />
    </View>
  );
};
export default GeneralInformation;
