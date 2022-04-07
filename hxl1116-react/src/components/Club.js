import React, {useEffect, useState} from "react";
import {CAP_MSG} from "../util";

const Club = ({id, name, text, volume, capacity, threshold}) => {
    const [status, setStatus] = useState('normal')
    const [message, setMessage] = useState(null)

    // Adjust message based on the club's volume
    useEffect(() => {
        if (volume >= threshold && volume < capacity) {
            setMessage(CAP_MSG.caution.message)
            setStatus('caution')
        }
        else if (volume < capacity) {
            setMessage(CAP_MSG.normal.message)
            setStatus('normal')
        }
        else {
            setMessage(CAP_MSG.restricted.message)
            setStatus('restricted')
        }
    }, [volume])

    return (
        <div className="club-display">
            <div className={`club-info ${status}`}>
                <p className="club-name">{text}</p>
                <p className="club-msg">{message}</p>
            </div>
            <p className="cap-count">{volume}</p>
        </div>
    )
}

export default Club
