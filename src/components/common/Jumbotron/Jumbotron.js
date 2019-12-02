import React from 'react';
import {Jumbotron as Jumbo} from 'react-bootstrap';
import styled from 'styled-components';
import limassol from '../../../assets/images/limassol.png';

const Styles = styled.div`
    .jumbo {
        background: url(${limassol}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        padding: 0;
        margin: 0;
        position: relative;
        z-index: -2;
    }
    .overlay {
        background: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`;

const Jumbotron = (props) => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
                {props.children}
        </Jumbo>
    </Styles>
);
export default Jumbotron;
