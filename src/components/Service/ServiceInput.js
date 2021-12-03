import React, {useState, useEffect} from 'react';
import { 
    Modal,
    Button,
    Form
} from 'react-bootstrap';
import useGetService from '../../hooks/useGetService';
import useInsertService from '../../hooks/useInsertService';
import LoadingSvg from '../DataTables/LoadingSvg';

const Serviceinput = (props) => {
    const { error, subscribeService } = useGetService();
    const { loadingInsert, insertService } = useInsertService();

    useEffect(() => {
        subscribeService();
    }, [subscribeService]);

    const [idSparepart, setIdSparepart] = useState(0);
    const [nama, setNama] = useState("");
    const [identitas, setIdentitas] = useState("");
    const [noHp, setNoHp] = useState("");
    const [merk, setMerk] = useState("");
    const [type, setType] = useState("");
    const [kerusakan, setKerusakan] = useState("");
    const [harga, setHarga] = useState(0);

    if (loadingInsert) {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        insertService({
            variables: {
                object: {
                    idSparepart: idSparepart,
                    nama: nama,
                    identitas: identitas,
                    noHp: noHp,
                    merk: merk,
                    type: type,
                    kerusakan: kerusakan,
                    harga: harga
                },
            },
        });
        setIdSparepart(0);
        setNama("");
        setIdentitas("");
        setNoHp("");
        setMerk("");
        setType("");
        setKerusakan("");
        setHarga(0);
    }

    return (
        <div>
            <Modal show={props.show} onHide={props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Spare Part</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label>ID Sparepart</Form.Label>
                            <Form.Control type="number" name="idSparepart" onChange={onChangeIdSparepart} placeholder="ID Sparepart..." required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Nama Lengkap</Form.Label>
                            <Form.Control type="text" name="nama" onChange={onChangeNama} placeholder="Enter Name..." required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>No Identitas</Form.Label>
                            <Form.Control type="text" name="identitas" onChange={onChangeIdentitas} placeholder="Enter No Identitas..." required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>No Handphone</Form.Label>
                            <Form.Control type="text" name="noHp" onChange={onChangeNoHp} placeholder="Enter No Handphone..." required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Merk</Form.Label>
                            <Form.Control type="text" name="merk" onChange={onChangeMerk} placeholder="Enter Merk..." required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Type</Form.Label>
                            <Form.Control type="text" name="type" onChange={onChangeType} placeholder="Enter Type..." required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Kerusakan</Form.Label>
                            <Form.Control type="text" name="kerusakan" onChange={onChangeKerusakan} placeholder="Enter Kerusakan..." required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label>Total Harga</Form.Label>
                            <Form.Control type="number" name="harga" onChange={onChangeHarga} placeholder="Stock Sparepart..." required />
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

export default Serviceinput;