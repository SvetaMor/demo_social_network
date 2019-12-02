import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import Styles from './headerStyles';

const Header = (props) => {
    return(
        <Styles>
            <Navbar  expand="lg">
                <img className="headerImg" alt=''
                     src='https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png'/>
                <Navbar.Brand href="/">New social network</Navbar.Brand>
                <div className="ml-auto">
                    {props.isAuth
                        ? (<div>{props.login} - <Button variant="outline-warning"
                                                        onClick={props.logout}>
                                                        Log out
                                                </Button>
                            </div>)
                        : <Nav.Item>
                            <Nav.Link href='/login'>Login</Nav.Link>
                          </Nav.Item>}
                </div>
            </Navbar>
        </Styles>


    );
}

export default Header;
