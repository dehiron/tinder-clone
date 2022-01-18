import { useNavigation } from "@react-navigation/native";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import React, { useLayoutEffect, useState } from "react";
import { TouchableOpacity, Text, View, Image, TextInput, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import tailwind from "tailwind-rn";
import { db } from "../firebase";
import useAuth from "../hooks/useAuth";

const ModalScreen = () => {

    const navigation = useNavigation();
    const { user } = useAuth();
    const [image, setImage] = useState(null);
    const [job, setJob] = useState(null);
    const [age, setAge] = useState(null);


    const incompleteForm = !image || !job || !age;

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerShown: true,
    //         headerTitle: "",
    //         headerStyle: {
    //             backgroundColor: "#FF5864",
    //         },
    //         headerTitleStyle: {color:"white"}
    //     });
    // }, []);

    const updateUserProfile = () => {
        setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            displayName: user.displayName,
            photoURL: image,
            occupation: job,
            age: age,
            timestamp: serverTimestamp(),
        }).then(() => {
            navigation.navigate("Home");
        }).catch((error) => {
            alert(error.message);
        })
    };

    return (

        <KeyboardAvoidingView style={tailwind("flex-1")}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={tailwind("flex-1 items-center pt-1")}>
                        <Image 
                            style={tailwind("h-20 w-full")}
                            resizeMode="contain"
                            source={{ uri: "https://links.papareact.com/2pf"}}
                        />

                        <Text style={tailwind("text-xl text-gray-500 p-2 font-bold")} >
                            Welcome {user.displayName}
                        </Text>

                        <Text style={tailwind("text-center p-4 font-bold text-red-400")} >
                            Step 1: The Profile Pic
                        </Text>
                        <TextInput
                            value={image}
                            onChangeText={(text) => setImage(text)}
                        
                            style={tailwind("text-center text-xl pb-2")}
                            placeholder="Enter a Profile Pic URL"
                        />

                        <Text style={tailwind("text-center p-4 font-bold text-red-400")} >
                            Step 2: The Job
                        </Text>
                        <TextInput
                            value={job}
                            onChangeText={(text) => setJob(text)}
                            style={tailwind("text-center text-xl pb-2")}
                            placeholder="Enter your occupation"
                        />

                        <Text style={tailwind("text-center p-4 font-bold text-red-400")} >
                            Step 1: The Age
                        </Text>
                        <TextInput
                            value={age}
                            onChangeText={(text) => setAge(text)}
                            style={tailwind("text-center text-xl pb-2")}
                            placeholder="Enter your age"
                            keyboardType="numeric"
                            maxLength={2}
                        />

                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>

            <View style={tailwind("flex-1 items-center pt-1")}>
                <TouchableOpacity 
                    disabled={incompleteForm}
                    style={[
                        tailwind("w-64 p-3 rounded-xl absolute bottom-10 bg-red-400"),
                        incompleteForm ? tailwind("bg-gray-400") : tailwind("bg-red-400"),
                    ]}
                    onPress={updateUserProfile}
                >
                    <Text 
                        style={tailwind("text-center text-white text-xl")}
                    >
                        Update Profile
                    </Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default ModalScreen;