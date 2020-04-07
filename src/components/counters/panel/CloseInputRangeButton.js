import React from 'react';
import { MDBBtn } from "mdbreact";

export default ({ name, inputCloseClick }) => {

    return (
        <MDBBtn color="danger" rounded outline className="close-button" onClick={inputCloseClick} name={name}>
            X
        </MDBBtn>
    );
}

