import React from 'react';
import cn from 'classnames';
import {Nav, Badge} from 'react-bootstrap';
import Styles from './navbrStyles';

const Navbar =({countNewElements, ...props})=>{

    return(<Styles>
        <Nav className={cn("flex-column", "nav-block")}  variant="tabs" justify
              defaultActiveKey="/home">
            <Nav.Item className="nav-item-block">
                <Nav.Link href="/profile" >Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-block">
                <Nav.Link href="/dialogs" eventKey="/dialogs">Messages
                    {(countNewElements>0)&&
                        <Badge variant="success" className="newMessages">
                            {countNewElements}
                        </Badge>}
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-block">
                <Nav.Link href="/friends">Friends</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-block">
                <Nav.Link href="/users">Users</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-block">
                <Nav.Link href="/news">News</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-block">
                <Nav.Link href="/settings">Settings</Nav.Link>
            </Nav.Item>
        </Nav>
    </Styles>
    );
}

export default Navbar;
