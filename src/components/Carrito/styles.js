import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  contentCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: 160,
    height: 100,
    marginRight: 8,
  },
  contentText: {
    width: "40%",
    marginRight: 10,
  },
  txtNameShoes: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  textShoes: {
    color: "#A4A4A4",
    fontSize: 20,
  },
  icon: {
    marginRight: 10,
  },
  contentTotal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
});
