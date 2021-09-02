import React from 'react';
import Image from "next/image";
import {useSession} from "next-auth/client";
import {CameraIcon, EmojiHappyIcon, VideoCameraIcon} from "@heroicons/react/solid";

const ImportBox = () => {
    const [session] = useSession()

    const sendPost = (e) => {
        e.preventDefault()
    }

    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center '>
                <Image className='rounded-full'
                       src={session.user.image} width={30} height={30}
                       layout="fixed"
                       alt='#'/>
                <form className='flex flex-1'>
                    <input className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' type="text"
                           placeholder={`what's on your mind, ${session.user.name}?`}/>
                    <button hidden type='submit' onClick={sendPost}>submit</button>
                </form>
            </div>

            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Live video</p>
                </div>
                <div className='inputIcon'>
                    <CameraIcon className='h-7 text-green-400'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                </div>
                <div className='inputIcon'>
                    <EmojiHappyIcon className='h-7 text-yellow-300'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Filling/Activity</p>
                </div>
            </div>
        </div>
    );
};

export default ImportBox;