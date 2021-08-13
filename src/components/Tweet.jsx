import React, { useState, useCallback } from 'react'

const Tweet = (props) => {
    const [liked, setLiked] = useState(false);

    const toggleLiked = useCallback(() => {
        setLiked((prev) => setLiked(!prev)); // ← useStateには今の状態を引数として渡せる
    }, [setLiked]); // ← useCallbackの第二引数には中で使っている関数を渡す。第二引数に渡した関数が変わったら作り直してくれる。これを渡さないとダメ。

    return (
        <div className="tweet">
            <div className="icon-wrapper">{props.icon}</div>
            <div className="body-wrapper">
                <div className="status-display">
                    <span className="display-name">{props.displayName}</span>
                    <span className="account-name">@{props.accountName}</span>
                </div>
                <div className="content">{props.content}</div>
                <div className="status-action" onClick={toggleLiked}>
                    <span>{liked ? '💛' : '♡'}</span>
                </div>
            </div>
        </div>
    );
}

export { Tweet };