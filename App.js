import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';
import MensaErzbergerstraße from './screens/MensaErzbergerstraße ';
import MensaMoltke from './screens/MensaMoltke';
import MensaamAdenauerring from './screens/MensaamAdenauerring';
import MensaLocation from './screens/MensaLocation';



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Mensa Erzbergerstraße" component={MensaErzbergerstraße} />
      <Drawer.Screen name="Mensa Moltke " component={MensaMoltke} />
      <Drawer.Screen name="Mensa am Adenauerring" component={MensaamAdenauerring} />
      <Drawer.Screen name="Mensa Locations " component={MensaLocation} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
