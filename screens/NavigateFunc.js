import Home from "./Home";
import ChatScreen from "./ChatScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Options from "./Options";
import ChatLog from "./ChatLog";
import Start from "./Start";

function NavigateFunc() {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"Start"}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#f6d2bb"
                    },
                    headerTintColor: "#962d0f",
                    headerTitleStyle: {
                        fontSize: 30,
                        color: "#962d0f",
                        fontWeight: "bold"
                    },
                    headerTitleAlign: "center"
                }}>
                <Stack.Screen
                    name={"Start"}
                    component={Start}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={"Home"}
                    component={Home}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={"ChatScreen"}
                    component={ChatScreen}
                />
                <Stack.Screen
                    name={"Options"}
                    component={Options}
                />
                <Stack.Screen
                    name={"ChatLog"}
                    component={ChatLog}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default NavigateFunc
