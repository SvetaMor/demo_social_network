import React from 'react';
import Dialogs from './Dialogs';
import {sendMessageCreator} from '../../redux/dialogs-reducer';
//import StoreContext from '../../StoreContext_dell';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => dispatch(sendMessageCreator(newMessageBody))
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
