import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importa todas as telas
import Home from './screens/Home';
import Settings from './screens/Settings';

const Stack = createStackNavigator();

export default Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                headerMode="screen"
                >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Settings"
                    options={{
                        title: 'Configurações',
                        drawerLabel: 'Configurações',
                    }}
                    component={Settings}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}