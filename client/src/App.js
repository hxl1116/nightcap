import React, {useState} from "react";

import Nav from "./components/Nav";
import Header from "./components/Header";
import ClubsGrid from "./components/ClubsGrid";

function App() {
    const [filter, setFilter] = useState('')

    return (
        <>
            <Nav {...{filter, setFilter}}/>
            <Header/>
            <ClubsGrid filter={filter}/>
        </>
    )
}

export default App;
