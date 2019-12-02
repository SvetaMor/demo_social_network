import React, {useState,useEffect} from 'react';
import {FormControl} from 'react-bootstrap';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect ( () => {
        setStatus(props.status);
    },[props.status]);

    const activateEditMode = () => {
        if (props.isOwner) setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        < >
            { !editMode &&
                <span onDoubleClick={activateEditMode}>
                    {props.status || "-----"}</span>
            }
            { editMode &&
                <FormControl onBlur={deactivateEditMode} onChange={onStatusChange}
                            value={status} autoFocus={true} />
            }
        </>
    );
}

export default ProfileStatusWithHooks;
