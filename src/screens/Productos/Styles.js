import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  counter: {
    backgroundColor: "red",
    borderRadius: 50,
    paddingHorizontal: 5,
    position: "absolute",
    top: -8,
    right: 10,
    zIndex: 1,
  },
  textCounter: {
    fontSize: 14,
    color: "#fff",
  },
  container: {
    flex: 1,
  },
  title: {
    color: "#3C3C3C",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 30,
    marginVertical: 30,
    marginLeft: 20,
  },
  image: {
    width: "90%",
    height: 120,
    borderRadius: 6,
    resizeMode: "contain",
  },
  flatList: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  txt: {
    color: "#fff",
    fontSize: 18,
  },
});
