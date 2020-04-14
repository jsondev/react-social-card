import React from 'react';
import ICardHeader from './CardHeader';

const CardHeader = (props:ICardHeader) => (
    <ul>
        <li><strong>{props.user}</strong> <span>@ThePracticalDev * Sep 10</span></li>
        <li>Learning React? Start Small.</li>
        <li>author: @dceddia</li>
    </ul>
)



export default CardHeader;