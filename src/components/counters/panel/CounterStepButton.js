import React from 'react';
import { MDBBtn } from "mdbreact";

export default ({ item, sign, handleButtonClick }) => {

    return (
        <MDBBtn color="black" onClick={handleButtonClick} step={sign * item}>{ sign * item}</MDBBtn>
    );
}