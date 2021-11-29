import React from 'react';
import '../../assets/css/template.css';
import Custom from './dashContent.module.css';
import Footer from '../Footer/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Chartdata from '../LineCharts/ChartData';

const Dashboardcontent = () => {
    return (
        <div id="layoutSidenav_content">
            <main>
                <Container fluid={true} className="px-4">
                    <h1 className="mt-4">Dashboard</h1>
                    <Row className="px-0 mt-4 justify-content-center">
                        <Col md="4" className={Custom.boxes}>
                            <Card border="primary">
                                <Card.Body className={`text-center d-flex justify-content-center align-items-center ${Custom.cards}`}>
                                    <span className="text-primary">60</span>
                                </Card.Body>
                            </Card>    
                        </Col>
                        <Col md="4" className={Custom.boxes}>
                            <Card border="danger">
                                <Card.Body className={`text-center d-flex justify-content-center align-items-center ${Custom.cards}`}>
                                    <span className="text-danger">60</span>
                                </Card.Body>
                            </Card>  
                        </Col>
                        <Col md="4" className={Custom.boxes}>
                            <Card border="success">
                                <Card.Body className={`text-center d-flex justify-content-center align-items-center ${Custom.cards}`}>
                                    <span className="text-success">60</span>
                                </Card.Body>
                            </Card>  
                        </Col>
                    </Row>
                    <Row className="mt-4 mb-5">
                        <Col>
                            <Container className={`bg-light px-0 ${Custom.boxChart}`}>
                                <Chartdata/>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer/>
        </div>
    );
}

export default Dashboardcontent;
