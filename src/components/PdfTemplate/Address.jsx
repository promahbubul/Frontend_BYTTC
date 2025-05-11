import { Text, View } from "@react-pdf/renderer";
import styles from "./styles";
import ContainerHeading from "./ContainerHeading";
import AddressCard from "./AddressCard";

const Address = ({ student }) => {
  return (
    <View style={styles.addressContainer}>
      <AddressCard
        village={student?.village}
        policeStation={student?.policeStation}
        postCode={student?.postCode}
        postOffice={student?.postOffice}
        upazila={student?.upazila}
        zilla={student?.district}
        sectionHeading={"eZ©gvb wVKvbv"}
      />
      <AddressCard
        sectionHeading={"¯’vqx wVKvbv"}
        village={student?.permanentVillage}
        policeStation={student?.permanentPolicestation}
        postCode={student?.permanentPostcode}
        postOffice={student?.permanentPostoffice}
        upazila={student?.permanentUpazila}
        zilla={student?.permanentDistrict}
      />
    </View>
  );
};
export default Address;
