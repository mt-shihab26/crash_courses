import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const Index = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>I am here 3</Text>
            <Link href="/login" style={{ color: 'red' }}>
                Login
            </Link>
        </View>
    );
};

export default Index;
