import React from "react";

const ClubControl = ({clubs, active, disp, setActive}) => {
    const increment = () => {
        disp({type: 'increment', payload: active})
    }

    const decrement = () => {
        disp({type: 'decrement', payload: active})
    }

    const handleClick = (idx) => {
        setActive(idx)
    }

    return (
        <>
            <ul id="club-opts">
                {clubs.map(({name, text}, idx) => (
                    <label key={`opt${name}`}>
                        {text}
                        <input type="radio" name="club-opt" onClick={() => handleClick(idx)}/>
                    </label>
                ))}
            </ul>
            <div id="club-controls">
                <button disabled={active === null} onClick={decrement}>-</button>
                <button disabled={active === null} onClick={increment}>+</button>
            </div>
        </>
    )
}

export default ClubControl
