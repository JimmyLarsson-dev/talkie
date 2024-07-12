import {StyleSheet, ActivityIndicator, View, Text} from "react-native";

export default function WaitingComp() {

    return (
        <View style={s.waitView}>
            <ActivityIndicator size="large" color="#a95f5f" style={ {marginTop:70}}/>
            <Text style={s.text}>just a second...</Text>
        </View>
    )
}

const s = StyleSheet.create({
    waitView: {
        alignSelf: "center",
        height: "80%",
        width: "80%",
        backgroundColor: "rgba(107,73,73,0.68)",
        alignItems: "center",
    },
    text: {
        fontSize: 30,

    }


})