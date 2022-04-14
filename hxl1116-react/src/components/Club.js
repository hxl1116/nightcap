import React, {useEffect, useState} from "react";
import {CAP_MSG} from "../util";
import {Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Progress} from "reactstrap";

const Club = ({id, name, text, volume, capacity, threshold}) => {
    // TODO: Add volume state
    const [status, setStatus] = useState('normal')
    const [message, setMessage] = useState(null)

    // Adjust message based on the club's volume
    useEffect(() => {
        if (volume >= threshold && volume < capacity) {
            setMessage(CAP_MSG.caution)
            setStatus('caution')
        } else if (volume < capacity) {
            setMessage(CAP_MSG.normal)
            setStatus('normal')
        } else {
            setMessage(CAP_MSG.restricted)
            setStatus('restricted')
        }
    }, [volume, capacity, threshold])

    // TODO: Add sizing for desktop, mobile; adjust outline on volume change
    return (
        <Card className="text-center">
            <CardHeader>
                {/* TODO: Adjust progress slider on volume change, add ref (?), message (?) */}
                <Progress animated value={volume}/>
            </CardHeader>
            <CardBody>
                <CardTitle tag="h5">{text}</CardTitle>
                <CardText>{volume}</CardText>
                <CardText>Placeholder</CardText>
            </CardBody>
            <CardFooter>
                <ButtonGroup>
                    <Button outline color="secondary">-</Button>
                    <Button outline color="secondary">+</Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default Club
