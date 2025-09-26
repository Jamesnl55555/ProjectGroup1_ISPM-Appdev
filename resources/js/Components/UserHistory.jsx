import React, {useState} from "react";

export default function UserHistory({user, uHistory=[]}){
    return(
    <div>
    {uHistory.length > 0 && (
        <>
        <h1>User History:</h1>
        {uHistory.map((history) => (
            <li key={history.id}>
                <strong>User Name: </strong> {user.name}
                <br/>
                <strong>Action: </strong> {history.action}
                <br/>
                <strong>Changed Data: </strong> {history.changed_data}
                <br/>
                <strong>Changed at: </strong> {history.date}
            </li>

        ))}
        <h1>========================</h1>
        </>
    )}
    </div>
    );
}