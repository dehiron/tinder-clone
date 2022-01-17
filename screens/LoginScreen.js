import React from "react";
import { Button, Text, View } from "react-native";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {

    const { signInWithGogle, loading } = useAuth();

    return(
        <View>
            <Text>{loading ? "Loading..." : "I am login screen"}</Text>
            <Button title="login" onPress={ signInWithGogle } />
        </View>
    )
}

export default LoginScreen;