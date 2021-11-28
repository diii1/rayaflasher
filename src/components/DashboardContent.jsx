import React from 'react';
import '../assets/css/template.css';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboardcontent = () => {
    return (
        <div id="layoutSidenav_content">
            <main>
                <Container fluid={true} className="px-4">
                    <h1 className="mt-4">Dashboard</h1>
                    
                </Container>
            </main>
            <Footer/>
        </div>
    );
}

export default Dashboardcontent;
