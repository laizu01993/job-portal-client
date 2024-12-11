import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.init';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    // user state
    const[user, setUser] = useState(null);

    // loading state
    const [loading, setLoading] = useState(true);

    const createUser = (name, email, password) =>{

        setLoading(true);
        return createUserWithEmailAndPassword(auth, name, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // to keep observer
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('state captured', currentUser);
            
            setLoading(false);
        })

        return () =>{
            unsubscribe()
        }
    }, [])


    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;