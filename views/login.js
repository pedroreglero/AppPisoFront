import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, Image, Keyboard } from "react-native";
import { Card, List, ListItem, Button, Layout, ButtonGroup, Input } from "@ui-kitten/components";
import { navigateTo } from "../utilities/RootNavigator";
import { PrimaryColor, SecondaryColor, TertiaryColor, QuinaryColor } from "../utilities/ColorPalette";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { autenticarUsuario } from "../redux/actions/userAction";
import { showMessage } from "react-native-flash-message";
import { Shadow } from 'react-native-shadow-2';




function LoginHeader() {
    return (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <FontAwesome style={{ alignSelf: "center" }} size={22} name="user-circle"></FontAwesome>
            <Text style={{ color: "black", fontSize: 26, textAlign: "center", margin: 10, marginVertical: 15, fontFamily: "CerealBold" }}>Identifícate</Text>
        </View>
    );
}

function LoginFooter() {
    return (
        <View style={{ flexDirection: "row", justifyContent: "flex-end", flex: 1, alignItems: "flex-end", paddingBottom: 15, paddingRight: 15 }}>
            <Button style={{ marginHorizontal: 5 }} size="medium" status="primary" onPress={doLogin}>Acceder</Button>
            <Button style={{ marginHorizontal: 5 }} size="medium" status="basic">Registrarse</Button>
        </View>
    );
}



const doLogin = () => {
    dispatch(autenticarUsuario(username, password));
}

var username = "";
var password = "";
var dispatch = null;
var session = null;

export default function Login() {
    dispatch = useDispatch();

    return (
        <LinearGradient onTouchStart={(ev) => { Keyboard.dismiss(); }} style={{ flex: 1, backgroundColor: PrimaryColor() }} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={[PrimaryColor(), SecondaryColor()]}>
            <SafeAreaView style={{ padding: 30, justifyContent: "center", flex: 1 }}>
                <Shadow distance={50} radius={10} containerViewStyle={{justifyContent: "center"}} viewStyle={{ width: "100%" }}>
                    <Card disabled status="basic" style={{ margin: 2, height: 350 }} footer={LoginFooter} header={LoginHeader}>
                        <View>
                            <View style={{ marginBottom: 15 }}>
                                <Text style={{ marginBottom: 5 }}>Usuario</Text>
                                <Input onChangeText={(text) => { username = text; }} accessoryLeft={() => <FontAwesome name="user" size={16} />}></Input>
                            </View>
                            <View>
                                <Text style={{ marginBottom: 5 }}>Contraseña</Text>
                                <Input onChangeText={(text) => { password = text; }} secureTextEntry={true} accessoryLeft={() => <FontAwesome name="lock" size={16} />}></Input>
                            </View>
                        </View>
                    </Card>
                </Shadow>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        margin: 2,
    },
});