import React from "react";

export default function ProductHistory({product, pHistory=[]}){
    return(
    <div>
    {pHistory.length > 0 && (
        <>
        <h1>Product History</h1>
        {pHistory.map((history) => (
            <li key={history.id}>
                <strong>Product: </strong> {product.name}
                <br/>
                <strong>Action: </strong> {history.action}
                <br/>
                <strong>Changed Data: </strong> {history.changed_data}
                <br/>
                <strong>Changed at: </strong> {history.date}
            </li>

        ))}
        <h1>===============================</h1>
        </>
    )}
    </div>
    );

}