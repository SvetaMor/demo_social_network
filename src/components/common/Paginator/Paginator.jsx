import React, {useState} from 'react';
import styles from "./Paginator.module.css";
import cn from "classnames";
import {ButtonToolbar, Button} from 'react-bootstrap';
import {getCountPages} from '../../../utils/object-helpers';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    const gettingPages = getCountPages(totalItemsCount, pageSize, portionSize);

    const pages = gettingPages.pages;
    const portionCount = gettingPages.portionCount;
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return <ButtonToolbar aria-label="Toolbar with button groups" className={styles.buttonToolbar}>
        { portionNumber > 1 &&
        <Button size="sm" variant="info" onClick={() => {setPortionNumber(portionNumber - 1) }}>
                PREV</Button> }

            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                    .map((p) => {
                    return <Button className={ cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
                                variant="outline-info" size="sm"
                                key={p}
                                onClick={(e) => {
                                     onPageChanged(p);
                                }}>{p}</Button>
            })}
        { portionCount > portionNumber &&
            <Button size="sm" variant="info" onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</Button> }


    </ButtonToolbar>
}

export default Paginator;
