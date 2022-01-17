import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useRef } from "react";
import {StyleSheet, Image, Button, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import tailwind from "tailwind-rn";
import useAuth from "../hooks/useAuth";

const DUMMY_DATA = [
    {
        id: 12,
        firstName: "Hidehiro",
        lastName: "Aya",
        occupation: "Software Developer",
        photoURL: "https://scontent-nrt1-1.xx.fbcdn.net/v/t31.18172-8/17635383_1472108459468225_501961712479371802_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WeYJjrmJdfwAX-6K-LQ&_nc_oc=AQkZkrNxKmi9Q52b85dRs38zgBawmE7HbQNBrhL8vzre9b74oSOrB5tDMDi35Om8uCPoT2EBpNlDwcN_sWAmiDX0&_nc_ht=scontent-nrt1-1.xx&oh=00_AT_GUZEhM-jYS-zOGIixvExnfEqLhtt8GUlPAJ_1TY78Yw&oe=61FFDED7",
        age: 30,
    },
    {
        id: 34,
        firstName: "Shota",
        lastName: "Koike",
        occupation: "Cheff",
        photoURL: "https://i.pinimg.com/474x/9b/06/b0/9b06b0a3eecaa8ee67eab3a52ad28818.jpg",
        age: 35
    },
    {
        id: 56,
        firstName: "Hana",
        lastName: "Tabeya",
        occupation: "Model",
        photoURL: "https://cdn.lipscosme.com/admin/article_item279628-2021/07/23-83.png",
        age: 23
    },
    {
        id: 78,
        firstName: "Masaki",
        lastName: "Suda",
        occupation: "Actor",
        photoURL: "https://i.pinimg.com/originals/00/c6/0e/00c60efbfcec06fa9e5e6ce895d005c0.jpg",
        age: 28
    },
    {
        id: 90,
        firstName: "Kanna",
        lastName: "Hashimoto",
        occupation: "Actress",
        photoURL: "https://happymail.co.jp/happylife/wp-content/uploads/2021/06/image8-4-e1624342926978.jpg",
        age: 22
    },
    {
        id: 99,
        firstName: "Kyarry",
        lastName: "Pamyu Pamyu",
        occupation: "Singer",
        photoURL: "https://img.ananweb.jp/anan-plus/2021/10/17132159/kyary1-1024x680.jpg",
        age: 26
    },

]

const HomeScreen = () => {

    const navigation = useNavigation();
    const { user, logout } = useAuth();
    const swipeRef = useRef(null);

    return(
        <SafeAreaView style={tailwind("flex-1")}>
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

            {/* Card */}
            <View  style={tailwind("flex-1 -mt-6")}>
                <Swiper
                    ref={swipeRef}
                    containerStyle={{backgroundColor: "transparent"}}
                    cards={DUMMY_DATA}
                    stackSize={5}
                    cardIndex={0}
                    animateCardOpacity
                    verticalSwipe={false}
                    onSwipedLeft={() => {
                        console.log("Siwpe PASS")
                    }}
                    onSwipedRight={() => {
                        console.log("Siwpe MATCH")
                    }}
                    overlayLabels={{
                        left: {
                            title: "NOPE",
                            style: {
                                label: {
                                    textAlign: "right",
                                    color: "red",
                                },
                            },
                        },
                        right: {
                            title: "MATCH",
                            style: {
                                label: {
                                    color: "#4DED30",
                                },
                            },
                        }
                    }}
                    renderCard={(card) => (
                            <View key={card.id} style={tailwind("relative bg-white h-3/4 rounded-xl")}>
                                <Image 
                                    style={tailwind("absolute top-0 h-full w-full rounded-xl")}
                                    source={{ uri: card.photoURL}}
                                />

                                <View 
                                    style={[
                                        tailwind("absolute bottom-0 bg-white w-full flex-row justify-between h-20 px-6 py-2 rounded-b-xl"),
                                        styles.cardShadow,
                                    ]} 
                                >
                                    <View> 
                                        <Text style={tailwind("text-xl font-bold")}>{card.firstName} {card.lastName}</Text>
                                        <Text >{card.occupation}</Text>
                                    </View>
                                    <Text style={tailwind("text-xl font-bold")}>{card.age}</Text>
                                </View>
                                

                            </View>
                        )
                    }
                />
            </View>


            {/* End of Card */}

            {/* <Text>I am homescreen</Text>
            <Button 
                title="Gp to Chat Screen" 
                onPress={() => navigation.navigate("Chat")}
            />
            <Button  
                title="Logout" 
                onPress={ logout } 
            /> */}

            <View style={tailwind("flex flex-row justify-evenly")}>
                <TouchableOpacity
                    onPress={() => swipeRef.current.swipeLeft()} 
                    style={tailwind(
                        "items-center justify-center rounded-full w-16 h-16 bg-red-200"
                    )}
                >
                    <Entypo name="cross" size={24} color="red" />
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => swipeRef.current.swipeRight()} 
                    style={tailwind(
                        "items-center justify-center rounded-full w-16 h-16 bg-green-200"
                    )}
                >
                    <AntDesign name="heart" size={24} color="green"/>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
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

export default HomeScreen;