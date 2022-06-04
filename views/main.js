import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
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

function MainTabs() {
    return (
        <TabNavigator.Navigator>
            <TabNavigator.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false, title: "Inicio", tabBarIcon: (props) => { return <FontAwesome name="home" color={props.color} size={props.size} />; } }} />
            <TabNavigator.Screen name="Ranking" component={Ranking} options={{ headerShown: false, title: "Ranking", tabBarIcon: (props) => { return <FontAwesome name="trophy" color={props.color} size={props.size} />; } }} />
            <TabNavigator.Screen name="Money" component={Money} options={{ headerShown: false, title: "Dinero", tabBarIcon: (props) => { return <FontAwesome name="money" color={props.color} size={props.size} />; } }} />
            <TabNavigator.Screen name="Groceries" component={Groceries} options={{ headerShown: false, title: "Compras", tabBarIcon: (props) => { return <FontAwesome name="shopping-cart" color={props.color} size={props.size} />; } }} />
        </TabNavigator.Navigator>
    );
}

function Drawer() {
    return (
        <LinearGradient colors={[PrimaryColor(), PrimaryColor(), "white"]} style={{flex: 1, padding: 10}}>
            <SafeAreaView>
                <View>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image source={require("../assets/images/perfilTest.png")} style={{ width: 150, height: 150, borderRadius: 75 }} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default function Main() {
    return (
        <DrawerNavigator.Navigator initialRouteName="Main2" backBehavior="none" drawerContent={Drawer}>
            <DrawerNavigator.Screen name="Main2" component={MainTabs} options={{ headerShown: false }} />
        </DrawerNavigator.Navigator>
    );
}