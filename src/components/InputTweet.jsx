import React, { useState, useEffect, useCallback, useRef } from 'react'

const InputTweet = (props) => {
    const textareaRef = useRef(null);
    const [count, setCount] = useState(0);

    const sendTweet = useCallback(() => {
        if(textareaRef.current) {
            props.addTweet({
                id: new Date().getTime(),
                icon: '🤐',
                displayName: 'ファス成',
                accountName: 'fastener',
                content: textareaRef.current.value
            })
        }
        textareaRef.current.value = "";
        setCount(0);
    }, [textareaRef.current, props.addTweet]);

    const handleCountChange = (length) => {
        setCount(length);
    };


    return (
        <div className="inputWrapper">
            <textarea cols="30" rows="10" ref={textareaRef} className="tweet-textarea" onChange={event=> handleCountChange(event.target.value.length)} ></textarea>
            <span className="input-count">文字数: {count}</span>
            <button onClick={sendTweet} className="send-tweet" >tweet</button>
        </div>
    )
}

export { InputTweet };