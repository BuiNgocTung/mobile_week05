import * as React from 'react';
import { Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from "./component/screen1";
import Screen2 from "./component/screen2";
const Stack = createNativeStackNavigator();
function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Screen1" component={Screen1}></Stack.Screen>
        <Stack.Screen name="Screen2" component={Screen2}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );


};
export default App;