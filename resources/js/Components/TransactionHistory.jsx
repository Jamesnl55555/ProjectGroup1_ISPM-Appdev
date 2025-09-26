import React, {useState} from "react";

export default function UserHistory({tHistory=[]}){
    return(
    <div>
    {tHistory.length > 0 && (
        <>
        <h1>Transaction History</h1>
        {tHistory.map((history) => (
            <li key={history.id}>
                <strong>Action: </strong> {history.action}
                <br/>
                <strong>Changed Data: </strong> {history.changed_data}
                <br/>
                <strong>Changed at: </strong> {history.date}
            </li>

        ))}
        <h1>=========================</h1>
        </>
    )}
    </div>
    );
}