import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import ChatList from "../components/ChatList";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";

const ChatScreen = () => {

    return(
        <SafeAreaView>
            <Header title={"Chat"} />
            <ChatList />
        </SafeAreaView>
    )
}

export default ChatScreen;