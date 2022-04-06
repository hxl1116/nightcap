import React from "react";

const ClubControl = ({clubs, active, disp, setActive}) => {
    const increment = () => {
        // TODO: Add max cap check
        disp({type: 'increment', payload: active})
    }

    const decrement = () => {
        // TODO: Add min vol check
        disp({type: 'decrement', payload: active})
    }

    return (
        <>
            <ul>
                {clubs.map(({name, text}) => (
                    <label key={`opt${name}`}>
                        {text}
                        <input type="radio" name="club-opt" onClick={() => setActive(name)}/>
                    </label>
                ))}
            </ul>
            <div>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
        </>
    )
}

export default ClubControl
