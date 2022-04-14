import React, {useReducer, useState} from "react";
import {Col, Container, Row} from "reactstrap";

import Header from "./components/Header";
import ClubsGrid from "./components/ClubsGrid";

import {clubReducer, CLUBS, init} from "./util";


function App() {
    const [active, setActive] = useState(null)
    const [volumes, dispatch] = useReducer(clubReducer, CLUBS, init)

    return (
        <Container>
            <Row>
                <Col>
                    <Header/>
                </Col>
            </Row>
            <Row>
                <ClubsGrid volumes={volumes}/>
            </Row>
        </Container>
    )
}

export default App;
