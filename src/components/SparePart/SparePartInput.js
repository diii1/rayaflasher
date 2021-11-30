import React from 'react';
import { 
    Modal,
    Button,
    Form
} from 'react-bootstrap';
import useGetSparepart from '../../hooks/useGetSparepart';
import useInsertSparepart from '../../hooks/useInsertSparepart';
import { useState, useEffect } from 'react';

const Sparepartinput = (props) => {
    const { sparepart, loading, error, subscribeSparepart } = useGetSparepart();
    const { insertSparepart, loadingInsert } = useInsertSparepart();

    useEffect(() => {
        subscribeSparepart();
    }, []);

    // const [list, setList] = useState([]);
    const [name, setName] = useState("");
    const [stock, setStock] = useState("");

    // if (loading){
    //     return "wait...";
    // }

    if (error){
        console.log(error);
        return null;
    }

    const onChangeName = (e) => {
        if(e.target){
            setName(e.target.value);
        }
    }

    const onChangeStock = (e) => {
        if(e.target){
            setStock(e.target.value);
        }
    }

    const handleInput = (e) => {
        e.preventDefault();
        insertSparepart({
            variables:{
                object: {
                    name: name,
                    stock: stock
                },
            },
        });
        setName("");
        setStock("");
    }

    return (
        <div>
            <Modal show={props.show} onHide={props.hide}>
                <Modal.Header>
                    <Modal.Title>Add Spare Part</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleInput}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Nama Spare Part</Form.Label>
                            <Form.Control type="text" name="name" onChange={onChangeName} placeholder="Enter Name Sparepart..." required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="number" name="stock" onChange={onChangeStock} placeholder="Stock Sparepart..." required />
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button variant="danger" onClick={props.close}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit" className="ms-3">
                                Submit Data
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Sparepartinput;
