import { Font, StyleSheet } from "@react-pdf/renderer";

Font.register({
  family: "SutonnyMJ",
  fonts: [
    {
      src: "/fonts/sutonnymj-regurar.ttf",
      fontWeight: "normal",
      fontStyle: "normal",
    },
    {
      src: "/fonts/sutonnyMJ-Italic.ttf",
      fontWeight: "normal",
      fontStyle: "italic",
    },
    {
      src: "/fonts/sutonnymj-bold.ttf",
      fontWeight: "bold",
      fontStyle: "normal",
    },
    {
      src: "/fonts/sutonnymj-bold-italic.ttf",
      fontWeight: "bold",
      fontStyle: "italic",
    },
  ],
});

Font.register({
  family: "Times",
  src: "/fonts/times.ttf",
  fontWeight: "normal",
  fontStyle: "normal",
});
Font.register({
  family: "TiroBangla",
  src: "/fonts/tiroBangla.ttf",
  fontWeight: "normal",
  fontStyle: "normal",
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    padding: 30,
  },
  photoContainer: {
    position: "absolute",
    top: 30,
    right: 30,
    width: 75,
    height: 90,
  },

  photo: {
    width: "100%",
    height: "100%",
  },

  header: {
    textAlign: "center",
    fontFamily: "SutonnyMJ",
    lineHeight: 1,
    fontSize: 12,
    marginBottom: 10,
    // borderBottomColor: "red",
    // borderBottomWidth: 3,
  },

  headerTitle: {
    fontSize: 20,
    fontFamily: "SutonnyMJ",
    fontWeight: "bold",
    marginBottom: 8,
  },

  headerAddress: {},
  headerPhone: {},
  headerEmail: {},
  admisionForm: {
    fontSize: 26,
    marginTop: 3,
    textDecoration: "underline",
    lineHeight: 1,
    fontWeight: "bold",
  },
  generanInformationContainer: {
    fontSize: 14,
  },
  courseContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
  },
  courseHeading: {
    fontFamily: "SutonnyMJ",
    // lineHeight: 1.5,
  },
  courseTitle: {
    // fontFamily: "arial",
    fontSize: 14,
    // borderBottomStyle: "dashed",
    // borderBottomWidth: 1,
    // width: "100%",
    // borderBottomColor: "black",
    fontFamily: "Times",
  },
  SectionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    fontFamily: "SutonnyMJ",
    width: "100%",
    // padding: 5,
  },
  sectionHeading: {
    fontSize: 14,
  
    
  },
  sectionTitle: {
    fontFamily: "SutonnyMJ",
    fontSize: 12,
    // paddingTop: 10,
    
  },
  sectionTitleFont: {
    fontFamily: "TiroBangla",
    fontSize: 12,
    paddingTop: 10,
    // lineHeight: 0,
    // overflow: "hidden",
    // textOverflow: "ellipsis",
    // border: "2px sold red",
    // paddingRight: 50,
    // paddingLeft: 10,
  },
  addressContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
  },
  addressCard: {
    width: "100%",
    borderStyle: "dotted",
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 5,
  },
  containerHeading: {
    fontSize: 18,
    paddingHorizontal: 5,
    fontWeight: "bold",
    fontFamily: "SutonnyMJ",
    // backgroundColor: "yellow",
    borderBottomWidth: 0.5,
    // paddingBottom: 9,
    lineHeight: 1.2,
  },
  signature: {
    width: 140,
    height: 35,
  },
  paidImageContainer: {
    width: 200,
    height: 120,
    position: "absolute",
    bottom: 50,
    right: 70,
    opacity: 0.7,
  },
  paidImage: {},
});

export default styles;
