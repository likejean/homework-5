import React from 'react';
import { MDBBtn } from "mdbreact";

export default ({ handleResetClick }) => <MDBBtn
        className="reset"
        color="primary"
        rounded
        onClick={handleResetClick}
    >
        Reset
    </MDBBtn>;
