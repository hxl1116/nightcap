import React from "react";
import {Col, Container, Row} from "reactstrap";

import Header from "./components/Header";
import ClubsGrid from "./components/ClubsGrid";

function App() {
    return (
        <Container>
            <Row>
                <Col>
                    <Header/>
                </Col>
            </Row>
            <Row>
                <ClubsGrid/>
            </Row>
        </Container>
    )
}

export default App;
