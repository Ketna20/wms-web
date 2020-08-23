import React from 'react';
import axios from 'axios';
import Transaction from './Transaction/Transaction';
import classes from './Reports.module.css';

class Reports extends React.Component {
    state = {
        transactions: []
    }

    componentDidMount () {
        axios.get('/transactions/')
            .then(response => {
                this.setState({transactions: response.data});
                console.log(response.data);
            })
            .catch(error => console.log(error));

    }
    
    render () {
        const trans = this.state.transactions.map(transaction => {
            return <Transaction key={transaction.transactionId} 
                                transDate={transaction.transactionDate}
                                transDesc={transaction.transactionDesc}
                                transPrice={transaction.transactionPrice}
                                transQuantity={transaction.transactionQuantity}
                                transSymbol={transaction.transactionSymbol} />;
        });
        return (
            <div>
                <p>This is the Reports Page.</p>
                <table className={classes.Table}>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Symbol</th>
                    </tr>
                    </thead>
                    <tbody>
                        {trans}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Reports;