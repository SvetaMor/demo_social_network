import styled from 'styled-components';

const Styles = styled.div`
    .form-own-message {
        background: #DFFBDF;
        color: #000;
    }
    .form-message {
        background: #FFFBDF;
        color: #000;
    }
    .form-sender {
        background: #FFF;
        color: #FF8C00;
    }
    .form-own-sender {
        background: #FFF;
        color: #228B22;
    }
    .viewed-message {
        background: #AFFFDD;
        color: #000;
    }
    .button-blok {
        margin-left: 5px;
    }
    .form-message, .form-own-message, .viewed-message {
        cursor: pointer;
    }
    .date-block {
        margin-left: auto;
        margin-right: auto;
        width: 8em
    }
    .companion-photo {
        height: 200px;
        margin-bottom: 20px;
    }
`;

export default Styles;
