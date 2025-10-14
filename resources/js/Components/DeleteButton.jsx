import React, { useState } from 'react';
import {router } from "@inertiajs/react";

export default function DeleteButton({ id }) {
    const [visible, setVisible] = useState(false);
    const del = (id) => router.post(route("delete-item", id));

    return (
        <>
        <button onClick={() => setVisible(true)}>
            Delete Product
        </button>
        {visible && (
        <div>
        <h1>Are you sure you want to delete?</h1>
        <h1>================================</h1>
        <button onClick={() => setVisible(false)}>No</button>
        <h1>|||||||||||||||||||||||||||||</h1>
        <button onClick={() => del(id)}>Confirm Delete</button>
        <h1>================================</h1>
        </div>
        )}
        </>  
    );
}
