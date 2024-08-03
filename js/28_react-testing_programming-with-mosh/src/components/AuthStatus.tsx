import { useAuth0 } from '@auth0/auth0-react';
import { Text } from '@radix-ui/themes';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const AuthStatus = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <div>Loading...</div>;

    if (isAuthenticated)
        return (
            <div className="flex items-center space-x-2">
                <Text>{user!.name}</Text>
                <LogoutButton />
            </div>
        );

    return <LoginButton />;
};

export default AuthStatus;
