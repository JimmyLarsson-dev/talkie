import {StyleSheet, Text, TouchableHighlight} from "react-native";

export default function ButtonComp({buttonText, buttonPressed}) {

    return(
        <TouchableHighlight
            onPress={buttonPressed}
            style={s.button}
            activeOpacity={0.5}
            underlayColor={"#f3c0c0"}
        >
            <Text style={s.buttonText}>{buttonText}</Text>
        </TouchableHighlight>
    )
}

const s = StyleSheet.create({
    button: {
        backgroundColor: "#a95f5f",
        marginLeft: 100,
        marginRight: 100,
        marginTop: 30,
        marginBottom: 30,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 30,
    },

})