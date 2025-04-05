import React from 'react';

const FerryDetail = ({ ferry }) => {
    return (
        <div>
            <h2>Ferry Details</h2>
            <p><strong>Schedule: </strong>{ferry.schedule}</p>
            <p><strong>Contact: </strong>{ferry.contact}</p>
            <p><strong>Notes: </strong>{ferry.notes}</p>
        </div>
    )
}

export default FerryDetail;