import React, { useState , useCallback } from 'react'
import { Timeline, InputTweet } from './components/index';
import './assets/style.scss';

const App = () => {
    const [tweets, setTweets] = useState([
        {
            id: 0,
            icon: 'π½',
            displayName: 'γγγγε€ͺι',
            accountName: 'morokoshi',
            content: 'δ»ζ₯γ1ζ₯γγγγγγγΎγ'
        },
        {
            id: 1,
            icon: 'π¦',
            displayName: 'γ¨γγγ³γΉ',
            accountName: 'evidence',
            content: 'γγ«γΏγγγΉγγ'
        }
    ]);

    const addTweet = useCallback((tweet) => {
        setTweets((prev) => [tweet, ...prev])
    },[setTweets])

    return (
        <>
            <InputTweet addTweet={ addTweet } />
            <Timeline tweets={ tweets } />
        </>
    );
}

export default App;