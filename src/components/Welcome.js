import React, { useState, useEffect } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import "./welcome.css";
// import e from 'express';

export default function Welcome() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false); 
    const [registerInformation, setRegisterInformation] = useState({
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/todolist");
            }
        });
    }, []); 

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate('/todolist')
        }).catch( (err) => 
            alert(err.message)
        );
    };

    const handleRegister = () => {
        if(registerInformation.email !== registerInformation.confirmEmail || registerInformation.password != registerInformation.confirmPassword){
            alert("Please comfirm your email.")
            return
        } else if (registerInformation.password !== registerInformation.confirmPassword){
            alert("Please confirm your password.")
            return
        }
        createUserWithEmailAndPassword(auth, registerInformation.email, registerInformation.password)
            .then(()=>{
                navigate("/todolist");
            })
            .catch((err) => alert(err.message));
    };

    return (
        <div className="welcome">
            <h1>2do List</h1>
            <div className="login-register-bcontainer">
                {isRegistering ? (
                    <>
                        <input
                            type="email"
                            placeholder="Email"
                            value={registerInformation.email}
                            onChange={(e) =>
                                setRegisterInformation({
                                    ...registerInformation,
                                    email: e.target.value
                                })
                            } />
                        <input
                            type="email"
                            placeholder="Confirm Email"
                            value={registerInformation.confirmEmail}
                            onChange={(e) =>
                                setRegisterInformation({
                                    ...registerInformation,
                                    confirmEmail: e.target.value
                                })
                            } />
                        <input
                            type="password"
                            placeholder="Password"
                            value={registerInformation.password}
                            onChange={(e) =>
                                setRegisterInformation({
                                    ...registerInformation,
                                    password: e.target.value
                                })
                            } />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={registerInformation.confirmPasword}
                            onChange={(e) =>
                                setRegisterInformation({
                                    ...registerInformation,
                                    confirmPassword: e.target.value
                                })
                            } />

                        <button onClick={handleRegister}>Register</button>
                        <button onClick={() => setIsRegistering(false)}>Return to Login</button>
                    </>
                    ) : (  <>
                        <input type="email" onChange={handleEmailChange} placeholder="Email" value={email} />
                        {<br></br>}
                        <input type="password" onChange={handlePasswordChange} placeholder="Password" value={password}/>
                        {<br></br>}
                        <button onClick={handleSignIn}>Sign In</button>
                        <button onClick={() => setIsRegistering(true)}>Create Account</button>
                    </> )
                }
            </div>
        </div>
    );
}