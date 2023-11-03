import React from 'react';
import { View, Text, TouchableOpacity, Button, Image, StyleSheet } from 'react-native';
import loginImg from '../../assets/loginImg.jpg';
import SignInWithOAuth from '../components/SignInWithOAuth';

export default function Login() {
    return (
        <View>
            <View style={styles.container}>
                <Image style={styles.appImage} source={loginImg} />
            </View>
            <View style={styles.containerTitle}>
                <Text style={{ fontSize: '22px', fontWeight: 'bold' }}>
                    Your Ultimate Hospital booking
                </Text>
                <Text style={{ fontSize: '16px' }}>
                    Book Appointments Effortlessly and manager your health journey
                </Text>
            </View>
            <View style={styles.container}>
                <SignInWithOAuth />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appImage: {
        width: 415,
        height: 550,
        borderRadius: '20',
        marginTop: -20,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTitle: {
        display: 'flex',
        width: 400,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
    },
});
