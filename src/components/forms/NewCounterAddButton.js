import React from 'react';
import { MDBBtn } from "mdbreact";

export default ({ addClick, errorStatus }) => <MDBBtn
    className="add col-6"
    color="success"
    rounded
    onClick={addClick}
    disabled={errorStatus}
>
    Add Counter
</MDBBtn>;