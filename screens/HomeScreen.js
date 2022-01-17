import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Image, Button, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import tailwind from "tailwind-rn";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {

    const navigation = useNavigation();
    const { user, logout } = useAuth();
    console.log(user)

    return(
        <SafeAreaView>
            {/* Header */}
            <View style={tailwind("flex-row justify-between items-center px-5")}>
                <TouchableOpacity onPress={logout}>
                    <Image style={tailwind("h-10 w-10 rounded-full")} source={{ uri:user.photoURL}} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={tailwind("h-14 w-14")} source={require("../assets/favicon.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                    <Ionicons name = "chatbubbles-sharp" size={30} />
                </TouchableOpacity>
            </View>
            {/* End of header */}

            {/* <Text>I am homescreen</Text>
            <Button 
                title="Gp to Chat Screen" 
                onPress={() => navigation.navigate("Chat")}
            />
            <Button  
                title="Logout" 
                onPress={ logout } 
            /> */}


        </SafeAreaView>
    )
}

export default HomeScreen;