import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, Image, Keyboard, ImageBackground } from "react-native";
import { Card, List, ListItem, Layout, ButtonGroup, Input, Button } from "@ui-kitten/components";
import { navigateTo } from "../utilities/RootNavigator";
import { PrimaryColor, SecondaryColor, TertiaryColor, QuinaryColor } from "../utilities/ColorPalette";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { autenticarUsuario } from "../redux/actions/userAction";
import { showMessage } from "react-native-flash-message";
import { Shadow } from 'react-native-shadow-2';
import { TouchableOpacity } from "react-native-gesture-handler";




const doLogin = () => {
    dispatch(autenticarUsuario(username, password));
}

const doRegister = () => {
    navigateTo("Register");
}

var username = "";
var password = "";
var dispatch = null;
var session = null;

export default function Login() {
    dispatch = useDispatch();
    
    return (
            <ImageBackground source={require("../assets/images/bg.png")} style={{ flex: 1 }}>
                <SafeAreaView onTouchStart={ (ev) => Keyboard.dismiss() } style={{ padding: 30, justifyContent: "center", flex: 1 }}>
                    <Card style={{ backgroundColor: "rgba(255, 255, 255, 0.4)", borderWidth: 1, borderColor: "#FFFFFF", borderRadius: 10 }}>
                        <Text style={{ fontFamily: "PoppinsBold", fontStyle: "normal", fontWeight: "700", fontSize: 30, lineHeight: 45, color: "white", textAlign: "center", marginTop: 34, marginBottom: 31 }}>IDENTIFÍCATE</Text>

                        <View style={{ paddingHorizontal: 20 }}>
                            <Text style={{ fontFamily: "Poppins", color: "white", fontWeight: "300", fontSize: 15, lineHeight: 22 }}>USUARIO</Text>
                            <Input onChangeText={(text) => { username = text; }} style={{ borderColor: "white", borderWidth: 1, borderRadius: 50, height: 46, backgroundColor: "transparent", marginTop: 3 }}></Input>
                        </View>
                        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                            <Text style={{ fontFamily: "Poppins", color: "white", fontWeight: "300", fontSize: 15, lineHeight: 22 }}>CONTRASEÑA</Text>
                            <Input onChangeText={(text) => { password = text; }} secureTextEntry={true} style={{ borderColor: "white", borderWidth: 1, borderRadius: 50, height: 46, backgroundColor: "transparent", marginTop: 3 }}></Input>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, marginTop: 20, marginBottom: 10 }}>
                            
                                <Button activeOpacity={0.4} onPress={doLogin} style={{ fontFamily: "Poppins", borderWidth: 2, borderColor: "white", height: 46, borderRadius: 50, backgroundColor: "white" }}>
                                    {evaProps => <Text style={{ color: "#9D94FF" }}>ACCEDER</Text>}
                                </Button>
                            
                            
                                <Button activeOpacity={0.4} onPress={doRegister} style={{ fontFamily: "Poppins", borderWidth: 2, borderColor: "white", height: 46, borderRadius: 50, backgroundColor: "transparent" }}>
                                    {evaProps => <Text style={{ color: "white" }}>REGISTRARSE</Text>}
                                </Button>
                            
                        </View>
                    </Card>
                </SafeAreaView>
            </ImageBackground>
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