import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useState } from "react"; 
import { FlatList, Text, View } from "react-native";
import { useEffect } from "react/cjs/react.development";
import tailwind from "tailwind-rn";
import { db } from "../firebase";
import useAuth from "../hooks/useAuth";
import ChatRow from "./ChatRow";

const ChatList = () => {

    const [matches, setMatches] = useState([]);
    const { user } = useAuth();
    
    useEffect(
        () => 
            onSnapshot(
                query(
                    collection(db, "matches"),
                    where("userMatched", "array-contains", user.uid)
                ),
                (snapshot) => 
                    setMatches(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    )
            ),
    [user])

    return matches.length > 0 ? (
        <FlatList
            style={tailwind("h-full")}
            data={matches}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ChatRow matchedDetails={item} />}
        />

    ) : (
        <View style={tailwind("p-5")}>
            <Text style={tailwind("text-center text-lg")}>
                No matches at the moment
            </Text>
        </View>
    )
}

export default ChatList;