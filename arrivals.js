const arrivals = [
    {
        flightNumber: 'SWA2995',
        origin: 'William P. Hobby (HOU)',
        status: 'On Time'
    },
    {
        flightNumber: 'SWA3955',
        origin: 'Ontario Intl (ONT)',
        status: 'On Time'
    },
    {
        flightNumber: 'AAL1768',
        origin: 'Dallas-Fort Worth Intl (DFW)',
        status: 'Delayed'
    },
    {
        flightNumber: 'DAL757',
        origin: 'Hartsfield-Jackson Intl (ATL)',
        status: 'On Time'
    },
    {
        flightNumber: 'WJA1536',
        origin: 'Calgary Int\'l (YYC)',
        status: 'Landed'
    },
    {
        flightNumber: 'SWA747',
        origin: 'Austin-Bergstrom Intl (AUS)',
        status: 'Landed'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const arrivalsTableBody = document.querySelector('#arrivals-table tbody');

    if (arrivalsTableBody) {
        arrivals.forEach(arrival => {
            const row = document.createElement('tr');

            const flightNumberCell = document.createElement('td');
            flightNumberCell.textContent = arrival.flightNumber;
            row.appendChild(flightNumberCell);

            const originCell = document.createElement('td');
            originCell.textContent = arrival.origin;
            row.appendChild(originCell);

            const statusCell = document.createElement('td');
            statusCell.textContent = arrival.status;
            row.appendChild(statusCell);

            arrivalsTableBody.appendChild(row);
        });
    }
});
