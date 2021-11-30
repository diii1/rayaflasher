import React from 'react';
import '../../assets/css/template.css';
import Custom from '../Dashboard/dashContent.module.css';
import Footer from '../Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import Spareparttable from '../DataTables/SparePartTable';

const Sparepartcontent = () => {
    return (
        <div id="layoutSidenav_content">
            <main>
                <Container fluid={true} className="px-4">
                    <h1 className="mt-4">SparePart</h1>
                    <Row className="mt-4 mb-5">
                        <Col lg="12">
                            <Container className={`px-0 ${Custom.boxChart}`}>
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
