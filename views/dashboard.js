import { List, Divider, ListItem } from '@ui-kitten/components';
import { useEffect, useLayoutEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import ActionConstants from '../redux/reduxConstants';
import { Shadow } from 'react-native-shadow-2';
import { FontAwesome } from "@expo/vector-icons";
import { PrimaryColor, SecondaryColor } from '../utilities/ColorPalette';
import InsetShadow from 'react-native-inset-shadow';
import { toggleDrawer } from '../utilities/RootNavigator';
import { LinearGradient } from 'expo-linear-gradient';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';


export default function Dashboard() {
    
    const dispatch = useDispatch();

    // contextos
    const usuariosContext = useSelector(store => store.usuarios);
    debugger;
    // test data
    const data = new Array(8).fill({
        taskName: "Recoger basura",
        timeLeft: "3 días"
    });

    const calculateTimeLeft = (date) => {
        const today = new Date();
        const taskDate = new Date(date);
        const diff = today.getTime() - taskDate.getTime();
        const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        const diffHours = Math.ceil(diff / (1000 * 3600));
        const diffMinutes = Math.ceil(diff / (1000 * 60));

        if (diffHours > 24) {
            return "Quedan " + diffDays + " días";
        }
        else if (diffMinutes > 60) {
            return "Quedan " + diffHours + " horas";
        }
        else if (diffMinutes >= 0) {
            return "Quedan " + diffMinutes + " minutos";
        }
        else {
            return "Fuera de plazo";
        }
    }

    const getTimeColor = (date) => {
        const today = new Date();
        const taskDate = new Date(date);
        const diff = today.getTime() - taskDate.getTime();
        const diffHours = diff / (1000 * 3600);
        if (diffHours > 72) {
            return "green";
        }
        else if (diffHours > 24) {
            return "orange";
        }
        else {
            return "red";
        }
    }

    const getTaskIcon = (finishedOn, cancelledOn) => {
        if (finishedOn != null) {
            return <Image style={{ width: 30, height: 30, resizeMode: "contain", alignSelf: "center", marginRight: 5 }} source={require("../assets/images/circulo.png")} ></Image>
        }
        else if (cancelledOn != null) {
            return <Image style={{ width: 30, height: 30, resizeMode: "contain", alignSelf: "center", marginRight: 5 }} source={require("../assets/images/circulo.png")} ></Image>
        }
        else {
            return <Image style={{ width: 30, height: 30, resizeMode: "contain", alignSelf: "center", marginRight: 5 }} source={require("../assets/images/circuloCheck.png")} ></Image>
        }
    }

    const renderItem = ({ item, index }) => (
        <View style={{ marginHorizontal: 30, marginVertical: 5, width: "100%", flexDirection: "row" }}>
            {getTaskIcon(item.finishedOn, item.cancelledOn)}
            <View>
                <Text style={{ fontSize: 18, color: "gray" }}>{item.name}</Text>
                <Text style={{ color: getTimeColor(item.dueTo) }}>{calculateTimeLeft(item.dueTo)}</Text>
            </View>
        </View>
    );

    return (
        <ImageBackground source={require("../assets/images/bgMain.png")} style={{ flex: 1 }}>
            <SafeAreaView style={{ padding: 10, flex: 1 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>
                    <TouchableOpacity hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }} onPress={() => {
                        toggleDrawer();
                    }}>
                        <Image source={require("../assets/images/burgir.png")} style={{ marginLeft: 10, width: 40, height: 40, resizeMode: "contain" }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("../assets/images/bell.png")} style={{ marginRight: 10, width: 40, height: 40, resizeMode: "contain" }} />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 22, marginBottom: 20, marginLeft: 10, color: "#444444", fontFamily: "PoppinsBold", letterSpacing: -0.33333, fontWeight: "700" }}>BIENVENIDO, {usuariosContext.usuario.name}</Text>
                <InsetShadow shadowColor="#000000" shadowOpacity={0.5} shadowOffset={4} shadowRadius={4} containerStyle={{ backgroundColor: "rgba(255, 255, 255, 0.4)", borderWidth: 1, borderColor: "#FFFFFF", height: 250, marginLeft: 30, marginRight: 30, borderRadius: 10, padding: 0 }}>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ color: "#FFFFFF", textShadowColor: "rgba(0, 0, 0, 0.1)", textShadowRadius: 4, textShadowOffset: { height: 4, width: 0 }, fontSize: 22, fontFamily: "PoppinsBold", lineHeight: 33, fontWeight: "700", marginLeft: 5, marginTop: 10 }}>MIS TAREAS</Text>
                        <List style={{ backgroundColor: "transparent", paddingHorizontal: 10, paddingVertical: 5, height: "100%" }} data={usuariosContext.usuario.assigned_Tasks} renderItem={renderItem} />
                    </View>
                </InsetShadow>
            </SafeAreaView>
        </ImageBackground>
    );
}