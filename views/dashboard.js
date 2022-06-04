import { List, Divider } from '@ui-kitten/components';
import { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import ActionConstants from '../redux/reduxConstants';
import { Shadow } from 'react-native-shadow-2';
import { FontAwesome } from "@expo/vector-icons";
import { PrimaryColor, SecondaryColor } from '../utilities/ColorPalette';


export default function Dashboard() {

    const dispatch = useDispatch();

    // contextos
    const usuariosContext = useSelector(store => store.usuarios);


    // test data
    const data = new Array(8).fill({
        taskName: "Recoger basura",
        timeLeft: "3 días"
    });

    const renderItem = ({ item, index }) => (
        <TouchableOpacity>
            <View style={{ display: "flex", flexDirection: "row", marginHorizontal: 30, marginVertical: 5 }}>
                <View style={{ flexBasis: "80%" }}>
                    <Text style={{ fontSize: 18, color: "gray" }}>{item.taskName}</Text>
                </View>
                <View style={{ flexBasis: "20%" }}>
                    <Text style={{ color: "orange" }}>{item.timeLeft}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ padding: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                <TouchableOpacity>
                    <FontAwesome name="bell" size={28} style={{ marginRight: 10, color: "#f7db14" }}></FontAwesome>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 22, marginBottom: 20 }}>Bienvenido {usuariosContext.usuario.name}</Text>

            <Shadow>
                <List ItemSeparatorComponent={Divider} style={{ backgroundColor: "transparent", borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5, maxHeight: 200 }} data={data} renderItem={renderItem} />
            </Shadow>

        </SafeAreaView>
    );
}