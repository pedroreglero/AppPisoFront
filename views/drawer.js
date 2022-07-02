import { ImageBackground, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Drawer() {
    return (
        <ImageBackground resizeMethod='resize' resizeMode='contain' source={require("../assets/images/bgDrawer.png")} style={{ flex: 1, padding: 10 }}>
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