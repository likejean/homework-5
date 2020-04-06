import React from 'react';
import {MDBBtn} from "mdbreact";

export default ({ deleteClick, index }) => <MDBBtn
        id={index}
        className="delete"
        color="danger"
        rounded
        onClick={deleteClick}
    >
        Delete
    </MDBBtn>