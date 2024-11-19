import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor:"white"
  },
  image:{
    width:100,
    height:100,
    borderWidth:1,
    marginRight:15
  },
  infoProduct:{
    margin:4,
    flex:1,
  },
  productName:{
    fontWeight:"bold"
  },
  priceProduct:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
  }
});

export default styles;