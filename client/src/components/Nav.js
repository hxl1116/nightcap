import React from "react";
import {Input, InputGroup, InputGroupText, Navbar, NavbarBrand, NavbarText} from "reactstrap";

const Nav = ({filter, setFilter}) => {
    const handleChange = (event) => {
        setFilter(event.target.value)
    }

    return (
        <Navbar container light>
            <NavbarBrand>NightCap</NavbarBrand>
            <NavbarText>
                <InputGroup>
                    <InputGroupText className="material-icons">search</InputGroupText>
                    <Input placeholder="search by city" value={filter} onChange={handleChange}></Input>
                </InputGroup>
            </NavbarText>
        </Navbar>
    )
}

export default Nav
