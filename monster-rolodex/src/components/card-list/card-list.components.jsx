import React from 'react'

import './card-list.style.css'

export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monsters => (
        <h1 key={monsters.id}> { monsters.name } </h1>
        ))}
    </div>
); 