import React from 'react'
import { useMemo } from 'react';

export default function ExpensiveComponent({ data, darkMode }) {

    // Filter data without useMemo => only run the function when data changes
    const result = useMemo(() => {
        console.log(data)

        const filteredData = data.filter(number => number > 5);
        console.log('Filtered data:', filteredData);

        return filteredData;
    }, [data])

    // Filter data without useMemo => run the function in every render
    // const result = calc()
    // function calc(){
    //     console.log(data)

    //     const filteredData = data.filter(number => number > 5);
    //     console.log('Filtered data:', filteredData);

    //     return filteredData;
    // }

    return (
        <div>
            <h3>{darkMode ? 'dark' : 'light'}</h3>
            <ul>
                {result.map((updatedNumber, index) => (
                    <li key={index}>{updatedNumber}</li>
                ))}
            </ul>
        </div>
    )
}
