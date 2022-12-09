import {useEffect, useState} from "react";
import validator from "validator/es";
import {Button, Card, CardBody, CardHeader, Col, Form, FormFeedback, FormGroup, Input, Label, Row} from "reactstrap";


const ClubForm = ({submit}) => {
    const [data, setData] = useState({
        name: '',
        city: '',
        genre: '',
        capacity: 100,
        threshold: 80
    })
    const [errors, setErrors] = useState({})

    const [linked, setLinked] = useState(true)

    const toggleLink = () => setLinked(!linked)

    const validate = (field, value) => {
        if (validator.isEmpty(value))
            setErrors(errors => ({...errors, [field]: 'Required'}))
        else setErrors(errors => ({...errors, [field]: ''}))
    }

    const handleChange = (event) => {
        // Get form field
        let field = event.target.name

        // Get form field value
        let value = event.target.value

        // Update form field with new value
        setData(form => ({...form, [field]: value}))

        validate(field, value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.target)

        submit({
            name: data.get('name'),
            genre: data.get('genre'),
            city: data.get('city'),
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
    }, [data.capacity, data, linked])

    return (
        <Card id="club-form">
            <CardHeader>Add a New Club</CardHeader>
            <CardBody>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <FormGroup>
                            <Label for="clubName">Name</Label>
                            <Input id="clubName" name="name" type="text" placeholder="Archibald's"
                                   invalid={!!errors['name']} onChange={handleChange}/>
                            <FormFeedback>A club name is required</FormFeedback>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label for="clubLoc">City</Label>
                            <Input id="clubLoc" name="city" type="text" placeholder="Elysium"
                                   invalid={!!errors['location']} onChange={handleChange}/>
                            <FormFeedback>A club city is required</FormFeedback>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label for="clubGenre">Music Genre</Label>
                            <Input id="clubGenre" name="genre" type="text" placeholder="Post-Ambient Medieval Jazz"
                                   invalid={!!errors['genre']} onChange={handleChange}/>
                            <FormFeedback>A club music genre is required</FormFeedback>
                        </FormGroup>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="clubCap">Capacity</Label>
                                <Input id="clubCap" name="capacity" type="number" value={data.capacity.toString()}
                                       invalid={!!errors['capacity']} onChange={handleChange}/>
                                <FormFeedback>A club capacity is required</FormFeedback>
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
                                       disabled={linked} invalid={!!errors['threshold']} onChange={handleChange}/>
                                <FormFeedback>A club capacity threshold is required</FormFeedback>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button style={{width: '100%'}} type="submit">Submit</Button>
                </Form>
            </CardBody>
        </Card>
    )
}

export default ClubForm
