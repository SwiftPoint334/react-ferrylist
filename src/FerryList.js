import React, { useState, useEffect } from 'react';
import FerryDetail from './FerryDetail';

const FerryList = () => {

    const [ferry, setFerry] = useState([])

    const [selectedFerry, setSelectedFerry] = useState([])

    useEffect(() => {

        fetch('https://data.novascotia.ca/resource/7izn-s679.json')
            .then(response => response.json())
            .then(data => setFerry(data))
            .catch(error => console.error("Error fetching ferries: ", error))

    }, []);

    const viewFerryDetails = (location) => {
        const match = ferry.find(ferry => ferry.location === location);
        if (match) {
            setSelectedFerry(match)
        } else {
            console.log("No ferry found")
        }
    }

    return(
        <div>
            <h1>Ferry List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {ferry.map(ferry => (
                        <tr key={ferry.location}>
                            <td>{ferry.location}</td>
                            <td>{ferry.ferry_type}</td>
                            <td>
                                <button onClick={() => viewFerryDetails(ferry.location)}>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedFerry && <FerryDetail ferry={selectedFerry} />}
        </div>
    )
}

export default FerryList;