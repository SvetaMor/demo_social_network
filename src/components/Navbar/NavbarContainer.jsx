import React from 'react';
import Navbar from './Navbar.jsx';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        countNewElements: state.dialogsPage.countNewElements
    }
};

class NavbarContainer extends React.Component
{
    render(){
        return <Navbar countNewElements={this.props.countNewElements}/>
    }
}

export default connect(mapStateToProps)(NavbarContainer);
