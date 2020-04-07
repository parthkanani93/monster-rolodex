import React from 'react';
import './card-list.style.css';
import Card from '../card/card.component'

const Cardlist=(props)=>{
    console.log(props);
    return(
        <div className="card-list"> {props.monster.map((monster) =>
            <Card key={monster.id} monster={monster} />
          )}</div>
    );
}

export default Cardlist;