import React, {useEffect, useState} from "react";
import {Col, Container, Row, Toast, ToastBody, ToastHeader} from "reactstrap";

import ClubDisplay from "./ClubDisplay";
import ClubForm from "./ClubForm";

import {deleteClub, getClubs, postClub, putClub} from "../utils";

const ClubsGrid = ({filter}) => {
    const [clubs, setClubs] = useState([])
    const [msg, setMsg] = useState('')
    const [show, setShow] = useState(false)

    const displayMsg = (msg) => {
        setMsg(msg)
        setShow(true)
        window.setTimeout(() => {
            setShow(false)
        }, 2000)
    }

    const push = (data) => {
        postClub(data)
            .then((res) => {
                console.log(res.status, res.statusText)
            })
            .finally(() => {
                refresh()
                displayMsg('Club added')
            })
    }

    const remove = (id) => {
        deleteClub(id)
            .then((res) => {
                console.log(res.status, res.statusText)
            })
            .finally(() => {
                refresh()
                displayMsg('Club removed')
            })
    }

    const edit = (id, data) => {
        putClub(id, data)
            .then((res) => {
                console.log(res.status, res.statusText)
            })
            .finally(() => {
                refresh()
                displayMsg('Club updated')
            })
    }

    const refresh = () => {
        getClubs(setClubs)
    }

    useEffect(() => {
        refresh()
    }, [])

    // noinspection RequiredAttributes
    return (
        <Container>
            <Row>
                {clubs.length > 0 && clubs.map((club, idx) => (
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
                <Col sm={1} lg={12}>
                    <ClubForm submit={push}/>
                </Col>
            </Row>
            <Toast isOpen={show}>
                <ToastHeader icon="info">NightCap</ToastHeader>
                <ToastBody>{msg}</ToastBody>
            </Toast>
        </Container>
    )
}

export default ClubsGrid
