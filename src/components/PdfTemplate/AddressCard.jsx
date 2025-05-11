import { View } from "@react-pdf/renderer";
import styles from "./styles";
import ContainerHeading from "./ContainerHeading";
import Section from "./Section";

const AddressCard = ({
  sectionHeading,
  
  village,
  postOffice,
  policeStation,
  postCode,
  upazila,
  zilla,
}) => {
  return (
    <View style={styles.addressCard}>
      <View style={styles.containerHeading}>
        <ContainerHeading title={sectionHeading} />
      </View>
      <View style={{padding: 5}}>
        <Section title={village} sectionName={"MÖvg"} />
        <Section title={postOffice} sectionName={"‡cv÷ Awdm"} />
        <Section title={policeStation} sectionName={"_vbv"} />
        <Section title={postCode} sectionName={"‡cv÷ †KvW"} />
        <Section title={upazila} sectionName={"Dc‡Rjv"} />
        <Section title={zilla} sectionName={"‡Rjv"} />
      </View>
    </View>
  );
};
export default AddressCard;
