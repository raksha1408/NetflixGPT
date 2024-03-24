import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constant';


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage , seterrorMessage] = useState();
    

    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null)
    const handleButtonClick = () => {
        console.log(password)
        const message = checkValidData(email.current.value, password.current.value)
       seterrorMessage(message);

        if(message ){
            return;
        }
        //Sign in sign up login
        if(!isSignInForm){
                //signup login
                // const auth = getAuth();
                createUserWithEmailAndPassword(auth , email.current.value  , password.current.value)
                .then((userCredential) => {
                    
                    
                })
                .catch((error) =>{
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode+"-" +errorMessage);
                })
        }
        else{
            signInWithEmailAndPassword(auth , email.current.value , password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName:name.current.value,
                })
                .then(()=>{
                    const { uid, email, displayName } = auth.currentUser;
                    dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                   
                }).catch((error)=>{
                    seterrorMessage(error.message);
                });
                console.log(user);
               
            })
            .catch((error)=> {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode+" "+errorMessage);
            });
        }

    };



    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className="w-screen h-screen flex justify-center items-center bg-black absolute">
                <img src={BG_URL}
                    alt="Logo" />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()} className='bg-opacity-50 w-full md:w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0'>
                <h1 className='font-bold text-3xl py-4 text-white'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                <input
                    ref={email} type="text" placeholder='Email Address' className=' p-2 my-4 w-full bg-gray-600' />
                {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className=' p-2 my-4 w-full bg-gray-600' />}

                <input ref={password} type="password" placeholder='Password' className=' p-2 my-4 w-full bg-gray-600' />
               <p className='font-bold text-red-500'>{errorMessage}</p>
             
                <button
                    className='p-2 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='text-white cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New To Netflix? Sign Up Now" : "Allready a User"}</p>
            </form>
        </div>
    );
}

export default Login;
