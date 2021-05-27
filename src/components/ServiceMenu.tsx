import React from 'react';

const ServiceMenu:React.FC=()=>{
    return(
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><a href="/salon">SALON</a></li>
            <li className="list-group-item"><a href="/treatments">HAIR TREATMENT</a></li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>
    )
}
export default ServiceMenu;