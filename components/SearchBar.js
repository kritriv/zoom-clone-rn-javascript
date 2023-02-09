import React from 'react'
import { View, Text, TextInput } from 'react-native';
import colors from '../globals/colors';

// Icons
import Feather from 'react-native-vector-icons/Feather';

const SearchBar = ({value, setValue, placeholder}) => {
    return (
        <View style={{
            width: '90%',
            backgroundColor: colors.lightBlack,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginTop: 20,
        }}>
            <Feather name='search' size={20} color={colors.white}/>
            <TextInput
                style={{
                    color: colors.white,
                    opacity: 0.8,
                    fontSize: 16,
                    marginLeft: 10,
                    width: '90%',
                    backgroundColor: 'transparent',
                }}
                value={value}
                onChangeText={setValue}
                placeholder={placeholder || 'Search'}
                placeholderTextColor={colors.white}
            />
        </View>
    );
}

export default SearchBar;