import { List, Divider, ListItem } from '@ui-kitten/components';
import { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import ActionConstants from '../redux/reduxConstants';
import { Shadow } from 'react-native-shadow-2';
import { FontAwesome } from "@expo/vector-icons";
import { PrimaryColor, SecondaryColor } from '../utilities/ColorPalette';
import InsetShadow from 'react-native-inset-shadow';
import { toggleDrawer } from '../utilities/RootNavigator';


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
        const diff = Math.abs(today.getTime() - taskDate.getTime());
        const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        const diffHours = Math.ceil(diff / (1000 * 3600));
        const diffMinutes = Math.ceil(diff / (1000 * 60));

        if (diffHours > 24) {
            return "Quedan " + diffDays + " días";
        }
        else if (diffMinutes > 60) {
            return "Quedan " + diffHours + " horas";
        }
        else {
            return "Quedan " + diffMinutes + " minutos";
        }
    }

    const getTimeColor = (date) =>  {
        const today = new Date();
        const taskDate = new Date(date);
        const diff = Math.abs(today.getTime() - taskDate.getTime());
        const diffHours = diff / (1000 * 3600);
        if (diffHours > 72)  {
            return "green";
        }
        else if (diffHours > 24) {
            return "orange";
        }
        else {
            return "red";
        }
    }

    const renderItem = ({ item, index }) => (
        <View style={{ marginHorizontal: 30, marginVertical: 5, width: "100%", flexDirection: "row" }}>
            <FontAwesome name='list-alt' size={25} style={{ alignSelf: "center", marginRight: 20 }} />
            <View>
                <Text style={{ fontSize: 18, color: "gray" }}>{item.name}</Text>
                <Text style={{ color: getTimeColor(item.dueTo) }}>{calculateTimeLeft(item.dueTo)}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{ padding: 10 }}>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 15}}>
                <TouchableOpacity hitSlop={{bottom: 20, left: 20, right: 20, top: 20}} onPress={() => {
                    toggleDrawer();
                }}>
                    <FontAwesome name='bars' size={28} style={{marginLeft: 10}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="bell" size={28} style={{ marginRight: 10, color: "#f7db14" }}></FontAwesome>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 22, marginBottom: 20, marginLeft: 10 }}>Bienvenido {usuariosContext.usuario.name}</Text>
            <View style={{ marginLeft: 20 }}>
                <Text style={{ fontSize: 18, textDecorationLine: "underline", marginBottom: 5 }}>MIS TAREAS</Text>
                <List ItemSeparatorComponent={Divider} style={{ backgroundColor: "transparent", paddingHorizontal: 10, paddingVertical: 5, maxHeight: 180, minHeight: 180, height: 180 }} data={usuariosContext.usuario.assigned_Tasks} renderItem={renderItem} />
            </View>

        </SafeAreaView>
    );
}