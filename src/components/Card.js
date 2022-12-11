import React from "react";

import classes from './Card.module.css';

const Card = (props) => {
  return (
    props.allData.map(({ id, image, name, price, info }) => (
      <div key={id} className={classes.card}>

        <img src={image} href={name} />

        <div className={classes.info}>
          <div className={classes.title}>
            <h3>{name}</h3>
            <p>$ {price}</p>
          </div>
          <p>{info}</p>
          <button
            onClick={() => props.onDeleteHandler(id)}>
            Not Interested
          </button>
        </div>

      </div>
    )
  ))
};

export default Card;