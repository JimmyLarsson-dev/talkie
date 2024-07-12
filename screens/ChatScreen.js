import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView, Pressable
} from "react-native";
import {useState} from "react";
import {talkToAi} from "../components/api";
import ButtonComp from "../components/ButtonComp";
import ChatLog from "./ChatLog";
import WaitingComp from "../components/WaitingComp";

function ChatScreen({navigation}) {

    const [userInput, setUserInput] = useState("");
    const [answer, setAnswer] = useState("")
    const [aiReply, setAiReply] = useState(styles.noReplyYet)
    const [userSaysHistory, setUserSaysHistory] = useState([])
    const [aiSaysHistory, setAiSaysHistory] = useState([])
    const [showWaiting, setShowWaiting] = useState(false)


    async function sendItToAi() {
        setUserSaysHistory([...userSaysHistory, userInput])
        Keyboard.dismiss()
        setShowWaiting(true)

        await talkToAi(userInput)
            .then((response) => {

                setShowWaiting(false)
                setAiReply(styles.aiReplyText)
                setAnswer(response.data)
                setAiSaysHistory([...aiSaysHistory, response.data])
            })
    }

    const goToChatLog = () => {
        navigation.navigate('ChatLog', {
            userSaysHistory: userSaysHistory,
            aiSaysHistory: aiSaysHistory
        })
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
        >
            <ImageBackground source={require('../assets/robotJellyfish_small.png')} resizeMode="cover"
                             style={styles.backGround}>

                <Text style={styles.infoText}>Put your question to the AI:</Text>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder={"type here..."}
                        style={styles.input}
                        multiline={true}
                        onChangeText={(value) => setUserInput(value)}
                    />
                    <Pressable style={styles.pressable} onPress={sendItToAi}>
                        <Text style={styles.askItText}>Go!</Text>
                    </Pressable>
                </View>
                {showWaiting ? <View style={styles.waitView}>
                        <WaitingComp/>
                    </View> :
                    <ScrollView style={styles.scrollView}>
                        <Text style={aiReply}>{answer}</Text>
                    </ScrollView>
                }
                <ButtonComp
                    buttonText={"Chat log"}
                    buttonPressed={goToChatLog}
                />
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    backGround: {
        flex: 1,
    },
    input: {
        backgroundColor: "rgba(255,255,255,0.68)",
        height: 90,
        marginTop: 30,
        width: "70%",
        borderRadius: 20,
        paddingLeft: 10,
        marginRight: 15,
        fontSize: 20,
    },
    infoText: {
        paddingLeft: 10,
        marginTop: 40,
        marginLeft: 30,
        marginRight: 30,
        color: "white",
        fontSize: 20,
        backgroundColor: "rgba(169,95,95,0.72)",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "rgba(65,36,36,0.72)",
    },
    aiReplyText: {
        paddingLeft: 10,
        borderRadius: 20,
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        color: "white",
        fontSize: 20,
        backgroundColor: "rgba(169,95,95,0.72)",
    },
    askItText: {
        fontSize: 20,
        color: "white",
    },
    scrollView: {
        marginBottom: 15,
    },
    inputView: {
        flexDirection: "row",
        justifyContent: "center"
    },
    pressable: {
        backgroundColor: "#a95f5f",
        marginTop: 55,
        marginBottom: 10,
        height: 40,
        width: 70,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 30,
    },
    noReplyYet: {
        display: "none",
    },
    waitView: {
        marginBottom: 50,
        borderRadius: 10,
    }

})