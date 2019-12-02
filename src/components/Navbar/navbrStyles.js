import styled from 'styled-components';

const NavbarStyles = styled.div`
    .nav-block {
        margin-top: 20px;
    }
    .nav-block a {
        color: green;
        text-decoration: none;
    }
    .nav-block a:hover {
        color: #20B2AA;
        text-decoration: none;
    }
    .nav-item-block {
        margin-bottom: 10px;
        border: solid 1px;
        border-color: #DCDCDC;
        border-radius: 5px;
    }
    .newMessages{
        margin-left: 2rem;
        font-size: 16px;
    }
`;

export default NavbarStyles;
