import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, Image, TouchableOpacity, BackHandler } from "react-native";
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./dashboard";
import { FontAwesome } from "@expo/vector-icons";
import Ranking from "./ranking";
import Money from "./money";
import Groceries from "./groceries";
import { LinearGradient } from "expo-linear-gradient";
import { PrimaryColor, SecondaryColor } from '../utilities/ColorPalette';

const TabNavigator = createBottomTabNavigator();
const DrawerNavigator = createDrawerNavigator();

var plusShown = false;

function CustomTabBar({ state, descriptors, navigation, insets }) {
    return (
        <View style={{marginHorizontal: 20, marginBottom: insets.bottom > 0 ? 0 : 15}}>
            <View style={{ flexDirection: "row", backgroundColor: "#F8F8F8", justifyContent: "space-around", width: "100%", height: 66, borderWidth: 2, borderColor: "#FFFFFF", marginBottom: insets.bottom, borderRadius: 20, shadowColor: "rgba(0, 0, 0, 0.08)", shadowOffset: { height: 4, width: 0 }, shadowRadius: 4, shadowOpacity: 1 }}>
                <View style={{alignSelf: "center"}}>
                    <TouchableOpacity onPress={() => navigation.navigate({ name: "Dashboard" })}>
                        <View style={{ display: state.index == 0 ? "flex" : "none", backgroundColor: "#F8F8F8", position: "absolute", height: 55, width: 55, alignSelf: "center", top: -8, borderWidth: 2, borderColor: "#FFFFFF", borderRadius: 20, shadowColor: "#000000", shadowOffset: {height: 4}, shadowOpacity: 0.3, shadowRadius: 4}}>
                        </View>
                        <Image source={require("../assets/images/home.png")} style={{ width: 37, height: 37, resizeMode: "contain" }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{alignSelf: "center"}}>
                    <TouchableOpacity onPress={() => navigation.navigate({ name: "Ranking" })}>
                        <View style={{ display: state.index == 1 ? "flex" : "none", backgroundColor: "#F8F8F8", position: "absolute", height: 55, width: 55, alignSelf: "center", top: -8, borderWidth: 2, borderColor: "#FFFFFF", borderRadius: 20, shadowColor: "#000000", shadowOffset: {height: 4}, shadowOpacity: 0.3, shadowRadius: 4}}>
                        </View>
                        <Image source={require("../assets/images/ranking.png")} style={{ width: 37, height: 37, resizeMode: "contain" }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{alignSelf: "center"}}>
                    <TouchableOpacity onPress={() => {
                        if (plusShown) {

                        }
                        else {
                            
                            plusShown = true;
                        }
                    }}>
                        <View style={{ display: "none", backgroundColor: "#F8F8F8", position: "absolute", height: 55, width: 55, alignSelf: "center", top: -8, borderWidth: 2, borderColor: "#FFFFFF", borderRadius: 20, shadowColor: "#000000", shadowOffset: {height: 4}, shadowOpacity: 0.3, shadowRadius: 4}}>
                        </View>
                        <Image source={require("../assets/images/add.png")} style={{ width: 37, height: 37, resizeMode: "contain" }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{alignSelf: "center"}}>
                    <TouchableOpacity onPress={() => navigation.navigate({ name: "Money" })}>
                        <View style={{ display: state.index == 2 ? "flex" : "none", backgroundColor: "#F8F8F8", position: "absolute", height: 55, width: 55, alignSelf: "center", top: -8, borderWidth: 2, borderColor: "#FFFFFF", borderRadius: 20, shadowColor: "#000000", shadowOffset: {height: 4}, shadowOpacity: 0.3, shadowRadius: 4}}>
                        </View>
                        <Image source={require("../assets/images/compra.png")} style={{ width: 37, height: 37, resizeMode: "contain" }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{alignSelf: "center"}}>
                    <TouchableOpacity onPress={() => navigation.navigate({ name: "Groceries" })}>
                        <View style={{ display: state.index == 3 ? "flex" : "none", backgroundColor: "#F8F8F8", position: "absolute", height: 55, width: 55, alignSelf: "center", top: -8, borderWidth: 2, borderColor: "#FFFFFF", borderRadius: 20, shadowColor: "#000000", shadowOffset: {height: 4}, shadowOpacity: 0.3, shadowRadius: 4}}>
                        </View>
                        <Image source={require("../assets/images/dinero.png")} style={{ width: 37, height: 37, resizeMode: "contain" }}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

function MainTabs() {
    return (
        <TabNavigator.Navigator tabBar={CustomTabBar}>
            <TabNavigator.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false, title: "Inicio", tabBarIcon: (props) => { return <FontAwesome name="home" color={props.color} size={props.size} />; } }} />
            <TabNavigator.Screen name="Ranking" component={Ranking} options={{ headerShown: false, title: "Ranking", tabBarIcon: (props) => { return <FontAwesome name="trophy" color={props.color} size={props.size} />; } }} />
            <TabNavigator.Screen name="Money" component={Money} options={{ headerShown: false, title: "Dinero", tabBarIcon: (props) => { return <FontAwesome name="money" color={props.color} size={props.size} />; } }} />
            <TabNavigator.Screen name="Groceries" component={Groceries} options={{ headerShown: false, title: "Compras", tabBarIcon: (props) => { return <FontAwesome name="shopping-cart" color={props.color} size={props.size} />; } }} />
        </TabNavigator.Navigator>
    );
}

function Drawer() {
    return (
        <LinearGradient colors={[PrimaryColor(), PrimaryColor(), "white"]} style={{ flex: 1, padding: 10 }}>
            <SafeAreaView>
                <View>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image source={require("../assets/images/perfilTest.png")} style={{ width: 150, height: 150, borderRadius: 75, borderWidth: 4, borderColor: "white", shadowOffset: { height: 10 }, shadowOpacity: 0.3, shadowRadius: 5, shadowColor: "black" }} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default function Main() {
    const handleBackPress = () => {
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackPress);

        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
        };
    }, []);

    return (
        <DrawerNavigator.Navigator initialRouteName="Main2" backBehavior="none" drawerContent={Drawer}>
            <DrawerNavigator.Screen name="Main2" component={MainTabs} options={{ headerShown: false }} />
        </DrawerNavigator.Navigator>
    );
}
