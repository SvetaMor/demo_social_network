import styled from 'styled-components';

const headerStyles = styled.div`
    .navbar {
        color: #fff;
        background-color: #20B2AA;
        margin-bottom: 1em;
    }
    .navbar-brand, .navbar-nav .nav-link{
        color: #fff;

        &:hover {
            color: gold;
        }
    }
    .headerImg {
        width: 50px;
    }
`;

export default headerStyles;
