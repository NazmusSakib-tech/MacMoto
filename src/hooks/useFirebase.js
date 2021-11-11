import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import {
    getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, getIdToken
} from "firebase/auth";
import { useEffect, useState } from "react";


initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState("");
    const [error, setError] = useState("");
    const [token, setToken] = useState("");
    const [isLoading, setLoading] = useState(true);
    const auth = getAuth();



    /************** Google sign in *******/

    const signInUsingGoogle = (location, history,) => {
        setLoading(true);
        setError("");
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result?.user);
                //Save user to database
                saveUser(result.user?.email, result.user?.displayName, 'PUT')
                const destination = location?.state?.from || "/";
                history.replace(destination)
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }



    // ***************By Email Register in************* 

    const registration = (email, password, name, history) => {
        setLoading(true);

        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser);

                //Save user to database
                saveUser(email, name, 'POST')

                //send Name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.replace("/")
                setError("");
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            }).finally(() => {
                setLoading(false);
            })
    }


    //*****************By email Log In*************/

    const logIn = (email, password, location, history) => {
        setLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                const destination = location?.state?.from || "/";
                history.replace(destination)
                setError("");
            })
            .catch(error => {
                setError(error.message)

            }).finally(() => {
                setLoading(false);
            })
    }


    /*********Log Out Function**************/

    const logOut = () => {
        setLoading(true);
        setError("");
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
            setLoading(false);
        }).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setLoading(false);
        })

    }


    //********* User State Observer **********
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                .then((idToken) => setToken(idToken))
            } else {
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, []);


    //**********Save User To Data Base************/
    const saveUser = (email, displayName, method) => {
        const user = {email, displayName};

        fetch('http://localhost:5000/users', {
            method: method,
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then((response) => response.json())
        .then((response) => {console.log(response)})
    }

    //*********For Admin*********** */
    useEffect(() => {
        const url = `http://localhost:5000/users/${user.email}`
        fetch(url)
        .then((response) =>response.json())
        .then(result => setAdmin(result.admin))

    }, [user?.email])


    return {
        user,
        admin,
        registration,
        logOut,
        logIn,
        isLoading,
        error,
        signInUsingGoogle,
        token
    }
}

export default useFirebase;