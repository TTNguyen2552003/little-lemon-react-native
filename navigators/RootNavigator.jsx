import { createNativeStackNavigator } from "@react-navigation/native-stack"
import WelcomeScreen from "../screens/WelcomeScreen.jsx"
import SubscribeScreen from "../screens/SubscribeScreen.jsx"

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center"
            }}
        >
            <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
            />
            <Stack.Screen
                name="Subscription"
                component={SubscribeScreen}
            />
        </Stack.Navigator>
    )
}

export default RootNavigator
