import { Text, View } from "@react-pdf/renderer";
import styles from "./styles";

const Section = ({ sectionName, title, fontFamily, textTransform , border, background, width}) => {
  return (
    <View
      style={[
        styles.SectionContainer,
        border && { border: "0.5px solid black" }, background && {backgroundColor: "yellow"},
        width && width
      ]}
    >
      <Text style={styles.sectionHeading}>{sectionName} t </Text>
      {!fontFamily ? (
        <Text
          style={[
            styles.sectionTitleFont,
            textTransform && { textTransform: textTransform },
          ]}
        >
          {title}
        </Text>
      ) : (
        <Text style={styles.sectionTitle}>{title}</Text>
      )}
    </View>
  );
};
export default Section;
