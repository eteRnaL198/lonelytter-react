import React, { useState , useCallback } from 'react'
import { Timeline, InputTweet } from './components/index';
import './assets/style.scss';

const App = () => {
    const [tweets, setTweets] = useState([
        {
            id: 0,
            icon: '🌽',
            displayName: 'もろこし太郎',
            accountName: 'morokoshi',
            content: '今日も1日もろこしがうまい'
        },
        {
            id: 1,
            icon: '🦐',
            displayName: 'エビデンス',
            accountName: 'evidence',
            content: 'かにみそたべたい'
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