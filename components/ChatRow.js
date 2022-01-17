import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Image, Text, View } from "react-native";
import { useEffect } from "react/cjs/react.development";
import tailwind from "tailwind-rn";
import useAuth from "../hooks/useAuth";
import getMatchedUserInfo from "../lib/getMatchedUserInfo";

const ChatRow = (props) => {

    const navigation = useNavigation();
    const { user } = useAuth();
    const [matchedUserInfo, setMatchedUserInfo] = useState(null);

    useEffect(() => {
        setMatchedUserInfo(getMatchedUserInfo(props.matchedDetails.users, user.uid));

    }, [props.matchedDetails, user])

    return(
        <TouchableOpacity
            style={[
                tailwind("flex-row items-center py-3 px-5 bg-white mx-3 rounded-lg"),
                styles.cardShadow,
            ]}
        >
            <Image
                style={tailwind("rounded-full h-16 w-16 mr-4")}
                source={{uri: matchedUserInfo?.photoURL}}
            />

            <View>
                <Text style={tailwind("text-lg font-semibold")}>
                    {matchedUserInfo?.displayName}
                </Text>
                <Text> Say Hi!</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    }
})

export default ChatRow;