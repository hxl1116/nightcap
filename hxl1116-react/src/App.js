import React, {useReducer, useState} from "react";

import {clubReducer, CLUBS, init} from "./util";
import Club from "./components/Club";
import ClubControl from "./components/ClubControl";


function App() {
    const [active, setActive] = useState(null)
    const [volumes, dispatch] = useReducer(clubReducer, CLUBS, init)

    return (
        <>
            <header>
                <h1>Nightclub Capacity</h1>
                <h3>Each time someone enters/leaves the club, select the correct club and click the appropriate
                    button</h3>
            </header>
            <div id="clubs-display">
                <ul id="clubs-list">
                    {CLUBS.map(club => <Club key={club.name} {...club} volume={volumes[club.name]}/>)}
                </ul>
                <ClubControl clubs={CLUBS} active={active} disp={dispatch} setActive={setActive}/>
            </div>
        </>
    )
}

export default App;
