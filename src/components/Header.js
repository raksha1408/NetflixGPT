import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';
// import { Route, Router, RouterProvider, Routes, createBrowserRouter} from 'react-router-dom';
const Header = () => {
    const dispatch = useDispatch();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    const user = useSelector((store) => store.user);

    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // navigate("/");
        }).catch((error) => {

        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse");
            }

            else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        // return unsubscribe; // Cleanup function
    }, []);
    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    };
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    return (
        <div className='bg-gradient-to-t from-black to-transparent flex'>
            <div className='absolute top-0 left-0 w-full  items-center p-8   bg-gradient-to-t from-black to-transparent z-10 flex flex-col md:flex-row justify-center md:justify-between' >
                <img
                    src='data:image/png;base64,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'
                    alt='Logo'
                    className='h-8 w-20 mx-auto md:mx-0'

                />
                {user && (
                    <div className="flex p-2 justify-between">
                        {showGptSearch && (
                            <select
                                className="p-2 m-2 bg-gray-900 text-white"
                                onChange={handleLanguageChange}
                            >
                                {SUPPORTED_LANGUAGES.map((lang) => (
                                    <option key={lang.identifier} value={lang.identifier}>
                                        {lang.name}
                                    </option>
                                ))}
                            </select>
                        )}
                        <button
                            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
                            onClick={handleGptSearchClick}
                        >
                            {showGptSearch ? "Homepage" : "GPT Search"}
                        </button>
                        <img
                            className='hidden md:block w-12 h-12'
                            src='https://occ-0-2365-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229'
                            alt='userIcon' />
                        <button onClick={handleSignOut} className='font-bold text-white '>Sign Out</button>
                    </div>)}
            </div>
        </div>
    );
};

export default Header;
