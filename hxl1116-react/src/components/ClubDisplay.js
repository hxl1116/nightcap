import React, {useEffect, useReducer, useState} from "react";
import {Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Progress} from "reactstrap";

import {CAP_MSG, clubReducer} from "../util";

const ClubDisplay = ({name, loc, theme, capacity, threshold, remove}) => {
    // noinspection JSCheckFunctionSignatures
    const [club, dispatch] = useReducer(clubReducer, {max: capacity, vol: 0})
    const [status, setStatus] = useState('normal')
    const [message, setMessage] = useState('')

    // Adjust message based on the club's volume
    useEffect(() => {
        if (club.vol >= threshold && club.vol < capacity) {
            setMessage(CAP_MSG.caution.message)
            setStatus(CAP_MSG.caution.color)
        } else if (club.vol < capacity) {
            setMessage(CAP_MSG.normal.message)
            setStatus(CAP_MSG.normal.color)
        } else {
            setMessage(CAP_MSG.danger.message)
            setStatus(CAP_MSG.danger.color)
        }
    }, [club.vol, capacity, threshold])

    // TODO: Add sizing for desktop, mobile; add edit, delete buttons
    // noinspection JSCheckFunctionSignatures
    return (
        <Card className="text-center club-display">
            <CardHeader>
                <Progress animated value={club.vol} max={capacity} color={status}/>
            </CardHeader>
            <CardBody>
                <CardTitle tag="h5">{name}</CardTitle>
                <CardText>location: {loc || 'City'}</CardText>
                <CardText>theme: {theme || 'Music'}</CardText>
                <CardText>{club.vol}</CardText>
                <CardText>{message}</CardText>
                <ButtonGroup vertical>
                    <Button outline className="material-icons">edit</Button>
                    <Button outline className="material-icons" onClick={remove}>close</Button>
                </ButtonGroup>
            </CardBody>
            <CardFooter>
                <ButtonGroup>
                    <Button outline color="secondary" disabled={club.vol === 0}
                            onClick={() => dispatch({type: 'decrement'})}>-</Button>
                    <Button outline color="secondary" disabled={club.vol === capacity}
                            onClick={() => dispatch({type: 'increment'})}>+</Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default ClubDisplay
