import React from 'react'
import { Tweet } from './index';

const Timeline = (props) => {
    return (
        <div className="timeline">
            {props.tweets.map((value) => {
                return ( // ← mapに渡すコンポーネントはreturnで返す
                <Tweet
                    key={value.id}
                    icon={value.icon}
                    displayName={value.displayName}
                    accountName={value.accountName}
                    content={value.content}
                />
            )})}
        </div>
    )
}

export { Timeline };