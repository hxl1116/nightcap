import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "reactstrap";

import ClubDisplay from "./ClubDisplay";
import ClubForm from "./ClubForm";

import {deleteClub, getClubs, postClub, putClub} from "../utils";

const ClubsGrid = ({filter}) => {
    const [clubs, setClubs] = useState([])

    const push = (data) => {
        // TODO: Add error handling, alerts
        postClub(data)
            .then((res) => {
                console.log(res.status, res.statusText)
            })
            .finally(() => {
                getClubs(setClubs)
            })
    }

    const remove = (id) => {
        // TODO: Add error handling, alerts
        deleteClub(id)
            .then((res) => {
                console.log(res.status, res.statusText)
            })
            .finally(() => {
                getClubs(setClubs)
            })
    }

    const edit = (id, data) => {
        // TODO: Add error handling, alerts
        putClub(id, data)
            .then((res) => {
                console.log(res.status, res.statusText)
            })
            .finally(() => {
                getClubs(setClubs)
            })
    }

    useEffect(() => {
        getClubs(setClubs)
    }, [])

    return (
        <Container>
            <Row>
                {clubs.map((club, idx) => (
                    filter ? (
                        club.location.includes(filter) &&
                        <Col key={`club-${idx}`} sm={1} lg={3}>
                            <ClubDisplay key={club.id} {...club} remove={() => remove(club.id)} handleEdit={edit}/>
                        </Col>
                    ) : (
                        <Col key={`club-${idx}`} sm={1} lg={3}>
                            <ClubDisplay key={club.id} {...club} remove={() => remove(club.id)} handleEdit={edit}/>
                        </Col>
                    )
                ))}
            </Row>
            <Row>
                <Col>
                    <ClubForm submit={push}/>
                </Col>
            </Row>
        </Container>
    )
}

export default ClubsGrid
