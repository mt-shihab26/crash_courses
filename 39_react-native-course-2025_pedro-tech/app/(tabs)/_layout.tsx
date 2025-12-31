import { Tabs } from 'expo-router';
import { HouseIcon, LogInIcon } from 'lucide-react-native';

const Layout = () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'coral' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size, focused }) =>
                        focused ? <HouseIcon color={color} size={size} /> : <HouseIcon color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="login"
                options={{
                    title: 'Login',
                    tabBarIcon: ({ color }) => <LogInIcon size={24} color={color} />,
                }}
            />
        </Tabs>
    );
};

export default Layout;
