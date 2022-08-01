import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, SafeAreaView, Button, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;


export default function Signup({ navigation }) {

    const [nameVal, setNameVal] = useState("");
    const [emailVal, setEmailVal] = useState("");
    const [passwordVal, setPasswordVal] = useState("");

    return (
        <View style={styles.container}>

            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <View style={styles.content}>
                    <Text style={[{ fontSize: 2.3 * c.REM }]}>Sign Up</Text>

                    <TextInput
                        style={styles.input} placeholder="name"
                        value={nameVal}
                        onChangeText={value => setNameVal(value)}
                    />
                    <TextInput
                        style={styles.input} placeholder="email"
                        value={emailVal}
                        onChangeText={value => setEmailVal(value)}
                    />
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="password"
                        value={passwordVal}
                        onChangeText={(value) => setPasswordVal(value)}
                    />
                    <Pressable
                        disabled={!(nameVal.length > 3 && passwordVal.length > 3 && emailVal.includes("@") && emailVal.includes(".") && emailVal.length > 5)}
                        style={nameVal.length > 3 && passwordVal.length > 3 && emailVal.includes("@") && emailVal.includes(".") && emailVal.length > 5 ? styles.signupBtn : styles.signupBtnDisable}
                        onPress={() => {
                            navigation.navigate("LogIn")

                        }}
                    ><Text style={{ color: "#fff", fontSize: 18 }}> Sign Up</Text></Pressable>

                    <Text style={{ marginTop: 30, fontSize: 20, color: "#62a1fe" }} onPress={() => {
                        navigation.navigate("LogIn")
                    }} >go to Log In</Text>
                </View>
                <StatusBar style="auto" />
            </KeyboardAvoidingView>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: '#FFF',
        top: 0,
    },
    content: {
        flex: 1,
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "colom",
        alignItems: "center",
        justifyContent: "center",
        gap: "90px"
    },
    input: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#ced4da",
        width: 350,
        height: 42,
        top: 20,
        marginTop: 10,
        padding: 7,
        borderRadius: 10
    },
    signupBtn: {
        color: "red",
        marginTop: 30,
        borderRadius: 10,
        width: 350,
        height: 42,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0d6efd",
    },
    signupBtnDisable: {
        color: "red",
        marginTop: 30,
        borderRadius: 10,
        width: 350,
        height: 42,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#62a1fe",
        opacity: 1
    }
});
