import React from 'react';
import Dialogs from './Dialogs';
import {getAllDialogs} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
};
let mapDispatchToProps = {getAllDialogs};

class DialogsContainer extends React.Component {
    componentDidMount(){
        this.props.getAllDialogs();
    }
    
    render() {
        return <Dialogs  dialogsPage={this.props.dialogsPage }/>
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer);
