import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container : {
        flexDirection : "column",
        justifyContent: 'space-between'
    },
    
    title: { 
        fontSize: 15,
        fontWeight: "bold", 
        textAlign: "center", 
        color: "#FFFFFF",
        paddingTop: 10
    },

    value: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      color: "#FFFFFF" 
      
    },
    updateAt: {
       fontSize: 10,
       textAlign: "center",
       color: "#FFFFFF" ,
       paddingBottom: 10 
    }
});
