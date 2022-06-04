import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './views/login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigatorRef } from './utilities/RootNavigator';
import Main from './views/main';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { setCustomText, setCustomTextInput } from 'react-native-global-props/src';
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import FlashMessage from 'react-native-flash-message';
import { applyMiddleware, createStore } from 'redux';
import userReducer from './redux/reducers/userReducer';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';




const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    "Cereal": require("./assets/fonts/Cereal.otf"),
    "CerealBold": require("./assets/fonts/CerealBold.otf")
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  const defaultTextPropsOverride = {
    style: {
      fontFamily: "Cereal"
    }
  };

  setCustomText(defaultTextPropsOverride);

  // redux saga & thunk store
   const store = generateStore();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer ref={navigatorRef}>
            <Stack.Navigator>
              <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
              <Stack.Screen name="Main" options={{ headerShown: false, gestureEnabled: false }} component={Main} />
            </Stack.Navigator>
          </NavigationContainer>
        </ApplicationProvider>
        <FlashMessage position="top" />
      </SafeAreaProvider>
    </Provider>
  );
}