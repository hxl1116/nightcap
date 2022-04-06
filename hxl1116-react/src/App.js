import React, {useLayoutEffect, useReducer, useState} from "react";

import Club from "./components/Club";
import ClubControl from "./components/ClubControl";

import {clubReducer, CLUBS, init} from "./util";


function App() {
    const [active, setActive] = useState(null)
    const [volumes, dispatch] = useReducer(clubReducer, [], init)

    // Init club volumes
    useLayoutEffect(() => {
        // noinspection JSCheckFunctionSignatures
        dispatch({type: 'reset', payload: CLUBS})
    }, [])

    return (
        <div className="container">
            <ul>
                {CLUBS.map(club => <Club key={club.name}/>)}
            </ul>
            <ClubControl clubs={CLUBS} active={active} disp={dispatch} setActive={setActive}/>
        </div>
    );
}

export default App;
