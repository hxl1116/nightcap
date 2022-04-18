import React, {useState} from "react";
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

const ClubEditForm = ({id, name, location, genre, toggle, edit}) => {
    const [data, setData] = useState({...{name, location, genre}})

    const handleChange = (event) => {
        let field = event.target.name
        let value = event.target.value

        setData(data => ({...data, [field]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        edit(id, data)

        toggle()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup row>
                <Label for="clubName" sm={3}>Name</Label>
                <Col sm={9}>
                    <Input id="clubName" name="name" type="text" value={data.name} onChange={handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="clubLoc" sm={3}>City</Label>
                <Col sm={9}>
                    <Input id="clubLoc" name="location" type="text" value={data.location} onChange={handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="clubGenre" sm={3}>Genre</Label>
                <Col sm={9}>
                    <Input id="clubGenre" name="genre" type="text" value={data.genre} onChange={handleChange}/>
                </Col>
            </FormGroup>
            <Button className="material-icons" type="submit" outline>check</Button>
        </Form>
    )
}

export default ClubEditForm
