import {StyleSheet,TouchableOpacity,Text} from "react-native";
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function AppButton({text}){
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}


let styles=StyleSheet.create({
    button:{
        elevation: 8,
        backgroundColor: "#000000",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 12,
        width:"80%",
        marginVertical:12
    },
    buttonText:{
        fontSize: 17,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});