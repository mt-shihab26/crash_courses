import { Tabs } from 'expo-router';
import { HouseIcon, LogInIcon } from 'lucide-react-native';

const Layout = () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'red' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => <HouseIcon color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="login"
                options={{
                    title: 'Login',
                    tabBarIcon: ({ color, size }) => <LogInIcon size={size} color={color} />,
                }}
            />
        </Tabs>
    );
};

export default Layout;
