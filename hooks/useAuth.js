import React, { createContext, useContext, useEffect, useState } from "react";
import * as Google from "expo-google-app-auth";
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut } from "firebase/auth";
import { auth } from "../firebase";
import config from "./config";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [loadingInitial, setLoadingInitial] = useState(true); //loginしてるかどうかを見る間に発生するラグ対策
    const [loading, setLoading] = useState(false);

    useEffect(
        //クリーンアップ関数を最後に書くやり方だとうまくLoginできない
        () => 
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // Logged in...
                    setUser(user);
                } else {
                    setUser(null);
                }
                setLoadingInitial(false); //loginしてるかどうかを見る間のラグ対策
            }),
        [])

    const logout = () => {
        setLoading(true);

        signOut(auth)
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }

    const signInWithGogle = async () => {

        setLoading(true);

        await Google.logInAsync(config).then(async(logInResult) => {
            if (logInResult.type === "success") {
                //login...
                const {idToken, accessToken} = logInResult;
                const credential = GoogleAuthProvider.credential(idToken, accessToken)
                
                await signInWithCredential(auth, credential);
            }
            return Promise.reject();
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    };

    return (
        <AuthContext.Provider  
            value={{
                user,
                loading,
                error,
                signInWithGogle,
                logout,
            }}
        >
            {!loadingInitial && children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    return useContext(AuthContext);
}

