import React, {useState} from "react";
import _ from 'lodash'
import {CardGroup, Col, Collapse, Container, Row} from "reactstrap";

import ClubDisplay from "./ClubDisplay";
import ClubForm from "./ClubForm";

import {CLUBS} from "../util";

const ClubsGrid = () => {
    const [clubs, setClubs] = useState(CLUBS)
    // const [show, setShow] = useState(false)

    // const toggle = () => setShow(!show)

    const push = (data) => {
        setClubs(clubs => ([...clubs, {...data, id: _.camelCase(data.name)}]))
    }

    const remove = (id) => {
        setClubs(clubs.filter(club => club.id !== id))
    }

    return (
        <Container fluid="sm">
            <Row>
                {clubs.map((club, idx) => (
                    <Col key={`club-${idx}`}>
                        <CardGroup>
                            <ClubDisplay key={club.id} {...club} remove={() => remove(club.id)}/>
                        </CardGroup>
                    </Col>
                ))}
            </Row>
            <Row>
                <Collapse isOpen={true}>
                    <ClubForm submit={push}/>
                </Collapse>
            </Row>
        </Container>
    )
}

export default ClubsGrid
