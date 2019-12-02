import React from 'react';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .fon {
        background: white;
    }
`;

const Layout = (props) => (
    <Styles >
        <Container className="fon">
            {props.children}
        </Container>
    </Styles>
);
export default Layout;
