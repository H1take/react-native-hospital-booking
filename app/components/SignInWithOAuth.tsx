import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Dimensions, TouchableOpacity, Text } from 'react-native';
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser';
import { Colors } from '../../assets/Colors';

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error('OAuth error', err);
        }
    }, []);

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                padding: 16,
                backgroundColor: Colors.primary,
                borderRadius: 90,
                alignItems: 'center',
                marginTop: 20,
                width: Dimensions.get('screen').width * 0.8,
            }}
        >
            <Text style={{ fontSize: 17, color: Colors.white }}>Log in with Google!</Text>
        </TouchableOpacity>
    );
};
export default SignInWithOAuth;
