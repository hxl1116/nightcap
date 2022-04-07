import React from "react";

const ClubControl = ({clubs, active, disp, setActive}) => {
    const increment = () => {
        disp({type: 'increment', payload: active})
    }

    const decrement = () => {
        disp({type: 'decrement', payload: active})
    }

    return (
        <>
            <ul>
                {clubs.map(({name, text}, idx) => (
                    <label key={`opt${name}`}>
                        {text}
                        <input type="radio" name="club-opt" onClick={() => setActive(idx)}/>
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
