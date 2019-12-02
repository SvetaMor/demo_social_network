import React from 'react';
import s from './SideBar.module.css';
//import Friend from './Friends/Friend.jsx';
////import StoreContext from '../../StoreContext';
//import {connect} from 'react-redux';

const SideBar =(props) => {
    return (<div className={s.side}>
                <h4>Friends</h4>
                <div>
                    {props.friends}
                </div>
            </div>);
}

export default SideBar;
