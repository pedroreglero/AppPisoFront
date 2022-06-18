import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, Image, TouchableOpacity, BackHandler, ImageBackground, TouchableWithoutFeedback, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./dashboard";
import { FontAwesome } from "@expo/vector-icons";
import Ranking from "./ranking";
import Money from "./money";
import Groceries from "./groceries";
import { LinearGradient } from "expo-linear-gradient";
import { PrimaryColor, SecondaryColor } from '../utilities/ColorPalette';
import * as Animatable from 'react-native-animatable';
import { useDispatch, useSelector } from 'react-redux';
import ActionConstants from '../redux/reduxConstants';
import mainStore from '../redux/store';


const TabNavigator = createBottomTabNavigator();
const DrawerNavigator = createDrawerNavigator();

var button1ShowRef;
var button2ShowRef;

var dispatch;
var state;

function CustomTabBar({ state, descriptors, navigation, insets }) {
    

    const animateShow = () => {
        dispatch({ type: ActionConstants.TOGGLE_TABBAR_ADD });
        
        const state = mainStore.getState().state;

        if (state.areTabbarActionsShown) {
            button1ShowRef.current.animate({ 0: { opacity: 0 }, 0.6: { opacity: 1 } });
            button2ShowRef.current.animate({ 0: { opacity: 0 }, 0.6: { opacity: 1 } });
        }
        else {
            button1ShowRef.current.animate({ 0: { opacity: 1 }, 0.4: { opacity: 0 } });
            button2ShowRef.current.animate({ 0: { opacity: 1 }, 0.4: { opacity: 0 } });
        }
    }

    return (
        <View style={{ backgroundColor: "#F8F8F8" }}>
            <View style={{ flexDirection: "row", backgroundColor: "#F8F8F8", justifyContent: "space-around", width: "100%", height: 66, borderWidth: 2, borderColor: "#FFFFFF", borderRadius: 20, borderBottomWidth: 0, marginBottom: insets.bottom == 0 ? 20 : insets.bottom }}>
                <View style={{ alignSelf: "center" }}>
                    <TouchableOpacity onPress={() => navigation.navigate({ name: "Dashboard" })}>
                        <View style={{ display: state.index == 0 ? "flex" : "none", backgroundColor: "#F8F8F8", position: "absolute", height: 55, width: 55, alignSelf: "center", top: -8, borderWidth: 2, borderColor: "#FFFFFF", borderRadius: 20, shadowColor: "#000000", shadowOffset: { height: 4 }, shadowOpacity: 0.3, shadowRadius: 4 }}>
                        </View>
                        <Image source={require("../assets/images/home.png")} style={{ width: 37, height: 37, resizeMode: "contain" }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: "center" }}>
                    <TouchableOpacity onPress={() => navigation.navigate({ name: "Ranking" })}>
                        <View style={{ display: state.index == 1 ? "flex" : "none", backgroundColor: "#F8F8F8", position: "absolute", height: 55, width: 55, alignSelf: "center", top: -8, borderWidth: 2, borderColor: "#FFFFFF", borderRadius: 20, shadowColor: "#000000", shadowOffset: { height: 4 }, shadowOpacity: 0.3, shadowRadius: 4 }}>
                        </View>
                        <Image source={require("../assets/images/ranking.png")} style={{ width: 37, height: 37, resizeMode: "contain" }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ position: 'absolute', top: -100, left: 0, right: 0, bottom: 80, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Animatable.View ref={button1ShowRef} style={{ opacity: 0, marginBottom: 10, width: 60, height: 60, backgroundColor: "#F8F8F8", borderColor: "#FFFFFF", borderWidth: 2, borderRadius: 30, minHeight: 60, minWidth: 60, maxHeight: 60, maxWidth: 60, justifyContent: "center", alignItems: "center", shadowColor: "rgba(0, 0, 0, 0.25)", shadowRadius: 4, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 1 }}>
                            <FontAwesome name="tasks" size={30} ></FontAwesome>
                        </Animatable.View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Animatable.View ref={button2ShowRef} style={{ opacity: 0, width: 60, height: 60, backgroundColor: "#F8F8F8", borderColor: "#FFFFFF", borderWidth: 2, borderRadius: 30, minHeight: 60, minWidth: 60, maxHeight: 60, maxWidth: 60, justifyContent: "center", alignItems: "center", shadowColor: "rgba(0, 0, 0, 0.25)", shadowRadius: 4, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 1 }}>
                            <FontAwesome name="home" size={30} ></FontAwesome>
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: "center", alignItems: "center" }}>
                        <View style={{ display: "flex", backgroundColor: "#F8F8F8", position: "absolute", height: 55, width: 55, alignSelf: "center", top: -8, borderWidth: 2, borderColor: "#FFFFFF", borderRadius: 20, shadowColor: "#000000", shadowOffset: { height: 4 }, shadowOpacity: 0.3, shadowRadius: 4 }}>
                        </View>
                    <TouchableOpacity onPress={animateShow}>
                        <Animated.View style={{ justifyContent: "center" }}>
                            <Image source={require("../assets/images/add.png")} style={{ width: 40, height: 40, resizeMode: "contain", alignSelf: "center", top: 3 }}></Image>
                        </Animated.View>
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: "center" }}>
                    <TouchableOpacity onPress={() => navigation.navigate({ name: "Money" })}>
                        <View style={{ display: state.index == 2 ? "flex" : "none", backgroundColor: "#F8F8F8", position: "absolute", height: 55, width: 55, alignSelf: "center", top: -8, borderWidth: 2, borderColor: "#FFFFFF", borderRadius: 20, shadowColor: "#000000", shadowOffset: { height: 4 }, shadowOpacity: 0.3, shadowRadius: 4 }}>
                        </View>
                        <Image source={require("../assets/images/compra.png")} style={{ width: 37, height: 37, resizeMode: "contain" }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: "center" }}>
                    <TouchableOpacity onPress={() => navigation.navigate({ name: "Groceries" })}>
                        <View style={{ display: state.index == 3 ? "flex" : "none", backgroundColor: "#F8F8F8", position: "absolute", height: 55, width: 55, alignSelf: "center", top: -8, borderWidth: 2, borderColor: "#FFFFFF", borderRadius: 20, shadowColor: "#000000", shadowOffset: { height: 4 }, shadowOpacity: 0.3, shadowRadius: 4 }}>
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
        <ImageBackground imageStyle={{ resizeMode: "cover" }} source={require("../assets/images/bgMain.png")} style={{ flex: 1 }}>
            <TabNavigator.Navigator tabBar={CustomTabBar}>
                <TabNavigator.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false, title: "Inicio", tabBarIcon: (props) => { return <FontAwesome name="home" color={props.color} size={props.size} />; } }} />
                <TabNavigator.Screen name="Ranking" component={Ranking} options={{ headerShown: false, title: "Ranking", tabBarIcon: (props) => { return <FontAwesome name="trophy" color={props.color} size={props.size} />; } }} />
                <TabNavigator.Screen name="Money" component={Money} options={{ headerShown: false, title: "Dinero", tabBarIcon: (props) => { return <FontAwesome name="money" color={props.color} size={props.size} />; } }} />
                <TabNavigator.Screen name="Groceries" component={Groceries} options={{ headerShown: false, title: "Compras", tabBarIcon: (props) => { return <FontAwesome name="shopping-cart" color={props.color} size={props.size} />; } }} />
            </TabNavigator.Navigator>
        </ImageBackground>
    );
}

function Drawer() {
    return (
        <ImageBackground source={require("../assets/images/bgDrawer.png")} style={{ flex: 1, padding: 10 }}>
            <SafeAreaView>
                <View>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image source={require("../assets/images/perfilTest.png")} style={{ width: 150, height: 150, borderRadius: 75, borderWidth: 4, borderColor: "white", shadowOffset: { height: 10 }, shadowOpacity: 0.3, shadowRadius: 5, shadowColor: "black" }} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

export default function Main() {
    button1ShowRef = useRef(null);
    button2ShowRef = useRef(null);

    dispatch = useDispatch();

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
