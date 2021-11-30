import React from 'react';
import '../../assets/css/template.css';
import Custom from '../Dashboard/dashContent.module.css';
import Footer from '../Footer/Footer';
import { 
    Container, 
    Row, 
    Col, 
    Button 
} from 'react-bootstrap';
import { useState } from 'react';
import Spareparttable from '../DataTables/SparePartTable';
import Sparepartinput from './SparePartInput';

const Sparepartcontent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div id="layoutSidenav_content">
            <main>
                <Container fluid={true} className="px-4">
                    <h1 className="mt-4">SparePart</h1>
                    <Row className="mt-4 mb-5">
                        <Col lg="12">
                            <Container className={`px-0 ${Custom.boxChart}`}>
                                <Button variant="primary" onClick={handleShow} className={`d-flex ms-auto mb-1 ${Custom.buttonAdd}`}>
                                    Add Data
                                </Button>
                                <Sparepartinput show={show} hide={handleShow} close={handleClose} />
                                <Spareparttable/>
                            </Container>
                        </Col> 
                    </Row>
                </Container>
            </main>
            <Footer/>
        </div>
    );
}

export default Sparepartcontent;
