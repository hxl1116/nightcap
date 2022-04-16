import React, {useEffect, useReducer, useState} from "react";
import {CAP_MSG} from "../util";
import {Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Progress} from "reactstrap";

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            // Increment club volume
            if (state.vol < state.max) return {...state, vol: state.vol++}
            // Bail out of dispatch
            else return state
        case 'decrement':
            // Decrement club volume
            if (state.vol > 0) return {...state, vol: state.vol--}
            // Bail out of dispatch
            else return state
        default:
            throw new Error(`Unknown type: ${action.type}`)
    }
}

const ClubDisplay = ({id, name, text, loc, theme, capacity, threshold}) => {
    // noinspection JSCheckFunctionSignatures
    const [club, dispatch] = useReducer(reducer, {max: capacity, vol: 0})
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

    // TODO: Add sizing for desktop, mobile
    // noinspection JSCheckFunctionSignatures
    return (
        <Card className="text-center">
            <CardHeader>
                <Progress animated value={club.vol} max={capacity} color={status}/>
            </CardHeader>
            <CardBody>
                <CardTitle tag="h5">{text}</CardTitle>
                <CardText>location: {loc || 'City'}</CardText>
                <CardText>theme: {theme || 'Music'}</CardText>
                <CardText>{club.vol}</CardText>
                <CardText>{message}</CardText>
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
