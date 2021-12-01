import { useState, React } from 'react';
import Custom from '../Dashboard/dashContent.module.css';
import Footer from '../Footer/Footer';
import { 
    Container, 
    Row, 
    Col, 
    Button 
} from 'react-bootstrap';
import Servicetable from '../DataTables/ServiceTable';

const Servicecontent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div id="layoutSidenav_content">
            <main>
                <Container fluid={true} className="px-4">
                    <h1 className="mt-4">Service</h1>
                    <Row className="mt-4 mb-5">
                        <Col md="12">
                            <Container className={`px-0 ${Custom.boxChart}`}>
                                <Button variant="primary" onClick={handleShow} className={`d-flex ms-auto mb-1 ${Custom.buttonAdd}`}>
                                    Add Data
                                </Button>
                                <Servicetable/>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer/>
        </div>
    );
}

export default Servicecontent;
