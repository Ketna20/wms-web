import React from 'react';
import classes from './Transaction.module.css';

const transaction = (props) => (
        <tr className={classes.Transaction}>
            <td>{props.transDate}</td>
            <td>{props.transDesc}</td>
            <td>{props.transPrice}</td>
            <td>{props.transQuantity}</td>
            <td>{props.transSymbol}</td>
        </tr>
);
    


export default transaction;