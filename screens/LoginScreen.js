import React from "react";
import { Button, Text, View } from "react-native";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {

    const { signInWithGogle } = useAuth();

    return(
        <View>
            <Text>Login Screen</Text>
            <Button title="login" onPress={ signInWithGogle } />
        </View>
    )
}

export default LoginScreen;