import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';
import Header from '../components/Home/Header';

export default function Home() {
    const { isLoaded, signOut } = useAuth();

    return (
        <View style={{ padding: 15, marginTop: 10 }}>
            <Header />
        </View>
    );
}
