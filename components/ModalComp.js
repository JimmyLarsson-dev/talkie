import {StyleSheet, Modal, Text, View} from "react-native";
import {useState} from "react";
import ButtonComp from "./ButtonComp";
import LogoComp from "./LogoComp";

export default function ModalComp() {
    const [modalVisible, setModalVisible] = useState(true)

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible)
            }}
        >
            <View style={styles.borderView}>
                <LogoComp
                    w={168}
                    h={56}
                />
                <View style={styles.viewStyle}>
                    <Text style={styles.headLine}>Welcome to Talkie!</Text>
                    <Text style={styles.AboutText}>
                        This app communicates with OpenAI. There are two setting available to the user: Max Tokens and Temperature.{'\n'}{'\n'}
                        <Text style={{fontWeight: "bold"}}>Max Tokens</Text> regulate the character length of the AIs response, and is set to 100 as default. The higher the value, the longer the response. Please note however, that longer replies costs more money. Experiment with some caution.{'\n'}{'\n'}
                        <Text style={{fontWeight: "bold"}}>Temperature</Text> regulates the variation in replies. Setting it to 0.0 makes it so that repeating a question to the AI will always generate the exact same response, setting it to 2 will generate more randomness.{'\n'}{'\n'}
                        On a side note, the background image is created by an AI, and depicts a robot jellyfish. The logo is an AIs attempt at creating a logo with the word "Talkie".
                    </Text>
                    <ButtonComp
                        buttonPressed={() => {
                            setModalVisible(!modalVisible)
                        }}
                        buttonText={"Close"}
                    >
                    </ButtonComp>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    headLine: {
        marginTop:15,
        marginLeft: 15,
    },
    pressable: {
        backgroundColor: "#b48888",
        margin: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        flex:1,
    },
    viewStyle: {
        backgroundColor: "#b48888",
        width: "80%",
        height: "80%",
        borderRadius: 15,
    },
    borderView: {
        backgroundColor: "rgba(0,0,0,0.6)",
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    AboutText: {
        margin: 15,
        flex: 6,
    },
    elevation: {
        elevation: 5,
        shadowColor: '#000000',
    },
})