import {useRef, useState} from "react";
import {Button, Card, CardBody, CardHeader, Form, FormGroup, Input, Label} from "reactstrap";


const ClubForm = ({submit}) => {
    const [data, setData] = useState({
        name: '',
        location: '',
        genre: '',
        capacity: 100,
        threshold: 80
    })

    const form = useRef()

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

        submit({
            name: data.get('name'),
            genre: data.get('genre'),
            location: data.get('location'),
            capacity: data.get('capacity'),
            threshold: data.get('threshold')
        })
    }

    return (
        <Card>
            <CardHeader>Add a New Club</CardHeader>
            <CardBody>
                <Form innerRef={form} onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="clubName">Name</Label>
                        <Input id="clubName" name="name" type="text" placeholder="Archibald's" onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="clubLoc">City</Label>
                        <Input id="clubLoc" name="location" type="text" placeholder="Elysium" onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="clubGenre">Music Genre</Label>
                        <Input id="clubGenre" name="genre" type="text" placeholder="Post-Ambient Medieval Jazz"
                               onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="clubCap">Capacity</Label>
                        <Input id="clubCap" name="capacity" type="number" defaultValue={data.capacity}
                               onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="clubThresh">Threshold</Label>
                        <Input id="clubThresh" name="threshold" type="number" defaultValue={data.threshold}
                               onChange={handleChange}/>
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </CardBody>
        </Card>
    )
}

export default ClubForm
