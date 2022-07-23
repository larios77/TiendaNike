import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  content: {
    backgroundColor: "#3C3C3C",
    alignItems: "center",
  },
  contentFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 30,
  },
  textNike: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
  },
  textFollow: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
  },
  links: {
    color: "#fff",
    textDecorationLine: "underline",
    marginVertical: 10,
    fontSize: 16,
  },
  textFooter: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  textDerechos: {
    color: "#fff",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 16,
  },
});
