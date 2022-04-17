import {useEffect, useState} from "react";
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";


const ClubForm = ({submit}) => {
    const [data, setData] = useState({
        name: '',
        location: '',
        genre: '',
        capacity: 100,
        threshold: 80
    })

    const [linked, setLinked] = useState(true)

    const toggleLink = () => setLinked(!linked)

    const handleChange = (event) => {
        // Get form field
        let field = event.target.name

        // Get form field value
        let value = event.target.value

        // Convert 'capacity' or 'threshold' to an integer
        if (field === 'capacity' || field === 'threshold') value = parseInt(value)

        // Update form field with new value
        setData(form => ({...form, [field]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.target)

        console.info(data)

        submit({
            name: data.get('name'),
            genre: data.get('genre'),
            location: data.get('location'),
            capacity: data.get('capacity'),
            threshold: data.get('threshold') || data.get('capacity') * 0.8
        })
    }

    useEffect(() => {
        if (linked)
            setData({
                ...data,
                threshold: Math.round(data.capacity * 0.8)
            })
    }, [data.capacity])

    return (
        <Card id="club-form">
            <CardHeader>Add a New Club</CardHeader>
            <CardBody>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <FormGroup>
                            <Label for="clubName">Name</Label>
                            <Input id="clubName" name="name" type="text" placeholder="Archibald's"
                                   onChange={handleChange}/>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label for="clubLoc">City</Label>
                            <Input id="clubLoc" name="location" type="text" placeholder="Elysium"
                                   onChange={handleChange}/>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label for="clubGenre">Music Genre</Label>
                            <Input id="clubGenre" name="genre" type="text" placeholder="Post-Ambient Medieval Jazz"
                                   onChange={handleChange}/>
                        </FormGroup>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="clubCap">Capacity</Label>
                                <Input id="clubCap" name="capacity" type="number" value={data.capacity.toString()}
                                       onChange={handleChange}/>
                            </FormGroup>
                        </Col>
                        <Col style={{maxWidth: 42 + 24, position: 'relative'}}>
                            <Button style={{position: 'absolute', bottom: 16}} type="button" className="material-icons"
                                    outline={!linked} onClick={toggleLink}>link</Button>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="clubThresh">Threshold</Label>
                                <Input id="clubThresh" name="threshold" type="number" value={data.threshold.toString()}
                                       disabled={linked} onChange={handleChange}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button type="submit">Submit</Button>
                </Form>
            </CardBody>
        </Card>
    )
}

export default ClubForm
