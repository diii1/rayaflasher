import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { 
    Modal,
    Button,
    Form
} from 'react-bootstrap';
import LoadingSvg from './LoadingSvg';
import useGetService from '../../hooks/useGetService';
import Serviceactions from '../Service/ServiceActions';
import useDeleteService from '../../hooks/useDeleteService';
import useUpdateService from '../../hooks/useUpdateService';

const Servicetable = () => {
    const { service, loading, error } = useGetService();
    const { deleteService, loadingDelete } = useDeleteService();
    const { updateService, loadingUpdate } = useUpdateService();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [id, setId] = useState(0);
    const [idSparepart, setIdSparepart] = useState(0);
    const [nama, setNama] = useState("");
    const [identitas, setIdentitas] = useState("");
    const [noHp, setNoHp] = useState("");
    const [merk, setMerk] = useState("");
    const [type, setType] = useState("");
    const [kerusakan, setKerusakan] = useState("");
    const [harga, setHarga] = useState(0);

    const handleEdit = (id) => {
        handleShow();
        const item = service.find((v) => v.id === id);
        setId(item?.id);
        setIdSparepart(item?.sparePart?.id);
        setNama(item?.nama);
        setIdentitas(item?.identitas);
        setNoHp(item?.noHp);
        setMerk(item?.merk);
        setType(item?.type);
        setKerusakan(item?.kerusakan);
        setHarga(item?.harga);
    }

    if (loading){
        return <LoadingSvg/>
    }

    if (error){
        console.log(error);
        return null;
    }

    const onChangeIdSparepart = (e) => {
        if(e.target){
            setIdSparepart(e.target.value);
        }
    }

    const onChangeNama = (e) => {
        if(e.target){
            setNama(e.target.value);
        }
    }

    const onChangeIdentitas = (e) => {
        if(e.target){
            setIdentitas(e.target.value);
        }
    }

    const onChangeNoHp = (e) => {
        if(e.target){
            setNoHp(e.target.value);
        }
    }

    const onChangeMerk = (e) => {
        if(e.target){
            setMerk(e.target.value);
        }
    }

    const onChangeType = (e) => {
        if(e.target){
            setType(e.target.value);
        }
    }

    const onChangeKerusakan = (e) => {
        if(e.target){
            setKerusakan(e.target.value);
        }
    }

    const onChangeHarga = (e) => {
        if(e.target){
            setHarga(e.target.value);
        }
    }
    
    const handleDelete = (id) => {
        deleteService({
            variables: {
                id: id
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateService({
            variables:{
                id: id,
                idSparepart: idSparepart, 
                nama: nama, 
                identitas: identitas, 
                noHp: noHp, 
                merk: merk, 
                type: type, 
                kerusakan: kerusakan, 
                harga: harga
            }
        })
    }

    const mappedData = service.map((row) => {
        return {
            id: row.id,
            nama: row.nama, 
            identitas: row.identitas,
            noHp: row.noHp,
            merk: row.merk,
            type: row.type,
            kerusakan: row.kerusakan,
            sparePart: row.sparePart.name,
            harga: row.harga,
            actions: <Serviceactions edit={() => handleEdit(row.id)} delete={() => handleDelete(row.id)} />
        };
    });

    const column = [
        {
            name: 'ID',
            selector: 'id',
            maxWidth: "80px",
            sortable: true
        },
        {
            name: 'Nama',
            selector: 'nama',
            maxWidth: "100px",
            sortable: true
        },
        {
            name: 'No Identitas',
            selector: 'identitas',
            maxWidth: "150px",
            sortable: true
        },
        {
            name: 'No HP',
            selector: 'noHp',
            maxWidth: "160px",
            sortable: true
        },
        {
            name: 'Merk',
            selector: 'merk',
            maxWidth: "50px",
            sortable: true
        },
        {
            name: 'Type',
            selector: 'type',
            maxWidth: "50px",
            sortable: true
        },
        {
            name: 'Kerusakan',
            selector: 'kerusakan',
            maxWidth: "150px",
            sortable: true
        },
        {
            name: 'Sparepart',
            selector: 'sparePart',
            maxWidth: "100px",
            sortable: true
        },
        {
            name: 'Harga',
            selector: 'harga',
            maxWidth: "100px",
            sortable: true
        },
        {
            name: 'Actions',
            selector: 'actions',
            sortable: false 
        }
        
    ];
    
    const allServiceData ={
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
                    title="Data Service"
                    pagination 
                    paginationComponentOptions={allServiceData}
                    fixedHeader
                    fixedHeaderScrollHeight="532px"
                />
            )}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Spare Part</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label>ID Sparepart</Form.Label>
                            <Form.Control type="number" name="idSparepart" onChange={onChangeIdSparepart} value={idSparepart} placeholder="ID Sparepart..." required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Nama Lengkap</Form.Label>
                            <Form.Control type="text" name="nama" onChange={onChangeNama} value={nama} placeholder="Enter Name..." required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>No Identitas</Form.Label>
                            <Form.Control type="text" name="identitas" onChange={onChangeIdentitas} value={identitas} placeholder="Enter No Identitas..." required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>No Handphone</Form.Label>
                            <Form.Control type="text" name="noHp" onChange={onChangeNoHp} value={noHp} placeholder="Enter No Handphone..." required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Merk</Form.Label>
                            <Form.Control type="text" name="merk" onChange={onChangeMerk} value={merk} placeholder="Enter Merk..." required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Type</Form.Label>
                            <Form.Control type="text" name="type" onChange={onChangeType} value={type} placeholder="Enter Type..." required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Kerusakan</Form.Label>
                            <Form.Control type="text" name="kerusakan" onChange={onChangeKerusakan} value={kerusakan} placeholder="Enter Kerusakan..." required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label>Total Harga</Form.Label>
                            <Form.Control type="number" name="harga" onChange={onChangeHarga} value={harga} placeholder="Stock Sparepart..." required />
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

export default Servicetable;
