import React, {useEffect, useState} from "react";
import {CAP_MSG} from "../util";

const Club = ({id, name, text, volume, capacity, threshold}) => {
    const [clubVolume, setClubVolume] = useState(0)
    const [message, setMessage] = useState(null)

    // Adjust message based on the club's volume
    useEffect(() => {
        if (volume >= threshold && volume < capacity) setMessage(CAP_MSG.caution.message)
        else if (volume < capacity) setMessage(CAP_MSG.normal.message)
        else setMessage(CAP_MSG.restricted.message)
    }, [clubVolume])

    return (
        <div>
            <div>
                <p>{text}</p>
                {message && <p>{message}</p>}
            </div>
            <p className="counter">{volume}</p>
        </div>
    )
}

export default Club
