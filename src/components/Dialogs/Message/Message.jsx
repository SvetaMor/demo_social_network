import React, {useState}  from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import Styles from './messageStyle';
import Time from 'react-pure-time';
import {getFullDate} from '../../../utils/object-helpers';

const Message = ({viewed, senderName, ownName, message, ...props}) =>
{
    let [deleteMode, setDeleteMode] = useState(false);
    let [restoreMode, setRestoreeMode] = useState(props.restoreMode);
    const isOwnMessage = (senderName === ownName);

    const handleBlur=(e)=>
    {
        if (e.relatedTarget!==null && e.relatedTarget.nodeName==="BUTTON") {
          return;
       }
       setDeleteMode(false);
    }
    const handleClick=(e)=>
    {
        props.deleteMessage(props.idMessage);
        e.target.parentElement.hidden = true;
        setDeleteMode(false);
        setRestoreeMode(true);
    }
    const handleRestoreClick=(e)=>
    {
        props.restoreMessageFormDeleted(props.idMessage);
        e.target.parentElement.hidden = false;
        setRestoreeMode(false);
    }
    const fullMonth = getFullDate (props.date);

    return ( <Styles>
        <div className="date-block">
        {props.dateMode&&<Time value={props.date}
            format={`d ${fullMonth} Y`}
        />}
        </div>
        {!restoreMode
        ?<InputGroup size="sm" className="mt-2 mb-2">
            <InputGroup.Prepend>
                <InputGroup.Text className={isOwnMessage?"form-own-sender":"form-sender"}>{senderName}</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl className={!isOwnMessage?"form-message":
                                    viewed?"form-own-message":"viewed-message"}
                onClick={()=>{setDeleteMode(true)}} readOnly
                onBlur={(e)=>{handleBlur(e)}} value ={message}
            />
            <InputGroup.Append>
                <InputGroup.Text>
                    <Time value={props.date} format="H:i" />
                </InputGroup.Text>
            </InputGroup.Append>
            {deleteMode &&
                <Button onClick={(e)=>{handleClick(e)}} className="button-blok"
                    variant="outline-success" size="sm">delete</Button>
            }
        </InputGroup>

        :<div>
            <Button className="button-blok"
                    onClick={(e)=>{handleRestoreClick(e)}}
                     variant="outline-success" size="sm">restore from deleted
            </Button>
        </div>
        }
    </Styles>
    );
}

export default Message;
