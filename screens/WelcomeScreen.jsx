import { View, Text, StyleSheet, Pressable, Image, useWindowDimensions } from "react-native"
import { useFonts } from "expo-font"

const WelcomeScreen = ({ navigation }) => {
    const [fontsLoaded, fontError] = useFonts({
        "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf")
    })
    const [fontsLoaded2, fontError2] = useFonts({
        "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf")
    })
    const { fontScale } = useWindowDimensions()
    const styles = StyleSheet.create({
        welcome: {
            width: "100%",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white"
        },
        brand: {
            width: "auto",
            flex: 1,
            flexDirection: "column",
            gap: 40,
            alignItems: "center",
            justifyContent: "center",
            justifySelf: "center",
            alignSelf: "center"
        },
        logo: {
            width: 120,
            height: 210,
            resizeMode: "stretch"
        },
        slogan: {
            fontFamily: "Inter-SemiBold",
            fontSize: 20 / fontScale,
            textAlign: "center",
            color: "black"
        },
        ctaContainer: {
            width: "100%",
            flex: 1,
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingLeft: 28,
            paddingRight: 28,
            justifySelf: "bottom",
            alignBottom: 48,
            justifySelf: "bottom"
        },
        cta: {
            width: "100%",
            height: "auto",
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 8,
            paddingBottom: 8,
            backgroundColor: "#3e524b",
            marginBottom: 48
        },
        ctaLabel: {
            fontFamily: "Inter-Regular",
            fontSize: 14 / fontScale,
            textAlign: "center",
            color: "white"
        },
        divisionHelper: {
            flex: 1
        }
    })

    return (
        <View style={styles.welcome}>
            <View style={styles.divisionHelper}></View>
            <View style={styles.brand}>
                <Image
                    style={styles.logo}
                    source={require("../assets/little-lemon-logo.png")}
                />
                <Text style={styles.slogan}>
                    Little Lemon, your local
                    {"\n"}
                    Mediterranean Bistro
                </Text>
            </View>
            <View style={styles.ctaContainer}>
                <Pressable
                    style={styles.cta}
                    onPress={() => {
                        navigation.navigate("Subscription")
                    }}
                >
                    <Text style={styles.ctaLabel}>Newsletter</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default WelcomeScreen
