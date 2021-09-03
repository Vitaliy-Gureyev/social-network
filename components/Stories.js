import React from 'react';
import StoryCard from "./StoryCard";

const stories = [
    {
        name: 'Vitaliy Hureyev',
        src: 'https://links.papareact.com/zof',
        profile: 'https://links.papareact.com/l4v',
        key:'0'
    },
    {
        name: 'Elon Musk',
        src: 'https://links.papareact.com/4zn',
        profile: 'https://links.papareact.com/kxk',
        key:'1'
    },
    {
        name: 'Jeff Bezos',
        src: 'https://links.papareact.com/k2j',
        profile: 'https://links.papareact.com/f0p',
        key:'2'
    },
    {
        name: 'Mark Zuckerberg',
        src: 'https://links.papareact.com/xql',
        profile: 'https://links.papareact.com/snf',
        key:'3'
    },
    {
        name: 'Bill Gates',
        src: 'https://links.papareact.com/4u4',
        profile: 'https://links.papareact.com/zvy',
        key:'4'
    }
]

const Stories = () => {
    return (
        <div className='flex justify-center space-x-3 mx-auto'>
            {stories.map(el => (

                // eslint-disable-next-line react/jsx-key
                <StoryCard name={el.name} src={el.src} profile={el.profile} key={el.key}/>
            ))}
        </div>
    );
}

export default Stories;