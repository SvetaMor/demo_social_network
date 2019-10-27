import React from 'react';
//import StoreContext from '../../StoreContext';
import SideBar from './SideBar.jsx';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        friends: state.sideBar.friends
    };
};

let mapDispatchToProps =() => { return {};};

const SideBarContainer = connect(mapStateToProps)(SideBar);

export default SideBarContainer;
