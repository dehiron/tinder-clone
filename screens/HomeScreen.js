import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {

    const navigation = useNavigation();

    const { user } = useAuth(); //useAuthで定義されたuser: "Hide"にアクセス
    console.log(user)

    return(
        <View>
            <Text>I am homescreen</Text>
            <Button 
                title="Gp to Chat Screen" 
                onPress={() => navigation.navigate("Chat")}
            />
        </View>
    )
}

export default HomeScreen;