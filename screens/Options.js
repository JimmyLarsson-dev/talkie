import {Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {Slider} from "@miblanchard/react-native-slider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useState} from "react";
import ButtonComp from "../components/ButtonComp";
import ModalComp from "../components/ModalComp";
import LogoComp from "../components/LogoComp";

function Options() {

    const [temp, setTemp] = useState(0.2)
    const [maxTokens, setMaxTokens] = useState(100)
    const [modalVisible, setModalVisible] = useState(false)
    const [showButton, setShowButton] = useState(true)

    const setTemperature = async (temperature) => {
        setTemp(temperature)
        await AsyncStorage.setItem("temperature", temperature.toString())
    }

    const setTheTokens = async () => {
        await AsyncStorage.setItem("maxTokens", maxTokens.toString())
    }

    function showTheModal()  {
        setModalVisible(!modalVisible)
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                setShowButton(true)
                Keyboard.dismiss()
            }}
        >
            <View style={s.body}>
                <LogoComp
                    w={168}
                    h={56}
                />
                <Text style={s.topText}>Make your choices for how to talk to the AI:</Text>
                <View style={s.sliderView}>
                    <Text style={s.otherText}>Set temperature:</Text>
                    <Slider
                        value={0.2}
                        minimumValue={0}
                        maximumValue={2}
                        step={0.1}
                        thumbStyle={s.thumb}
                        trackStyle={s.track}
                        trackClickable={true}
                        onValueChange={(value) => setTemperature(value[0])}
                    >
                    </Slider>

                    <Text style={s.otherText}>{temp} (default: 0.2)</Text>
                </View>
                <View style={s.textInputView}>
                    <Text style={s.otherText}>Set max tokens (1-2000):</Text>
                    <TextInput
                        onChangeText={val => setMaxTokens(parseInt(val))}
                        style={s.textInput}
                        keyboardType={"numeric"}
                        onFocus={() => setShowButton(false)}
                    />
                    <Text style={s.otherText}>{maxTokens} (default: 100)</Text>
                    <Button
                        title={"set"}
                        onPress={setTheTokens}
                    />
                </View>
                <View style={s.buttonView}>
                    {showButton ? <ButtonComp
                        buttonText={"about/help"}
                        buttonPressed={() => showTheModal()}
                    /> : <></>}
                </View>
                {modalVisible ? <ModalComp/> : <></>}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Options

const s = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
    },
    topText: {
        margin: 15,
        // marginTop: 30,
        marginBottom: 30,
        fontSize: 25,
    },
    sliderView: {
        marginTop: 40,
        width: "70%",
        flex:3
    },
    otherText: {
        fontSize: 20,
    },
    thumb: {
        backgroundColor: "#857f3e"
    },
    track: {
        backgroundColor: "silver"
    },
    textInputView: {
        // marginTop: 60,
        flex: 3,
        width: "70%",
    },
    textInput: {
        borderWidth: 2,
        borderColor: "silver",
        width: "100%",
        marginTop: 10,
        paddingLeft: 15,
    },
    buttonView: {
        width: "100%"
    },

})