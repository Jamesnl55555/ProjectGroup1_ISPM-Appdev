import React, {useState} from "react";

export default function TransactionHistory({tHistory=[]}){
    if (!tHistory || tHistory.length === 0) {
    return <h1>No Transaction History Available</h1>;
    }
    return(
    <div>
        <h1>Transaction History</h1>
        {tHistory.map((history) => (
            <li key={history.id}>
                <strong>Action: </strong> {history.action}
                <br/>
                <strong>Changed Data: </strong> {history.changed_data}
                <br/>
                <strong>Changed at: </strong> {history.updated_at}
            </li>

        ))}
        <h1>=========================</h1>
    </div>
    );
}