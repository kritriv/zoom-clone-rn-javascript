import { View, Text, ActivityIndicator, Dimensions } from 'react-native';
import colors from '../globals/colors';
import globalStyles from '../globals/globalStyles';

const Loader = () => {
    return (
        <View
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                backgroundColor: 'rgba(0,0,0,0.5)',
                width: Dimensions.get('screen').width,
                height: Dimensions.get('screen').height,
            }}
        >
            <View
                style={{
                    backgroundColor: '#f2f2f2',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 30,
                    height: 80,
                    width: 200,
                    borderRadius: 2,
                    elevation: 2,
                }}
            >
                <ActivityIndicator style={globalStyles.loadingIndicator} size="large" color={colors.blue} />
                <Text
                    style={{
                        fontFamily: 'PoppinsSemiBold',
                        fontSize: 16,
                        color: colors.black,
                    }}
                >Please Wait</Text>
            </View>
        </View>
    );
}

export default Loader;