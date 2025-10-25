import React from "react";
import DeletePHistoryButton from "./DeletePHistoryButton";
export default function ProductHistory({pHistory}){
    
    if (!pHistory || pHistory.length === 0) {
    return <h1>No Product History Available</h1>;
    }


    return(
    <div key='product-history'>
    <h1>Product History</h1>
    {pHistory.map((history) => (

    <div key={history.id}>    
        <br/>
        <strong>Action: </strong> {history.action}
        <br/>
        <strong>Changed Data: </strong> {history.changed_data}
        <br/>
        <strong>Changed at: </strong> {history.updated_at}
        <br/>
        <DeletePHistoryButton id={history.id} />
    </div>
    ))}
    </div>
    );

}