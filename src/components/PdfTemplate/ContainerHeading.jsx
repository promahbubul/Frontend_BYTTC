import { Text } from "@react-pdf/renderer";
import styles from "./styles";

const ContainerHeading = ({title}) => {
  return <Text style={styles.containerHeading}>{title}</Text>;
}
export default ContainerHeading