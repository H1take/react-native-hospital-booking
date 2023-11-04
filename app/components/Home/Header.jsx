import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    style={{ width: 50, height: 50, borderRadius: 99 }}
                    source={{ uri: user.imageUrl }}
                />
                <View style={{ marginLeft: 5 }}>
                    <Text style={{ fontFamily: 'appfontRegular', marginLeft: 3 }}>Hello 👋</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'appfontBold' }}>
                        {user.fullName}
                    </Text>
                </View>
            </View>
            <Ionicons name='notifications-outline' size={30} color={'black'} />
        </View>
    );
};

export default Header;
