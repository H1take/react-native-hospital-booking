import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import Login from './app/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './app/navigations/TabNavigation';

export default function App() {
    return (
        <ClerkProvider
            publishableKey={'pk_test_cG93ZXJmdWwtcGlyYW5oYS02Ni5jbGVyay5hY2NvdW50cy5kZXYk'}
        >
            <SafeAreaView style={styles.container}>
                <SignedIn>
                    <NavigationContainer>
                        <TabNavigation />
                    </NavigationContainer>
                </SignedIn>
                <SignedOut>
                    <Login />
                </SignedOut>
            </SafeAreaView>
        </ClerkProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
