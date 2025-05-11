import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import styles from "./styles";
import Header from "./Header";
import GeneralInformation from "./GeneralInformation";
import Address from "./Address";
import Section from "./Section";
import PaidStatus from "./PaidStatus";

const PdfTemplate = ({ student }) => {
  return (
    <div className="h-[calc(100vh-247px)] py-2 ">
      <PDFViewer className="w-full h-full px-30 mx-auto">
        <Document pageMode="useAttachments" title={student?.nameEnglish}>
          <Page size="A4" style={styles.page}>
            {/* Image */}
            <View style={styles.photoContainer}>
              <Image src={student?.photo} style={styles.photo} />
            </View>
            <Header />
            <GeneralInformation student={student} />
            <Address student={student} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 5,
                gap: 5,
              }}
            >
              <Section
                border={true}
                sectionName={"‡gvevBj bv¤^vi"}
                title={student?.phone}
                background={true}
              />
              <Section
                border={true}
                background={true}
                sectionName={"wcZv/gvZvi †gvevBj bv¤^vi"}
                title={student?.guardianPhone}
              />
            </View>
            <Section sectionName={"i‡³i MÖæc"} title={student?.bloogGroup} />
            <Section sectionName={"B‡gBj"} title={student?.email} />
            <Section
            border={true}
              sectionName={"Uªvb‡RKkb AvBwW"}
              title={student?.transactionID}
            />
            <View style={{ marginTop: 10 }}>
              <Image style={styles?.signature} src={student?.signature} />
            </View>
            <PaidStatus status={student?.paymentStatus} />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};
export default PdfTemplate;
