import React from "react"
import { View, Text, StyleSheet, Image, TextInput, Alert, Pressable, useWindowDimensions } from "react-native"
import { useFonts } from "expo-font"
import { validateEmail } from "../utils/index.js"

const SubscribeScreen = () => {
    let [email, setEmail] = React.useState("")
    let [clickable, setClickable] = React.useState(false)
    let [showNotice, setShowNotice] = React.useState(false)

    const handleChangeEmail = (text) => {
        if (text != "") {
            setShowNotice(!validateEmail(text))
        } else {
            setShowNotice(false)
        }
        setEmail(text)
        setClickable(validateEmail(text))
    }
    const [fontsLoaded, fontError] = useFonts({
        "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf")
    })
    const { fontScale } = useWindowDimensions()
    const styles = StyleSheet.create({
        subscribe: {
            width: "100%",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "white"
        },
        subscriptionRequestContainer: {
            width: "100%",
            height: "auto",
            flexDirection: "column",
            gap: 28,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 28,
            paddingRight: 28,
            marginTop: 40
        },
        logoGray: {
            width: 80,
            height: 92,
            resizeMode: "stretch"
        },
        request: {
            fontFamily: "Inter-Regular",
            fontSize: 20 / fontScale,
            textAlign: "center",
            color: "black"
        },
        form: {
            width: "100%",
            height: "auto",
            flexDirection: "column",
            gap: 24,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 28,
            paddingRight: 28,
            marginTop: 48
        },
        emailField: {
            width: "100%",
            height: "auto",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 8
        },
        fieldLabel: {
            fontFamily: "Inter-Regular",
            fontSize: 14,
            color: "black"
        },
        textInput: {
            width: "100%",
            height: "auto",
            borderRadius: 8,
            paddingLeft: 12,
            paddingTop: 8,
            paddingBottom: 8,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "black"
        },
        notice: {
            fontFamily: "Inter-Regular",
            fontSize: 10,
            color: "tomato",
            display: showNotice ? "flex" : "none"
        },
        cta: {
            width: "100%",
            height: "auto",
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 8,
            paddingBottom: 8,
            justifyContent: "center",
            backgroundColor: clickable ? "#3E524B" : "gray"
        },
        ctaLabel: {
            fontFamily: "Inter-Regular",
            fontSize: 14 / fontScale,
            textAlign: "center",
            color: "white"
        }
    })

    return (
        <View style={styles.subscribe}>
            <View style={styles.subscriptionRequestContainer}>
                <Image
                    style={styles.logoGray}
                    source={require("../assets/little-lemon-logo-grey.png")}
                />
                <Text style={styles.request}>Subscribe to our newsletter for our latest delicious recipes!</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.emailField}>
                    <Text style={styles.fieldLabel}>Email</Text>
                    <TextInput
                        style={styles.textInput}
                        value={email}
                        onChangeText={handleChangeEmail}
                        cursorColor={"black"}
                        maxLength={250}
                        multiline={false}
                        placeholder="Ex: example@email.com"
                        placeholderTextColor={"gray"}
                        allowFontScaling={false}
                        returnKeyType="done"
                    />
                    <Text style={styles.notice}>*Email is invalid</Text>
                </View>
                <Pressable
                    style={styles.cta}
                    onPress={() => {
                        Alert.alert(
                            "",
                            "Thanks for subscribing, stay tuned!",
                            [
                                {
                                    text: "Ok",
                                    onPress: () => {
                                        handleChangeEmail("")
                                    },
                                    style: "default"
                                }
                            ],
                            {
                                cancelable: false
                            }
                        )
                    }}
                >
                    <Text style={styles.ctaLabel}>Subscribe</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SubscribeScreen
