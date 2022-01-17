import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {

    const navigation = useNavigation();
    const { logout } = useAuth();

    return(
        <View>
            <Text>I am homescreen</Text>
            <Button 
                title="Gp to Chat Screen" 
                onPress={() => navigation.navigate("Chat")}
            />
            <Button  
                title="Logout" 
                onPress={ logout } 
            />
        </View>
    )
}

export default HomeScreen;