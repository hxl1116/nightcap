import React from "react";
import {CardGroup, Col, Container, Row} from "reactstrap";

import ClubDisplay from "./ClubDisplay";

import {CLUBS} from "../util";
import ClubForm from "./ClubForm";

const ClubsGrid = ({volumes}) => {
    return (
        <Container fluid="sm">
            <Row>
                {CLUBS.map((club, idx) => (
                    <Col key={`club-${idx}`}>
                        <CardGroup>
                            <ClubDisplay key={club.name} {...club}/>
                        </CardGroup>
                    </Col>
                ))}
            </Row>
            <Row>
                <ClubForm/>
            </Row>
        </Container>
    )
}

export default ClubsGrid
