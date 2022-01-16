import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = () => {

    const navigation = useNavigation();


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