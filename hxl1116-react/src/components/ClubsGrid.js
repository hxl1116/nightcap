import React from "react";
import {CardGroup, Col, Container, Row} from "reactstrap";

import Club from "./Club";

import {CLUBS} from "../util";

const ClubsGrid = ({volumes}) => {
    return (
        <Container>
            <Row>
                {CLUBS.map(club => (
                    <Col>
                        <CardGroup>
                            <Club key={club.name} {...club} volume={volumes[club.name]}/>
                        </CardGroup>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ClubsGrid
