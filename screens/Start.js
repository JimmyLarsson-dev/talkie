import LogoComp from "../components/LogoComp";
import {Pressable, StyleSheet, Text} from "react-native";

export default function Start({navigation}) {

    const goOnThen = () => {
        navigation.navigate("Home")
    }

    return(
        <Pressable onPress={goOnThen} style={s.pressable}>
            <LogoComp
                w={336}
                h={112}
            />
            <Text style={{fontSize:50}}>Enter Talkie</Text>

        </Pressable>

    )
}

const s = StyleSheet.create({
    pressable: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    }
})