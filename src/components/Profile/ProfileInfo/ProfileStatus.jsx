import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateMode = () => {
        this.setState ({
            editMode: true
        });
    }
    deactivateMode = () => {
        this.setState ({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.status != this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render () {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateMode}>{this.props.status || "-----"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateMode} onChange={this.onStatusChange} value={this.state.status} autoFocus={true} />
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
