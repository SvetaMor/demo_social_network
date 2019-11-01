import React, {useState,useEffect} from 'react';
import s from './ProfileInfo.module.css';

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
        <div>
            { !editMode &&
                <div>
                    <b>Status: </b><span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onBlur={deactivateEditMode} onChange={onStatusChange}
                            value={status} autoFocus={true} />
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;
