import {StyleSheet, Text, ScrollView} from "react-native";

export default function ChatLog({route}) {
    const {userSaysHistory, aiSaysHistory } = route.params

    return(
        <ScrollView>
            {userSaysHistory.map((userSaid) => (
                <Text
                    key={userSaysHistory.indexOf(userSaid)}
                    style={styles.userList}
                > {userSaid} {'\n'}
                    <Text
                        key={userSaysHistory.indexOf(userSaid)+1000}
                        style={styles.aiList}
                    >
                        {aiSaysHistory[userSaysHistory.indexOf(userSaid)]}
                    </Text>
                </Text>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    userList: {
        marginTop: 5,
        fontWeight: "bold"
    },
    aiList: {
        marginTop: 5,
        fontWeight: "normal"
    }
})