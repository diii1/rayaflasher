import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useLazyQuery } from '@apollo/client';
import Custom from './custom.module.css';
import BlueImg from '../../assets/img/blue-solid.svg';
import GreenImg from '../../assets/img/green.svg';
import Logo from '../../assets/img/logo.png';
import { User } from '../../graphQL/query';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fetchUser] = useLazyQuery(User);

    const handleLogin = async(e) => {
        e.preventDefault();
        console.log("Heytayo");

        const Users = await fetchUser({variables:{email:email}});
        // console.log("ysers", Users);
        const userData = Users?.data?.user.find((user) => {
            return user.email === email;
        });
        console.log("email", email);
        console.log("pswd", password);
        console.log("userdata", userData);
        if (password === userData?.password){
            localStorage.setItem("loggedIn", "true");
            window.location.href = "/";
        }
    }
    return (
        <div className="loginPage">
            <div className={`fixed-bottom ${Custom.box}`}>
                <img className={Custom.bgSvg} src={BlueImg} alt="bg" />
                <img className={Custom.bgSvg} src={GreenImg} alt="bg" />
            </div>
            <div className={`p-0 vh-100 ${Custom.layer}`}></div> 
            <Container fluid={true} className={Custom.content}>
                <Row className="d-flex align-items-center justify-content-center vh-100">
                    <Col md="3">
                        <Container>
                            <div className={`d-flex justify-content-center ${Custom.imgLogo}`}>
                                <img src={Logo} alt="logo" className={Custom.logo} />
                            </div>
                            <h2 className={`text-center ${Custom.title}`}>Sign In</h2>
                            <form className="mt-4" onSubmit={handleLogin}>
                                <div className="mb-4">
                                    <input type="text" onChange={(e) => {setEmail(e.target.value)}} className={`form-control ${Custom.inputLogin}`} placeholder="Username" />
                                </div>
                                <div className="mb-4">
                                    <input type="password" onChange={(e) => {setPassword(e.target.value)}} className={`form-control ${Custom.inputLogin}`} placeholder="Password" />
                                </div>
                                <Button as="input" variant="success" type="submit" className={`w-100 ${Custom.btnLogin}`} value="Login" />
                            </form>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
