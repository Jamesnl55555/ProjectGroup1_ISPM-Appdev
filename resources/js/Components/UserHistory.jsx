import React, {useState} from "react";

export default function UserHistory({uHistory=[]}){
    if (!uHistory || uHistory.length === 0) {
    return <h1>No User History Available</h1>;
    }
    return(
    <div>
        <h1>User History:</h1>
        {uHistory.map((history) => (
            <li key={history.id}>
                <strong>User Name: </strong> {user.name}
                <br/>
                <strong>Action: </strong> {history.action}
                <br/>
                <strong>Changed Data: </strong> {history.changed_data}
                <br/>
                <strong>Changed at: </strong> {history.updated_at}
            </li>

        ))}
        <h1>========================</h1> 
    </div>
    );
}