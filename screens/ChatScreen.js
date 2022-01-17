import React from "react";
import { Text, View } from "react-native";
import useAuth from "../hooks/useAuth";

const ChatScreen = () => {

    const { user } = useAuth(); //useAuthで定義されたuser: "Hide"にアクセス
    console.log(user)

    return(
        <View>
            <Text>I am chatscreen</Text>
        </View>
    )
}

export default ChatScreen;