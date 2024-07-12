import {ImageBackground, StyleSheet} from "react-native";
import ModalComp from "../components/ModalComp";
import {useState} from "react";
import ButtonComp from "../components/ButtonComp";

export default function Home({navigation}) {

    const [modalVisible, setModalVisible] = useState(false)
    const goToChat = () => {
        navigation.navigate("ChatScreen")
    }
    const goToOptions = () => {
        navigation.navigate("Options")
    }
    function showAbout () {
        setModalVisible(!modalVisible)
    }

    return (
        <ImageBackground source={require ('../assets/robotJellyfish_small.png')} resizeMode="cover" style={styles.backGround}>
            <ButtonComp
                buttonText={"Talk to AI"}
                buttonPressed={goToChat}/>
            <ButtonComp
                buttonText={"Options"}
                buttonPressed={goToOptions}/>
            <ButtonComp
                buttonText={"About app"}
                buttonPressed={showAbout}/>
            {modalVisible ? <ModalComp/> : <></>}
         </ImageBackground>
    )
}

const styles = StyleSheet.create({
      backGround: {
        flex: 1,
        width: '100%',
        justifyContent: "center",
    },
    pressable: {
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
    modal: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
})