import {useState} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";


const ClubForm = ({submit}) => {
    const [form, setForm] = useState({
        name: '',
        location: '',
        genre: '',
        capacity: 100,
        threshold: 80
    })

    const handleChange = (event) => {
        // Get form field
        let field = event.target.name

        // Get form field value
        let value = event.target.value

        // Convert 'capacity' or 'threshold' to an integer
        if (field === 'capacity' || field === 'threshold') value = parseInt(value)

        // Update form field with new value
        setForm(form => ({...form, [field]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.target)

        submit({
            name: data.get('clubName'),
            genre: data.get('clubGenre'),
            location: data.get('clubLoc'),
            capacity: data.get('clubCap'),
            threshold: data.get('clubThresh')
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="clubName" hidden>Name</Label>
                <Input id="clubName" name="name" type="text" placeholder="Name" onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="clubLoc" hidden>Location</Label>
                <Input id="clubLoc" name="location" type="text" placeholder="Location" onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="clubGenre" hidden>Music Genre</Label>
                <Input id="clubGenre" name="genre" type="text" placeholder="Music Genre" onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="clubCap" hidden>Capacity</Label>
                <Input id="clubCap" name="capacity" type="number" defaultValue={form.capacity} onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="clubThresh" hidden>Threshold</Label>
                <Input id="clubThresh" name="threshold" type="number" defaultValue={form.threshold}
                       onChange={handleChange}/>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default ClubForm
