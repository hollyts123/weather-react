import React from 'react';

export default function FormattedDate(props) {
    let date = props.date;

    return (
        <div >
            <p> {date}</p>
        </div>
    )
} 