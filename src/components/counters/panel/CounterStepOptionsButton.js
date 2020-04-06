import React from 'react';
import { MDBBtn } from "mdbreact";

export default ({ name, stepOptionsClick }) => {
    return (
        <MDBBtn outline color="info" name={name} onClick={stepOptionsClick}>Change Step Options?</MDBBtn>
    );
}