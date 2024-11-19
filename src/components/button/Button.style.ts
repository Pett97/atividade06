import { StyleSheet } from "react-native";
import { SECONDARY_COLOR } from "../../constants/globalStyles";


const styles=StyleSheet.create({
    container:{
      backgroundColor:SECONDARY_COLOR,
      alignItems:"center",
      padding: 10, 
      margin: 10,
      textAlign:"center"
    },
    text:{
      color:"white",
      fontSize:14,
      fontWeight:"bold"
    }
})

export default styles;