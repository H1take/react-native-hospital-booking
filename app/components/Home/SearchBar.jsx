import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../assets/Colors';

const SearchBar = ({ setSearchText }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleChangeSearchInput = (textInput) => {
        setSearchInput(textInput);
    };

    const submitSearchInput = (text) => {
        setSearchText(text);
    };

    return (
        <View style={{ marginTop: 15 }}>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                    borderWidth: 0.7,
                    borderColor: Colors.gray,
                    padding: 7,
                    borderRadius: 7,
                }}
            >
                <Ionicons name='search' size={24} color={Colors.primary} />
                <TextInput
                    placeholder={'search'}
                    style={{ width: '100%' }}
                    onChange={(value) => handleChangeSearchInput(value)}
                    onSubmitEditing={() => submitSearchInput(searchInput)}
                />
            </View>
        </View>
    );
};

export default SearchBar;
