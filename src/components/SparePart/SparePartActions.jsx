import React from 'react';
import { Button } from 'react-bootstrap';

const Sparepartactions = (props) => {
    return (
        <div>
            <Button variant="outline-warning" className="m-1" onClick={props.edit}>
                Edit
            </Button>
            <Button variant="outline-danger" className="m-1" onClick={props.delete}>
                Delete
            </Button>
        </div>
    );
}

export default Sparepartactions;
