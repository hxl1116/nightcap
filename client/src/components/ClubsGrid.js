import React, {useEffect, useState} from "react";
import {Col, Container, Row, Toast, ToastBody, ToastHeader} from "reactstrap";

import ClubDisplay from "./ClubDisplay";
import ClubForm from "./ClubForm";

import {deleteClub, getClubs, postClub, putClub} from "../utils";

const ClubsGrid = ({filter}) => {
    const [clubs, setClubs] = useState([])
    const [status, setStatus] = useState({})
    const [show, setShow] = useState(false)

    const displayMsg = (msg, color) => {
        setStatus({msg, color})
        setShow(true)
        window.setTimeout(() => {
            setShow(false)
        }, 2000)
    }

    const push = (data) => {
        postClub(data)
            .then(({status}) => {
                if (status === 201) displayMsg('Club added', 'success')
                else displayMsg('Error adding club', 'danger')
            })
            .finally(() => {
                refresh()
            })
    }

    const remove = (id) => {
        deleteClub(id)
            .then(({status}) => {
                if (status === 200) displayMsg('Club removed', 'success')
                else displayMsg('Error removing club', 'danger')
            })
            .finally(() => {
                refresh()
            })
    }

    const edit = (id, data) => {
        putClub(id, data)
            .then(({status}) => {
                if (status === 201) displayMsg('Club updated', 'success')
                else displayMsg('Error updating club', 'danger')
            })
            .finally(() => {
                refresh()
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
                <ToastHeader icon={status.color}>NightCap</ToastHeader>
                <ToastBody>{status.msg}</ToastBody>
            </Toast>
        </Container>
    )
}

export default ClubsGrid
