import { View, Text, ImageBackground, Keyboard, ScrollView } from 'react-native';
import { Card, List, ListItem, Layout, ButtonGroup, Input, Button } from "@ui-kitten/components";
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { goBack } from '../utilities/RootNavigator';
import { useDispatch, useSelector } from "react-redux";
import { registrarUsuario } from '../redux/actions/userAction';

var username = "";
var password = "";
var password2 = "";
var name = "";
var dispatch = null;

const doRegister = () => {
    dispatch(registrarUsuario(username, password, password2, name));
}

export default function Register() {
    dispatch = useDispatch();
    return (
        <ImageBackground source={require("../assets/images/bg.png")} style={{ flex: 1 }}>
            <SafeAreaView onTouchStart={(ev) => Keyboard.dismiss()} style={{ padding: 30, justifyContent: "center", flex: 1 }}>
                <Card style={{ backgroundColor: "rgba(255, 255, 255, 0.4)", borderWidth: 1, borderColor: "#FFFFFF", borderRadius: 10 }}>
                    <Text style={{ fontFamily: "PoppinsBold", fontStyle: "normal", fontWeight: "700", fontSize: 30, lineHeight: 45, color: "white", textAlign: "center", marginTop: 34, marginBottom: 31 }}>REGISTRARSE</Text>
                    <ScrollView>
                        <View>
                            <View style={{ paddingHorizontal: 20 }}>
                                <Text style={{ fontFamily: "Poppins", color: "white", fontWeight: "300", fontSize: 15, lineHeight: 22 }}>USUARIO</Text>
                                <Input onChangeText={(text) => { username = text; }} style={{ borderColor: "white", borderWidth: 1, borderRadius: 50, height: 46, backgroundColor: "transparent", marginTop: 3 }}></Input>
                            </View>
                            <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
                                <Text style={{ fontFamily: "Poppins", color: "white", fontWeight: "300", fontSize: 15, lineHeight: 22 }}>NOMBRE</Text>
                                <Input onChangeText={(text) => { name = text; }} style={{ borderColor: "white", borderWidth: 1, borderRadius: 50, height: 46, backgroundColor: "transparent", marginTop: 3 }}></Input>
                            </View>
                            <View style={{ marginTop: 15, paddingHorizontal: 20 }}>
                                <Text style={{ fontFamily: "Poppins", color: "white", fontWeight: "300", fontSize: 15, lineHeight: 22 }}>CONTRASEÑA</Text>
                                <Input onChangeText={(text) => { password = text; }} secureTextEntry={true} style={{ borderColor: "white", borderWidth: 1, borderRadius: 50, height: 46, backgroundColor: "transparent", marginTop: 3 }}></Input>
                            </View>
                            <View style={{ marginTop: 15, paddingHorizontal: 20 }}>
                                <Text style={{ fontFamily: "Poppins", color: "white", fontWeight: "300", fontSize: 15, lineHeight: 22 }}>CONFIRMAR CONTRASEÑA</Text>
                                <Input onChangeText={(text) => { password2 = text; }} secureTextEntry={true} style={{ borderColor: "white", borderWidth: 1, borderRadius: 50, height: 46, backgroundColor: "transparent", marginTop: 3 }}></Input>
                            </View>
                        </View>
                    </ScrollView>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, marginTop: 20, marginBottom: 10 }}>
                        <TouchableOpacity activeOpacity={0.4} onPress={goBack}>
                            <Button style={{ fontFamily: "Poppins", borderWidth: 2, borderColor: "white", height: 46, borderRadius: 50, backgroundColor: "white" }}>
                                {evaProps => <Text style={{ color: "#9D94FF" }}>VOLVER</Text>}
                            </Button>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.4} onPress={doRegister}>
                            <Button style={{ fontFamily: "Poppins", borderWidth: 2, borderColor: "white", height: 46, borderRadius: 50, backgroundColor: "transparent" }}>
                                {evaProps => <Text style={{ color: "white" }}>REGISTRARSE</Text>}
                            </Button>
                        </TouchableOpacity>
                    </View>
                </Card>
            </SafeAreaView>
        </ImageBackground>
    );
}