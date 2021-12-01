import { React, useState } from 'react';
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
import Sparepartinput from '../SparePart/SparePartInput';

const Spareparttable = () => {
    // const {data, loading, error} = useSubscription(SubSparepartData);

    const { sparepart, loading, error, subscribeSparepart } = useGetSparepart();
    const { deleteSparepart, loadingDelete } = useDeleteSparepart();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = () => {
        handleShow();
    }

    const handleDelete = (id) => {
        deleteSparepart({
            variables: {
                id: id
            }
        });
    }

    if (loading){
        return <LoadingSvg/>
    }

    if (error){
        console.log(error);
        return null;
    }

    // console.log(data);

    const mappedData = sparepart.map((row) => {
        return {
            id: row.id,
            name: row.name, 
            stock: row.stock,
            actions: <Sparepartactions edit={() => handleEdit()} delete={() => handleDelete(row.id)} />
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
                {/* <Modal.Body>
                    <Form onSubmit={()=>{}}>
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
                </Modal.Body> */}
            </Modal>
        </div>
    );
}

export default Spareparttable;