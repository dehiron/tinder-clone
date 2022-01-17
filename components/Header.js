import { Foundation, Ionicons } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import tailwind from "tailwind-rn";

const Header = (props) => {

    const navigation = useNavigation();

    return (
        <View style={tailwind("p-2 flex-row items-center justify-between")}>
            <View style={tailwind("flex flex-row items-center")}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={tailwind("p-2")}>
                    <Ionicons name="chevron-back-outline" size={34} color="FF5864" />
                </TouchableOpacity>
                <Text style={tailwind("text-2xl font-bold pl-2")}>{props.title}</Text>
            </View>
        

            {props.callEnabled && (
                <TouchableOpacity style={tailwind("rounded-full mr-4 p-3 bg-red-200")}>
                    <Foundation style={tailwind("")} name="telephone" size={20} color="red" />
                </TouchableOpacity>
            )}

        </View>
    )
}

export default Header;