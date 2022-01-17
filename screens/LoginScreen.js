import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { ImageBackground, Button, Text, View, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {

    const { signInWithGogle, loading } = useAuth();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    },[])

    return(
        <View style={tailwind("flex-1")}>

            <ImageBackground
                resizeMode="cover"
                style={tailwind("flex-1")}
                source={{ uri: "https://tinder.com/static/tinder.png"}}
            >

                <TouchableOpacity
                    style={[
                        tailwind("absolute bottom-40 w-52 bg-white p-4 rounded-2xl"),
                        { marginHorizontal: "25%"},
                    ]}
                    onPress={signInWithGogle}
                >
                    <Text style={tailwind("font-semibold text-center")} >
                        Sign In & get swiping
                    </Text>
                </TouchableOpacity>
            </ImageBackground>


        </View>
    )
}

export default LoginScreen;