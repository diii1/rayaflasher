import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
// import { SubSparepartData } from '../../graphQL/subscription';
// import { useSubscription } from '@apollo/client';
import { 
    Modal,
    Button,
    Form
} from 'react-bootstrap';
import Sparepartactions from '../SparePart/SparePartActions';
import LoadingSvg from './LoadingSvg';
import useDeleteSparepart from '../../hooks/useDeleteSparepart';
import useGetSparepart from '../../hooks/useGetSparepart';
import useUpdateSparepart from '../../hooks/useUpdateSparepart';

const Spareparttable = () => {
    const { sparepart, loading, error } = useGetSparepart();
    const { deleteSparepart } = useDeleteSparepart();
    const { updateSparepart } = useUpdateSparepart();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [stock, setStock] = useState(0);
    
    const handleEdit = (id) => {
        handleShow();
        const item = sparepart.find((v) => v.id === id);
        setId(item?.id);
        setName(item?.name);
        setStock(item?.stock);
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

    const handleDelete = (id) => {
        deleteSparepart({
            variables: {
                id: id
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateSparepart({
            variables:{
                id: id,
                name: name,
                stock: stock,
            }
        })
    }

    if (loading){
        return <LoadingSvg/>
    }

    if (error){
        console.log(error);
        return null;
    }

    const mappedData = sparepart.map((row) => {
        return {
            id: row.id,
            name: row.name, 
            stock: row.stock,
            actions: <Sparepartactions edit={() => handleEdit(row.id)} delete={() => handleDelete(row.id)} />
        };
    });

    const column = [
        {
            name: 'ID',
            selector: 'id',
            sortable: true
        },
        {
            name: 'Nama',
            selector: 'name',
            sortable: true
        },
        {
            name: 'Stock',
            selector: 'stock',
            sortable: true
        },
        {
            name: 'Actions',
            selector: 'actions',
            sortable: false 
        }
        
    ];
    
    const allSparepartData ={
        rowsPerPageText : 'Fill Data',
        rangeSeparatorText : 'to',
        selectAllRowsItem : true,
        selectAllRowsText : 'getData'
    }
    

    return (
        <div className="table-responsive">
            {!loading && (
                <DataTable 
                    columns={column} 
                    data={mappedData}
                    title="Data Spare Part"
                    pagination 
                    paginationComponentOptions={allSparepartData}
                    fixedHeader
                    fixedHeaderScrollHeight="532px"
                />
            )}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Spare Part</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Nama Spare Part</Form.Label>
                            <Form.Control type="text" name="name" onChange={onChangeName} value={name} placeholder="Enter Name Sparepart..." required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="number" name="stock" onChange={onChangeStock} value={stock} placeholder="Stock Sparepart..." required />
                        </Form.Group>
                        <div className="d-flex justify-content-end">
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

export default Spareparttable;