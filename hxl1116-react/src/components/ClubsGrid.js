import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "reactstrap";
import _ from 'lodash'

import ClubDisplay from "./ClubDisplay";
import ClubForm from "./ClubForm";

import {fetchClubs} from "../utils";

const ClubsGrid = ({filter}) => {
    const [clubs, setClubs] = useState([])
    const push = (data) => {
        setClubs(clubs => ([...clubs, {...data, id: _.camelCase(data.name)}]))
    }

    const remove = (id) => {
        setClubs(clubs.filter(club => club.id !== id))
    }

    const edit = (id, data) => {
        let idx = clubs.findIndex(club => club.id === id)

        remove(id)

        setClubs([...clubs.slice(0, idx), {...data, id}, ...clubs.slice(idx + 1)])
    }

    useEffect(() => {
        fetchClubs(setClubs)
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
