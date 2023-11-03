import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Appointment from '../screens/Appointment';
import Profile from '../screens/Profile';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='home' size={24} color='black' />
                    ),
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='ios-people-circle' size={24} color='black' />
                    ),
                }}
            />
            <Tab.Screen
                name='Appointment'
                component={Appointment}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='calendar' size={24} color='black' />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigation;
