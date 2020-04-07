import React from 'react';
import { MDBAlert } from 'mdbreact';

export default ( {error} ) => {
    return (
        <MDBAlert className='row align-items-center justify-content-center' color="danger" >
            <span style={{ color: 'red' }}>ERROR: {error} </span>
        </MDBAlert>
    );
}
