import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';
import Header from '../components/Home/Header';
import SearchBar from '../components/Home/SearchBar';
import Slider from '../components/Home/Slider';

export default function Home() {
    const { isLoaded, signOut } = useAuth();

    return (
        <View style={{ padding: 15, marginTop: 10 }}>
            <Header />
            <SearchBar setSearchText={(value) => console.log(value)} />
            <Slider />
        </View>
    );
}
